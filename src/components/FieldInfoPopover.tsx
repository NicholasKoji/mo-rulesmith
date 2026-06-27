import { ArrowUpRight, Clipboard, X } from 'lucide-react'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { getReferenceDisplayLabel } from '../lib/displayName'
import { getFieldDoc } from '../lib/fieldDocs'
import { isReferenceKey, splitTargets } from '../lib/references'
import type { IniDocument, IniEntry } from '../lib/types'
import { analyzeValue } from '../lib/valueAnalysis'
import { RiskBadge } from './RiskBadge'
import { ValueStrengthBadge } from './ValueStrengthBadge'

interface Props {
  document: IniDocument
  entry: IniEntry
  anchor: HTMLElement
  onClose: () => void
  onJump: (target: string) => void
}

export function FieldInfoPopover({ document: iniDocument, entry, anchor, onClose, onJump }: Props) {
  const popoverRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ top: 0, left: 0 })
  const doc = getFieldDoc(entry.key)
  const analysis = analyzeValue(entry.key, entry.currentValue)
  const referenceTargets = isReferenceKey(entry.key) ? splitTargets(entry.currentValue) : []
  const referenceLabel = referenceTargets.length
    ? referenceTargets.map((target) => `${target} / ${getReferenceDisplayLabel(iniDocument, target)}`).join(', ')
    : undefined

  useLayoutEffect(() => {
    function place() {
      const rect = anchor.getBoundingClientRect()
      const popoverWidth = 360
      const gap = 8
      const left = Math.min(Math.max(12, rect.right + gap), window.innerWidth - popoverWidth - 12)
      const top = Math.min(Math.max(12, rect.top - 12), window.innerHeight - 420)
      setPosition({ left, top })
    }

    place()
    window.addEventListener('resize', place)
    window.addEventListener('scroll', place, true)
    return () => {
      window.removeEventListener('resize', place)
      window.removeEventListener('scroll', place, true)
    }
  }, [anchor])

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      const target = event.target as Node
      if (anchor.contains(target) || popoverRef.current?.contains(target)) return
      onClose()
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose()
    }

    globalThis.document.addEventListener('pointerdown', handlePointerDown)
    globalThis.document.addEventListener('keydown', handleKeyDown)
    return () => {
      globalThis.document.removeEventListener('pointerdown', handlePointerDown)
      globalThis.document.removeEventListener('keydown', handleKeyDown)
    }
  }, [anchor, onClose])

  return (
    <div ref={popoverRef} className="field-info-popover" style={{ top: position.top, left: position.left }}>
      <div className="field-info-heading">
        <div>
          <p>{doc.zhName}</p>
          <h3>{entry.key}</h3>
        </div>
        <RiskBadge risk={doc.risk} />
        <button type="button" className="icon-button" aria-label="关闭字段说明" onClick={onClose}>
          <X size={15} />
        </button>
      </div>

      <dl className="field-info-list">
        <dt>当前值</dt>
        <dd className="mono">{entry.currentValue || '空值'}</dd>
        <dt>原始值</dt>
        <dd className="mono">{entry.originalValue || '空值'}</dd>
        {referenceLabel && (
          <>
            <dt>引用目标</dt>
            <dd>{referenceLabel}</dd>
          </>
        )}
        <dt>说明</dt>
        <dd>{doc.description}</dd>
        <dt>强弱判断</dt>
        <dd>
          <ValueStrengthBadge fieldKey={entry.key} value={entry.currentValue} />
          <p>{analysis.detail}</p>
        </dd>
        <dt>修改方向</dt>
        <dd>{doc.valueDirection}</dd>
        {doc.observedRange && (
          <>
            <dt>建议范围</dt>
            <dd>{doc.observedRange}</dd>
          </>
        )}
        {doc.suggestedChange && (
          <>
            <dt>建议</dt>
            <dd>{doc.suggestedChange}</dd>
          </>
        )}
      </dl>

      <div className="field-info-actions">
        {referenceTargets[0] && (
          <button type="button" onClick={() => onJump(referenceTargets[0])}>
            <ArrowUpRight size={15} />
            跳转引用
          </button>
        )}
        <button type="button" onClick={() => navigator.clipboard.writeText(entry.key)}>
          <Clipboard size={15} />
          复制 Key
        </button>
        <button type="button" onClick={() => navigator.clipboard.writeText(entry.currentValue)}>
          <Clipboard size={15} />
          复制值
        </button>
      </div>
    </div>
  )
}
