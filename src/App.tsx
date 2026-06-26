import { Download, FileSearch, Search, ShieldCheck, SlidersHorizontal, Undo2 } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { ChangeLogPanel } from './components/ChangeLogPanel'
import { ExportDialog } from './components/ExportDialog'
import { FileUploadPanel } from './components/FileUploadPanel'
import { SectionDetail } from './components/SectionDetail'
import { SectionTable } from './components/SectionTable'
import { SidebarNav } from './components/SidebarNav'
import { downloadText } from './lib/iniExporter'
import { getEntry } from './lib/iniParser'
import { presets } from './lib/presets'
import type { IniEntry, PresetChange } from './lib/types'
import { useIniStore } from './store/useIniStore'

function App() {
  const {
    document,
    selectedSection,
    activeView,
    query,
    searchResults,
    changes,
    error,
    parseText,
    setActiveView,
    selectSection,
    setQuery,
    updateEntry,
    revertEntry,
    deleteEntry,
    addEntry,
    undoChange,
    clearChanges,
    applyPresetChanges,
    exportChangesJson,
    exportChangesMarkdown,
  } = useIniStore()
  const [focusedEntry, setFocusedEntry] = useState<IniEntry | undefined>()
  const [exportOpen, setExportOpen] = useState(false)
  const [presetPreview, setPresetPreview] = useState<{ name: string; changes: PresetChange[] } | undefined>()
  const [draftQuery, setDraftQuery] = useState(query)

  const stats = document?.stats
  const selectedSectionObject = selectedSection ? document?.sectionsByName.get(selectedSection) : undefined
  const selectedEntry = useMemo(() => {
    if (!document || !selectedSection) return undefined
    return focusedEntry?.sectionName === selectedSection ? focusedEntry : getEntry(document, selectedSection, 'Speed') ?? selectedSectionObject?.entries[0]
  }, [document, focusedEntry, selectedSection, selectedSectionObject])

  useEffect(() => {
    const timeout = window.setTimeout(() => setQuery(draftQuery), 220)
    return () => window.clearTimeout(timeout)
  }, [draftQuery, setQuery])

  if (!document) {
    return (
      <main className="app-shell upload-shell">
        <FileUploadPanel onLoad={parseText} />
        {error && <p className="error-line">{error}</p>}
        <footer className="app-footer">
          MO Rulesmith 是一个非官方 Mod 配置辅助工具。本工具不包含、不分发任何 Mental Omega 或 Command &amp; Conquer 游戏资源。
        </footer>
      </main>
    )
  }

  function exportSidecar(filename: string, text: string) {
    downloadText(filename, text)
  }

  return (
    <main className="workspace">
      <SidebarNav document={document} activeView={activeView} onChange={setActiveView} />
      <section className="work-area">
        <header className="topbar">
          <div>
            <p className="eyebrow">MO RULESMITH</p>
            <h1>心灵终结规则工坊</h1>
          </div>
          <div className="file-stats">
            <span>{stats?.fileName}</span>
            <span>{formatBytes(stats?.fileSize ?? 0)}</span>
            <span>{stats?.totalLines.toLocaleString()} 行</span>
            <span>{stats?.sectionCount.toLocaleString()} 段</span>
            <span>{stats?.keyValueCount.toLocaleString()} 键值</span>
            {stats?.looksLikeRulesMo && (
              <strong>
                <ShieldCheck size={14} />
                rulesmo 特征
              </strong>
            )}
          </div>
          <div className="top-actions">
            <div className="search-box">
              <Search size={17} />
              <input placeholder="搜索 CNTR / Speed / Damage / 注释" value={draftQuery} onChange={(event) => setDraftQuery(event.target.value)} />
            </div>
            <button type="button" onClick={clearChanges}>
              <Undo2 size={16} />
              全部撤销
            </button>
            <button type="button" className="primary-button" onClick={() => setExportOpen(true)}>
              <Download size={17} />
              导出
            </button>
          </div>
        </header>

        <section className="preset-strip">
          <SlidersHorizontal size={16} />
          {presets.map((preset) => (
            <button
              key={preset.id}
              type="button"
              onClick={() => setPresetPreview({ name: preset.name, changes: preset.buildChanges(document) })}
            >
              {preset.name}
            </button>
          ))}
        </section>

        {query && (
          <section className="search-results">
            <div className="mini-title">
              <FileSearch size={16} />
              搜索结果 {searchResults.length}
            </div>
            <div className="result-row-wrap">
              {searchResults.slice(0, 40).map((result) => (
                <button key={result.id} type="button" onClick={() => selectSection(result.sectionName)}>
                  <span>{result.type}</span>
                  <strong>{result.sectionName}</strong>
                  {result.key && <code>{result.key}={result.value}</code>}
                </button>
              ))}
            </div>
          </section>
        )}

        {activeView === 'Changes' ? (
          <ChangeLogPanel
            changes={changes}
            onUndo={undoChange}
            onExportJson={() => exportSidecar('mo-rulesmith.changes.json', exportChangesJson())}
            onExportMarkdown={() => exportSidecar('mo-rulesmith.changes.md', exportChangesMarkdown())}
          />
        ) : (
          <section className="content-grid">
            <SectionTable document={document} activeView={activeView} selectedSection={selectedSection} onSelect={selectSection} />
            <SectionDetail
              document={document}
              sectionName={selectedSection}
              focusedEntry={selectedEntry}
              onFocusEntry={setFocusedEntry}
              onUpdateEntry={updateEntry}
              onRevertEntry={revertEntry}
              onDeleteEntry={deleteEntry}
              onAddEntry={addEntry}
              onJump={selectSection}
            />
          </section>
        )}

        <footer className="app-footer">
          MO Rulesmith 是一个非官方 Mod 配置辅助工具。本工具不包含、不分发任何 Mental Omega 或 Command &amp; Conquer 游戏资源。请在修改
          rulesmo.ini 前备份原文件。错误修改可能导致游戏崩溃、战役异常或平衡变化。
        </footer>
      </section>

      <ExportDialog open={exportOpen} document={document} changes={changes} onClose={() => setExportOpen(false)} />

      {presetPreview && (
        <div className="modal-backdrop">
          <section className="export-dialog">
            <h2>{presetPreview.name}</h2>
            <p className="muted">预设应用前必须确认。下面是将要修改的字段：</p>
            <div className="issue-list">
              {presetPreview.changes.slice(0, 80).map((change) => (
                <p key={`${change.sectionName}-${change.key}`}>
                  <code>
                    {change.sectionName}.{change.key}
                  </code>{' '}
                  → {change.nextValue} · {change.note}
                </p>
              ))}
              {presetPreview.changes.length > 80 && <p className="muted">另有 {presetPreview.changes.length - 80} 项建议未显示。</p>}
            </div>
            <div className="dialog-actions">
              <button type="button" onClick={() => setPresetPreview(undefined)}>
                取消
              </button>
              <button
                className="primary-button"
                type="button"
                onClick={() => {
                  applyPresetChanges(presetPreview.changes)
                  setPresetPreview(undefined)
                }}
              >
                确认应用
              </button>
            </div>
          </section>
        </div>
      )}
    </main>
  )
}

function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`
}

export default App
