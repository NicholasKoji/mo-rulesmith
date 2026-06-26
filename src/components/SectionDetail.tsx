import clsx from 'clsx'
import { GitBranch, History, ListChecks, Plus, RotateCcw, ScrollText } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { getSectionDisplayInfo } from '../lib/displayName'
import { getFieldDoc, getFieldLabel } from '../lib/fieldDocs'
import { getEntry } from '../lib/iniParser'
import { getWarheadArmorRows } from '../lib/references'
import { analyzePercent } from '../lib/valueAnalysis'
import type { IniChange, IniDocument, IniEntry } from '../lib/types'
import { FieldEditorRow } from './FieldEditorRow'
import { RawPreview } from './RawPreview'
import { ReferenceGraph } from './ReferenceGraph'
import { RiskBadge } from './RiskBadge'

type DetailTab = 'fields' | 'references' | 'raw' | 'changes'

const detailTabs: Array<{ id: DetailTab; label: string; icon: typeof ListChecks }> = [
  { id: 'fields', label: '字段', icon: ListChecks },
  { id: 'references', label: '引用链', icon: GitBranch },
  { id: 'raw', label: '原文', icon: ScrollText },
  { id: 'changes', label: '修改', icon: History },
]

export function SectionDetail({
  document,
  sectionName,
  focusedEntry,
  changes,
  onFocusEntry,
  onUpdateEntry,
  onRevertEntry,
  onDeleteEntry,
  onAddEntry,
  onUndoChange,
  onJump,
}: {
  document: IniDocument
  sectionName?: string
  focusedEntry?: IniEntry
  changes: IniChange[]
  onFocusEntry: (entry: IniEntry) => void
  onUpdateEntry: (entryId: string, value: string) => void
  onRevertEntry: (entryId: string) => void
  onDeleteEntry: (entryId: string) => void
  onAddEntry: (sectionName: string, key: string, value: string) => void
  onUndoChange: (changeId: string) => void
  onJump: (sectionName: string) => void
}) {
  const [newKey, setNewKey] = useState('')
  const [newValue, setNewValue] = useState('')
  const [activeTab, setActiveTab] = useState<DetailTab>('fields')
  const section = sectionName ? document.sectionsByName.get(sectionName) : undefined
  const firstEntry = section?.entries[0]
  const effectiveFocused = focusedEntry?.sectionName === sectionName ? focusedEntry : firstEntry

  const summaryFields = useMemo(() => {
    if (!section) return []
    return ['UIName', 'Name', 'Strength', 'Armor', 'Cost', 'TechLevel', 'Primary', 'Secondary', 'Speed', 'ROT', 'BuildLimit']
      .map((key) => getEntry(document, section.name, key))
      .filter(Boolean) as IniEntry[]
  }, [document, section])

  const sectionChanges = useMemo(
    () => changes.filter((change) => change.sectionName === sectionName),
    [changes, sectionName],
  )

  useEffect(() => {
    setActiveTab('fields')
  }, [sectionName])

  useEffect(() => {
    if (effectiveFocused) onFocusEntry(effectiveFocused)
  }, [effectiveFocused, onFocusEntry])

  if (!section) {
    return (
      <section className="detail-empty">
        <img src="/assets/empty-state.png" alt="" />
        <h2>从左侧选择一个对象，或搜索单位、武器、字段名称。</h2>
      </section>
    )
  }

  const armorRows = section.type === 'Warhead' ? getWarheadArmorRows(document, section.name) : []
  const display = getSectionDisplayInfo(section)

  return (
    <section className="detail-grid">
      <div className="detail-main">
        <section className="object-card">
          <div className="object-heading">
            <div>
              <p className="eyebrow">{section.type}</p>
              <h2 title={display.displayName}>{display.displayName}</h2>
              <span className="muted">
                行 {section.startLine.toLocaleString()} - {section.endLine.toLocaleString()} · {section.entries.length} 字段
              </span>
            </div>
            <div className="object-status">
              <span>{sectionChanges.length} 项修改</span>
              <span>{summaryFields.length} 个关键字段</span>
            </div>
          </div>

          <div className="identity-grid">
            <div>
              <span>Section ID</span>
              <strong className="mono">{section.name}</strong>
            </div>
            <div>
              <span>UIName</span>
              <strong className="mono">{display.uiName ?? '空值'}</strong>
            </div>
            <div>
              <span>Name</span>
              <strong>{display.rawName ?? '空值'}</strong>
            </div>
            <div>
              <span>类型</span>
              <strong>{section.type}</strong>
            </div>
          </div>

          <div className="summary-grid">
            {summaryFields.map((entry) => (
              <div key={entry.id}>
                <span>
                  {getFieldLabel(entry.key)} {entry.key}
                </span>
                <strong className="mono">{entry.currentValue || '空值'}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="object-workbench">
          <div className="object-tabs" role="tablist" aria-label="对象详情">
            {detailTabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  className={clsx(activeTab === tab.id && 'active')}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <Icon size={15} />
                  {tab.label}
                  {tab.id === 'changes' && sectionChanges.length > 0 && <b>{sectionChanges.length}</b>}
                </button>
              )
            })}
          </div>

          {activeTab === 'fields' && (
            <section className="field-table-panel">
              <div className="panel-title">
                <div>
                  <p>字段编辑</p>
                  <strong>{section.entries.length} 个字段</strong>
                </div>
                <button type="button" onClick={() => section.entries.forEach((entry) => entry.modified && onRevertEntry(entry.id))}>
                  <RotateCcw size={15} />
                  恢复本段
                </button>
              </div>
              <div className="field-table-scroll">
                <table className="field-table">
                  <thead>
                    <tr>
                      <th>中文字段名</th>
                      <th>Key</th>
                      <th>当前值</th>
                      <th>原始值</th>
                      <th>说明</th>
                      <th>强弱</th>
                      <th>风险</th>
                      <th>操作</th>
                    </tr>
                  </thead>
                  <tbody>
                    {section.entries.map((entry) => (
                      <FieldEditorRow
                        key={entry.id}
                        document={document}
                        entry={entry}
                        onFocus={() => onFocusEntry(entry)}
                        onChange={(value) => onUpdateEntry(entry.id, value)}
                        onRevert={() => onRevertEntry(entry.id)}
                        onDelete={() => onDeleteEntry(entry.id)}
                        onJump={onJump}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
              <form
                className="add-field"
                onSubmit={(event) => {
                  event.preventDefault()
                  onAddEntry(section.name, newKey, newValue)
                  setNewKey('')
                  setNewValue('')
                }}
              >
                <input placeholder="新增 Key" value={newKey} onChange={(event) => setNewKey(event.target.value)} />
                <input placeholder="Value" value={newValue} onChange={(event) => setNewValue(event.target.value)} />
                <button type="submit">
                  <Plus size={16} />
                  新增字段
                </button>
              </form>

              {armorRows.length > 0 && (
                <section className="armor-table">
                  <div className="mini-title">护甲倍率</div>
                  <div className="armor-grid">
                    {armorRows.map((row) => {
                      const analysis = analyzePercent(Number.parseFloat(row.value.replace('%', '')))
                      return (
                        <div key={row.armor}>
                          <span className="mono">{row.armor}</span>
                          <strong>{row.value}</strong>
                          <em>{analysis.label}</em>
                        </div>
                      )
                    })}
                  </div>
                </section>
              )}
            </section>
          )}

          {activeTab === 'references' && <ReferenceGraph document={document} sectionName={section.name} onJump={onJump} />}
          {activeTab === 'raw' && <RawPreview document={document} sectionName={section.name} />}
          {activeTab === 'changes' && (
            <section className="object-change-panel">
              <div className="panel-title">
                <div>
                  <p>当前对象修改</p>
                  <strong>{sectionChanges.length} 项变更</strong>
                </div>
              </div>
              {sectionChanges.length === 0 ? (
                <p className="empty">这个对象还没有修改。编辑字段后，这里会保留可回退的记录。</p>
              ) : (
                <div className="change-list compact">
                  {sectionChanges.map((change) => {
                    const doc = getFieldDoc(change.key)
                    return (
                      <article className="change-item" key={change.id}>
                        <div>
                          <strong>
                            {doc.zhName} <span className="mono">{change.key}</span>
                          </strong>
                          <span>{new Date(change.timestamp).toLocaleString()}</span>
                        </div>
                        <p>
                          <code>{change.previousValue || '空值'}</code> → <code>{change.nextValue || '空值'}</code>
                        </p>
                        <div className="change-actions">
                          <RiskBadge risk={change.risk} />
                          <button type="button" onClick={() => onUndoChange(change.id)}>
                            <RotateCcw size={15} />
                            回退
                          </button>
                        </div>
                      </article>
                    )
                  })}
                </div>
              )}
            </section>
          )}
        </section>
      </div>
    </section>
  )
}
