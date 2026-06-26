import { BookOpen, ShieldAlert } from 'lucide-react'
import { getFieldDoc } from '../lib/fieldDocs'
import type { IniEntry } from '../lib/types'
import { RiskBadge } from './RiskBadge'
import { ValueStrengthBadge } from './ValueStrengthBadge'

export function FieldHelpPanel({ entry }: { entry?: IniEntry }) {
  if (!entry) {
    return (
      <aside className="help-panel">
        <BookOpen size={20} />
        <h3>字段解释</h3>
        <p>选择一个字段后，这里会显示中文解释、修改方向、建议范围和风险等级。</p>
      </aside>
    )
  }

  const doc = getFieldDoc(entry.key)
  return (
    <aside className="help-panel">
      <div className="help-heading">
        <BookOpen size={20} />
        <div>
          <p className="muted">字段</p>
          <h3>{entry.key}</h3>
        </div>
        <RiskBadge risk={doc.risk} />
      </div>
      <dl className="help-list">
        <dt>中文</dt>
        <dd>{doc.zhName}</dd>
        <dt>说明</dt>
        <dd>{doc.description}</dd>
        <dt>当前值</dt>
        <dd className="mono">{entry.currentValue || '空值'}</dd>
        <dt>强弱判断</dt>
        <dd>
          <ValueStrengthBadge fieldKey={entry.key} value={entry.currentValue} />
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
      {doc.risk === 'danger' && (
        <p className="danger-note">
          <ShieldAlert size={16} />
          高风险字段不是禁止修改，但建议先检查引用链和战役脚本影响。
        </p>
      )}
    </aside>
  )
}
