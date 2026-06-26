import { Download, RotateCcw } from 'lucide-react'
import { useMemo, useState } from 'react'
import { getSectionDisplayInfo } from '../lib/displayName'
import { getFieldDoc } from '../lib/fieldDocs'
import type { IniChange, IniDocument } from '../lib/types'
import { RiskBadge } from './RiskBadge'

export function ChangeLogPanel({
  document,
  changes,
  onUndo,
  onExportJson,
  onExportMarkdown,
}: {
  document: IniDocument
  changes: IniChange[]
  onUndo: (changeId: string) => void
  onExportJson: () => void
  onExportMarkdown: () => void
}) {
  const [sectionFilter, setSectionFilter] = useState('')
  const [riskFilter, setRiskFilter] = useState('all')
  const sections = useMemo(() => Array.from(new Set(changes.map((change) => change.sectionName))).sort(), [changes])
  const filteredChanges = changes.filter(
    (change) =>
      (!sectionFilter || change.sectionName === sectionFilter) &&
      (riskFilter === 'all' || change.risk === riskFilter),
  )

  return (
    <section className="change-log">
      <div className="panel-title">
        <div>
          <p>修改记录</p>
          <strong>{changes.length} 项变更</strong>
        </div>
        <div className="title-actions">
          <button type="button" onClick={onExportJson}>
            <Download size={15} />
            JSON
          </button>
          <button type="button" onClick={onExportMarkdown}>
            <Download size={15} />
            Markdown
          </button>
        </div>
      </div>
      <div className="change-filters">
        <select value={sectionFilter} onChange={(event) => setSectionFilter(event.target.value)}>
          <option value="">全部 Section</option>
          {sections.map((section) => (
            <option key={section} value={section}>
              {section}
            </option>
          ))}
        </select>
        <select value={riskFilter} onChange={(event) => setRiskFilter(event.target.value)}>
          <option value="all">全部风险</option>
          <option value="safe">推荐改</option>
          <option value="caution">谨慎改</option>
          <option value="danger">高风险</option>
          <option value="unknown">未知</option>
        </select>
      </div>
      {changes.length === 0 ? (
        <p className="empty">还没有修改。编辑字段后，这里会记录修改前后对比。</p>
      ) : (
        <div className="change-list">
          {filteredChanges.map((change) => (
            <ChangeLogItem key={change.id} document={document} change={change} onUndo={onUndo} />
          ))}
        </div>
      )}
    </section>
  )
}

function ChangeLogItem({
  document,
  change,
  onUndo,
}: {
  document: IniDocument
  change: IniChange
  onUndo: (changeId: string) => void
}) {
  const section = document.sectionsByName.get(change.sectionName)
  const display = section ? getSectionDisplayInfo(section) : undefined
  const doc = getFieldDoc(change.key)

  return (
    <article className="change-item">
      <div>
        <strong>
          {display?.displayName ?? change.sectionName} / <span className="mono">{change.sectionName}</span>
        </strong>
        <span>{new Date(change.timestamp).toLocaleString()}</span>
      </div>
      <p>
        {doc.zhName} <code>{change.key}</code>: <code>{change.previousValue || '空值'}</code> →{' '}
        <code>{change.nextValue || '空值'}</code>
      </p>
      <div className="change-actions">
        <RiskBadge risk={change.risk} />
        <button type="button" onClick={() => onUndo(change.id)}>
          <RotateCcw size={15} />
          单项撤销
        </button>
      </div>
    </article>
  )
}
