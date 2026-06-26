import { Download, RotateCcw } from 'lucide-react'
import { useMemo, useState } from 'react'
import type { IniChange } from '../lib/types'

export function ChangeLogPanel({
  changes,
  onUndo,
  onExportJson,
  onExportMarkdown,
}: {
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
            <article key={change.id} className="change-item">
              <div>
                <strong>
                  {change.sectionName}.{change.key}
                </strong>
                <span>{new Date(change.timestamp).toLocaleString()}</span>
              </div>
              <p>
                <code>{change.previousValue || '空值'}</code> → <code>{change.nextValue || '空值'}</code>
              </p>
              <button type="button" onClick={() => onUndo(change.id)}>
                <RotateCcw size={15} />
                单项撤销
              </button>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}
