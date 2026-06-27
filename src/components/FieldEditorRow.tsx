import clsx from 'clsx'
import { ArrowUpRight, CircleHelp, Copy, RotateCcw, Trash2 } from 'lucide-react'
import { useRef, useState } from 'react'
import { getReferenceDisplayLabel } from '../lib/displayName'
import { getFieldDoc } from '../lib/fieldDocs'
import { isReferenceKey, splitTargets } from '../lib/references'
import type { IniDocument, IniEntry } from '../lib/types'
import { FieldInfoPopover } from './FieldInfoPopover'
import { RiskBadge } from './RiskBadge'
import { ValueStrengthBadge } from './ValueStrengthBadge'

export function FieldEditorRow({
  document,
  entry,
  onChange,
  onRevert,
  onDelete,
  onJump,
  onFocus,
  selected,
}: {
  document: IniDocument
  entry: IniEntry
  onChange: (value: string) => void
  onRevert: () => void
  onDelete: () => void
  onJump: (target: string) => void
  onFocus: () => void
  selected: boolean
}) {
  const doc = getFieldDoc(entry.key)
  const canJump = isReferenceKey(entry.key) && entry.currentValue
  const referenceTargets = canJump ? splitTargets(entry.currentValue) : []
  const referenceTarget = referenceTargets[0]
  const referenceLabel = referenceTargets.length ? formatReferenceValue(document, entry.currentValue) : undefined
  const [infoOpen, setInfoOpen] = useState(false)
  const infoButtonRef = useRef<HTMLButtonElement>(null)
  const status = entry.deleted ? '已删除' : entry.added ? '新增' : entry.modified ? '已修改' : '未修改'

  return (
    <tr className={clsx((entry.modified || entry.deleted || entry.added) && 'modified-row', selected && 'selected')} onFocus={onFocus} onClick={onFocus}>
      <td className="field-name-cell">
        <strong>{doc.zhName}</strong>
        <span className="mono">{entry.key}</span>
        {entry.isDuplicate && <small>#{entry.duplicateIndex}</small>}
      </td>
      <td className="field-value-cell">
        <div className="value-editor-wrap">
          <input
            className="value-input"
            value={entry.currentValue}
            disabled={entry.deleted}
            onChange={(event) => onChange(event.target.value)}
            onClick={(event) => event.stopPropagation()}
          />
          <button
            ref={infoButtonRef}
            type="button"
            className="icon-button inline-info-button"
            title="查看字段说明"
            aria-expanded={infoOpen}
            onClick={(event) => {
              event.stopPropagation()
              setInfoOpen((open) => !open)
            }}
          >
            <CircleHelp size={15} />
          </button>
        </div>
        {infoOpen && infoButtonRef.current && (
          <FieldInfoPopover
            document={document}
            entry={entry}
            anchor={infoButtonRef.current}
            onClose={() => setInfoOpen(false)}
            onJump={onJump}
          />
        )}
        {referenceLabel && (
          <button type="button" className="reference-value" onClick={() => referenceTarget && onJump(referenceTarget)}>
            {referenceLabel}
          </button>
        )}
      </td>
      <td className="muted mono original-value-cell">{entry.originalValue || '—'}</td>
      <td>
        <span className={clsx('status-badge', entry.modified && 'status-modified', entry.added && 'status-added', entry.deleted && 'status-deleted')}>
          {status}
        </span>
      </td>
      <td className="compact-strength">
        <ValueStrengthBadge fieldKey={entry.key} value={entry.currentValue} />
      </td>
      <td>
        <RiskBadge risk={doc.risk} />
      </td>
      <td className="actions-cell">
        <div className="row-actions">
          {referenceTarget ? (
            <button type="button" className="icon-button" title="跳转引用" onClick={() => onJump(referenceTarget)}>
              <ArrowUpRight size={15} />
            </button>
          ) : (
            <span className="icon-button action-placeholder" aria-hidden="true" />
          )}
          <button type="button" className="icon-button" title="复制字段" onClick={() => navigator.clipboard.writeText(`${entry.key}=${entry.currentValue}`)}>
            <Copy size={15} />
          </button>
          <button type="button" className="icon-button" title="恢复原值" onClick={onRevert}>
            <RotateCcw size={15} />
          </button>
          <button
            type="button"
            className="icon-button danger-icon"
            title="注释删除"
            onClick={() => {
              if (window.confirm(`确认删除 ${entry.key} 吗？`)) onDelete()
            }}
          >
            <Trash2 size={15} />
          </button>
        </div>
      </td>
    </tr>
  )
}

function formatReferenceValue(document: IniDocument, value: string) {
  return splitTargets(value)
    .map((target) => getReferenceDisplayLabel(document, target))
    .join(', ')
}
