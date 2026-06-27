import { CheckCircle2, ChevronDown, Download, FileSearch, PanelLeftClose, PanelLeftOpen, Search, SlidersHorizontal, Undo2 } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { ChangeLogPanel } from './components/ChangeLogPanel'
import { ExportDialog } from './components/ExportDialog'
import { FileUploadPanel } from './components/FileUploadPanel'
import { MissingLocalizationPanel } from './components/MissingLocalizationPanel'
import { SectionDetail } from './components/SectionDetail'
import { SectionTable } from './components/SectionTable'
import { SidebarNav } from './components/SidebarNav'
import { getDisplaySubtitle, getSectionDisplayInfo } from './lib/displayName'
import { demoIni } from './lib/demoIni'
import { getFieldLabel } from './lib/fieldDocs'
import { downloadText } from './lib/iniExporter'
import { getEntry } from './lib/iniParser'
import { presets } from './lib/presets'
import type { IniDocument, IniEntry, PresetChange, SearchResult } from './lib/types'
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
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [fileInfoOpen, setFileInfoOpen] = useState(false)
  const [presetOpen, setPresetOpen] = useState(false)

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

  useEffect(() => {
    if (document || new URLSearchParams(window.location.search).get('demo') !== '1') return
    parseText(demoIni, 'rulesmo.demo.ini', new Blob([demoIni]).size)
  }, [document, parseText])

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
    <main className={`workspace ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
      <SidebarNav
        document={document}
        activeView={activeView}
        collapsed={sidebarCollapsed}
        onToggleCollapsed={() => setSidebarCollapsed((value) => !value)}
        onChange={setActiveView}
      />

      <section className="work-area">
        <header className="topbar">
          <div className="topbar-title">
            <p className="eyebrow">MO RULESMITH</p>
            <h1>规则编辑台</h1>
          </div>

          <div className="topbar-center">
            <div className="search-box">
              <Search size={17} />
              <input
                placeholder="搜索 CNTR、百夫长、血量、Primary..."
                value={draftQuery}
                onChange={(event) => setDraftQuery(event.target.value)}
              />
            </div>
          </div>

          <div className="top-actions">
            <div className="popover-anchor">
              <button
                type="button"
                className="file-status-button"
                aria-expanded={fileInfoOpen}
                onClick={() => setFileInfoOpen((open) => !open)}
              >
                <CheckCircle2 size={16} />
                <span>{stats?.fileName ?? 'rulesmo.ini'} · 已解析</span>
                <ChevronDown size={14} />
              </button>
              {fileInfoOpen && (
                <div className="top-popover file-info-popover">
                  <dl>
                    <dt>文件名</dt>
                    <dd>{stats?.fileName}</dd>
                    <dt>大小</dt>
                    <dd>{formatBytes(stats?.fileSize ?? 0)}</dd>
                    <dt>行数</dt>
                    <dd>{stats?.totalLines.toLocaleString()}</dd>
                    <dt>Section</dt>
                    <dd>{stats?.sectionCount.toLocaleString()}</dd>
                    <dt>Key-Value</dt>
                    <dd>{stats?.keyValueCount.toLocaleString()}</dd>
                    <dt>识别</dt>
                    <dd>{stats?.looksLikeRulesMo ? 'rulesmo.ini' : 'INI 文件'}</dd>
                  </dl>
                </div>
              )}
            </div>

            <div className="popover-anchor">
              <button type="button" aria-expanded={presetOpen} onClick={() => setPresetOpen((open) => !open)}>
                <SlidersHorizontal size={16} />
                预设修改
              </button>
              {presetOpen && (
                <div className="top-popover preset-popover">
                  {presets.map((preset) => (
                    <button
                      key={preset.id}
                      type="button"
                      className="preset-card"
                      onClick={() => {
                        setPresetPreview({ name: preset.name, changes: preset.buildChanges(document) })
                        setPresetOpen(false)
                      }}
                    >
                      <strong>{preset.name}</strong>
                      <span>{preset.description}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button type="button" title="折叠侧栏" className="icon-button top-icon" onClick={() => setSidebarCollapsed((value) => !value)}>
              {sidebarCollapsed ? <PanelLeftOpen size={16} /> : <PanelLeftClose size={16} />}
            </button>
            <button type="button" title="撤销全部修改" onClick={clearChanges}>
              <Undo2 size={16} />
              全部撤销
            </button>
            <button type="button" className="primary-button" onClick={() => setExportOpen(true)}>
              <Download size={17} />
              导出
            </button>
          </div>
        </header>

        {query && (
          <section className="search-results">
            <div className="mini-title">
              <FileSearch size={16} />
              搜索结果 {searchResults.length}
            </div>
            <div className="result-row-wrap">
              {searchResults.slice(0, 40).map((result) => (
                <SearchResultButton key={result.id} document={document} result={result} onSelect={selectSection} />
              ))}
            </div>
          </section>
        )}

        {activeView === 'Changes' ? (
          <ChangeLogPanel
            document={document}
            changes={changes}
            onUndo={undoChange}
            onExportJson={() => exportSidecar('mo-rulesmith.changes.json', exportChangesJson())}
            onExportMarkdown={() => exportSidecar('mo-rulesmith.changes.md', exportChangesMarkdown())}
          />
        ) : activeView === 'MissingLocalization' ? (
          <MissingLocalizationPanel document={document} onJump={selectSection} />
        ) : (
          <section className="content-grid">
            <SectionTable document={document} activeView={activeView} selectedSection={selectedSection} onSelect={selectSection} />
            <SectionDetail
              document={document}
              sectionName={selectedSection}
              focusedEntry={selectedEntry}
              changes={changes}
              onFocusEntry={setFocusedEntry}
              onUpdateEntry={updateEntry}
              onRevertEntry={revertEntry}
              onDeleteEntry={deleteEntry}
              onAddEntry={addEntry}
              onUndoChange={undoChange}
              onJump={selectSection}
            />
          </section>
        )}

        <footer className="app-footer">
          本地解析与导出。修改 rulesmo.ini 前请保留原文件备份，错误配置可能导致游戏异常或平衡变化。
        </footer>
      </section>

      <ExportDialog open={exportOpen} document={document} changes={changes} onClose={() => setExportOpen(false)} />

      {presetPreview && (
        <div className="modal-backdrop">
          <section className="export-dialog">
            <h2>{presetPreview.name}</h2>
            <p className="muted">预设应用前需要确认。下面是即将修改的字段：</p>
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

function SearchResultButton({
  document,
  result,
  onSelect,
}: {
  document: IniDocument
  result: SearchResult
  onSelect: (sectionName: string) => void
}) {
  const section = document.sectionsByName.get(result.sectionName)
  const display = section ? getSectionDisplayInfo(section) : undefined
  const subtitle = display ? getDisplaySubtitle(display) : result.sectionName

  return (
    <button type="button" onClick={() => onSelect(result.sectionName)} title={result.reason}>
      <span>{result.type}</span>
      <strong>{display?.displayName ?? result.sectionName}</strong>
      <small>{subtitle}</small>
      {result.key && (
        <code>
          {getFieldLabel(result.key)} {result.key}={result.value}
        </code>
      )}
    </button>
  )
}

function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`
}

export default App
