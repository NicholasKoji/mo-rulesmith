import { Copy, RotateCcw, Trash2 } from 'lucide-react'
import { getFieldDoc } from '../lib/fieldDocs'
import { isReferenceKey } from '../lib/references'
import type { IniEntry } from '../lib/types'
import { RiskBadge } from './RiskBadge'
import { ValueStrengthBadge } from './ValueStrengthBadge'

export function FieldEditorRow({
  entry,
  onChange,
  onRevert,
  onDelete,
  onJump,
  onFocus,
}: {
  entry: IniEntry
  onChange: (value: string) => void
  onRevert: () => void
  onDelete: () => void
  onJump: (target: string) => void
  onFocus: () => void
}) {
  const doc = getFieldDoc(entry.key)
  const canJump = isReferenceKey(entry.key) && entry.currentValue

  return (
    <tr className={entry.modified || entry.deleted || entry.added ? 'modified-row' : undefined} onFocus={onFocus}>
      <td>
        <span className="mono strong">{entry.key}</span>
        {entry.isDuplicate && <small>#{entry.duplicateIndex}</small>}
      </td>
      <td>{doc.zhName}</td>
      <td>
        <input
          className="value-input"
          value={entry.currentValue}
          disabled={entry.deleted}
          onChange={(event) => onChange(event.target.value)}
        />
      </td>
      <td className="muted mono">{entry.originalValue || '—'}</td>
      <td>
        <ValueStrengthBadge fieldKey={entry.key} value={entry.currentValue} />
      </td>
      <td>
        <RiskBadge risk={doc.risk} />
      </td>
      <td className="row-actions">
        {canJump && (
          <button type="button" title="跳转引用" onClick={() => onJump(entry.currentValue)}>
            ↗
          </button>
        )}
        <button type="button" title="复制字段" onClick={() => navigator.clipboard.writeText(`${entry.key}=${entry.currentValue}`)}>
          <Copy size={15} />
        </button>
        <button type="button" title="恢复原值" onClick={onRevert}>
          <RotateCcw size={15} />
        </button>
        <button type="button" title="注释删除" onClick={onDelete}>
          <Trash2 size={15} />
        </button>
      </td>
    </tr>
  )
}
