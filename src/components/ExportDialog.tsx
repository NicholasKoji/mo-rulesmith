import { AlertTriangle, Download, X } from 'lucide-react'
import { exportIni, downloadText } from '../lib/iniExporter'
import { validateDocument } from '../lib/validators'
import type { IniChange, IniDocument } from '../lib/types'

export function ExportDialog({
  open,
  document,
  changes,
  onClose,
}: {
  open: boolean
  document: IniDocument
  changes: IniChange[]
  onClose: () => void
}) {
  if (!open) return null

  const issues = validateDocument(document)
  const today = new Date().toISOString().slice(0, 10)
  const filename = `rulesmo.modified.${today}.ini`

  return (
    <div className="modal-backdrop">
      <section className="export-dialog">
        <button className="icon-button close-button" type="button" onClick={onClose} aria-label="关闭">
          <X size={18} />
        </button>
        <div className="dialog-heading">
          <AlertTriangle size={22} />
          <div>
            <p>导出确认</p>
            <h2>你即将导出修改后的 rulesmo.ini</h2>
          </div>
        </div>
        <p className="muted">共修改 {changes.length} 项。导出前建议备份原始 rulesmo.ini。</p>
        <div className="issue-list">
          {changes.slice(0, 10).map((change) => (
            <p key={change.id}>
              <code>
                {change.sectionName}.{change.key}
              </code>{' '}
              {change.previousValue || '空值'} → {change.nextValue || '空值'}
            </p>
          ))}
          {changes.length > 10 && <p className="muted">另有 {changes.length - 10} 项修改未显示。</p>}
        </div>
        <div className="issue-list">
          {issues.length === 0 ? (
            <p className="good-line">安全检查未发现明显问题。</p>
          ) : (
            issues.slice(0, 12).map((issue) => (
              <p key={issue.id} className={`issue issue-${issue.severity}`}>
                {issue.sectionName && <code>{issue.sectionName}.{issue.key}</code>} {issue.message}
              </p>
            ))
          )}
          {issues.length > 12 && <p className="muted">另有 {issues.length - 12} 项提示未显示。</p>}
        </div>
        <div className="dialog-actions">
          <button type="button" onClick={onClose}>
            取消
          </button>
          <button
            className="primary-button"
            type="button"
            onClick={() => {
              downloadText(filename, exportIni(document))
              onClose()
            }}
          >
            <Download size={17} />
            下载 {filename}
          </button>
        </div>
      </section>
    </div>
  )
}
