import { Plus, RotateCcw } from 'lucide-react'
import { useMemo, useState } from 'react'
import { getSectionDisplayInfo } from '../lib/displayName'
import { getEntry } from '../lib/iniParser'
import { getWarheadArmorRows } from '../lib/references'
import { analyzePercent } from '../lib/valueAnalysis'
import type { IniDocument, IniEntry } from '../lib/types'
import { FieldEditorRow } from './FieldEditorRow'
import { FieldHelpPanel } from './FieldHelpPanel'
import { RawPreview } from './RawPreview'
import { ReferenceGraph } from './ReferenceGraph'

export function SectionDetail({
  document,
  sectionName,
  focusedEntry,
  onFocusEntry,
  onUpdateEntry,
  onRevertEntry,
  onDeleteEntry,
  onAddEntry,
  onJump,
}: {
  document: IniDocument
  sectionName?: string
  focusedEntry?: IniEntry
  onFocusEntry: (entry: IniEntry) => void
  onUpdateEntry: (entryId: string, value: string) => void
  onRevertEntry: (entryId: string) => void
  onDeleteEntry: (entryId: string) => void
  onAddEntry: (sectionName: string, key: string, value: string) => void
  onJump: (sectionName: string) => void
}) {
  const [newKey, setNewKey] = useState('')
  const [newValue, setNewValue] = useState('')
  const section = sectionName ? document.sectionsByName.get(sectionName) : undefined
  const firstEntry = section?.entries[0]
  const effectiveFocused = focusedEntry?.sectionName === sectionName ? focusedEntry : firstEntry

  const summaryFields = useMemo(() => {
    if (!section) return []
    return ['UIName', 'Name', 'Strength', 'Armor', 'Cost', 'TechLevel', 'Primary', 'Secondary', 'Speed', 'ROT', 'BuildLimit']
      .map((key) => getEntry(document, section.name, key))
      .filter(Boolean) as IniEntry[]
  }, [document, section])

  if (!section) {
    return (
      <section className="detail-empty">
        <img src="/assets/empty-state.png" alt="" />
        <h2>从左侧选择一个分类，或搜索单位、武器、字段名称。</h2>
      </section>
    )
  }

  const armorRows = section.type === 'Warhead' ? getWarheadArmorRows(document, section.name) : []
  const display = getSectionDisplayInfo(section)

  return (
    <section className="detail-grid">
      <div className="detail-main">
        <section className="object-card">
          <div>
            <p className="eyebrow">{section.type}</p>
            <h2 title={display.displayName}>{display.displayName}</h2>
            <span className="muted">
              行 {section.startLine.toLocaleString()} - {section.endLine.toLocaleString()} · {section.entries.length} 字段
            </span>
          </div>
          <div className="identity-grid">
            <div>
              <span>Section ID</span>
              <strong className="mono">{section.name}</strong>
            </div>
            <div>
              <span>UIName</span>
              <strong className="mono">{display.uiName ?? '—'}</strong>
            </div>
            <div>
              <span>Name</span>
              <strong>{display.rawName ?? '—'}</strong>
            </div>
            <div>
              <span>类型</span>
              <strong>{section.type}</strong>
            </div>
          </div>
          <div className="summary-grid">
            {summaryFields.map((entry) => (
              <div key={entry.id}>
                <span>{entry.key}</span>
                <strong className="mono">{entry.currentValue}</strong>
              </div>
            ))}
          </div>
        </section>

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
                  <th>Key</th>
                  <th>中文名</th>
                  <th>当前值</th>
                  <th>原始值</th>
                  <th>强弱</th>
                  <th>风险</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                {section.entries.map((entry) => (
                  <FieldEditorRow
                    key={entry.id}
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
        </section>

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

        <ReferenceGraph document={document} sectionName={section.name} onJump={onJump} />
        <RawPreview document={document} sectionName={section.name} />
      </div>

      <FieldHelpPanel document={document} entry={effectiveFocused} />
    </section>
  )
}
