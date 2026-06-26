import { create } from 'zustand'
import { classifyDocument } from '../lib/classifySections'
import { getSectionDisplayInfo } from '../lib/displayName'
import { getFieldDoc, getFieldRisk } from '../lib/fieldDocs'
import { buildDocumentFromLines, getEntry, parseIni } from '../lib/iniParser'
import { searchDocument } from '../lib/search'
import type { IniChange, IniDocument, IniEntry, IniLine, PresetChange, SearchResult, SectionType } from '../lib/types'

export type ActiveView = SectionType | 'All' | 'Changes' | 'MissingLocalization'

interface IniState {
  document?: IniDocument
  selectedSection?: string
  activeView: ActiveView
  query: string
  searchResults: SearchResult[]
  changes: IniChange[]
  error?: string
  parseText: (text: string, fileName: string, fileSize: number) => void
  setActiveView: (view: ActiveView) => void
  selectSection: (sectionName: string) => void
  setQuery: (query: string) => void
  updateEntry: (entryId: string, nextValue: string) => void
  revertEntry: (entryId: string) => void
  deleteEntry: (entryId: string) => void
  addEntry: (sectionName: string, key: string, value: string) => void
  undoChange: (changeId: string) => void
  clearChanges: () => void
  applyPresetChanges: (changes: PresetChange[]) => void
  exportChangesJson: () => string
  exportChangesMarkdown: () => string
}

function newId(prefix: string) {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return `${prefix}-${crypto.randomUUID()}`
  }
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`
}

function refreshDocument(document: IniDocument) {
  const refreshed = buildDocumentFromLines(document.lines, {
    fileName: document.fileName,
    fileSize: document.fileSize,
    lineEnding: document.lineEnding,
    hasTrailingNewline: document.hasTrailingNewline,
  })
  refreshed.stats.looksLikeRulesMo = document.stats.looksLikeRulesMo
  recomputeDuplicates(refreshed)
  classifyDocument(refreshed)
  return refreshed
}

function recomputeDuplicates(document: IniDocument) {
  for (const section of document.sections) {
    const counts = new Map<string, number>()
    section.entries.forEach((entry) => {
      const key = entry.key.toLowerCase()
      const next = (counts.get(key) ?? 0) + 1
      counts.set(key, next)
      entry.duplicateIndex = next
      entry.isDuplicate = false
    })
    section.entries.forEach((entry) => {
      entry.isDuplicate = (counts.get(entry.key.toLowerCase()) ?? 0) > 1
    })
  }
}

function findEntry(document: IniDocument, entryId: string) {
  for (const section of document.sections) {
    const entry = section.entries.find((candidate) => candidate.id === entryId)
    if (entry) return entry
  }
  return undefined
}

function recordChange(entry: IniEntry, previousValue: string, nextValue: string): IniChange {
  return {
    id: newId('change'),
    timestamp: Date.now(),
    sectionName: entry.sectionName,
    key: entry.key,
    lineNumber: entry.lineNumber,
    originalValue: entry.originalValue,
    previousValue,
    nextValue,
    risk: getFieldRisk(entry.key),
  }
}

function cloneDocument(document: IniDocument) {
  return { ...document, lines: [...document.lines], sections: [...document.sections] }
}

function persistChanges(changes: IniChange[]) {
  localStorage.setItem('mo-rulesmith:last-changes', JSON.stringify(changes))
}

export const useIniStore = create<IniState>((set, get) => ({
  activeView: 'All',
  query: '',
  searchResults: [],
  changes: [],

  parseText: (text, fileName, fileSize) => {
    try {
      if (!text.trim()) {
        set({ error: '解析失败：文件为空。' })
        return
      }
      const document = parseIni(text, fileName, fileSize)
      if (document.sections.length === 0) {
        set({ error: '解析失败：没有检测到任何 [Section] 段落。请确认上传的是 rulesmo.ini 或类似 INI 文件。' })
        return
      }
      const selectedSection = document.sectionsByName.has('CNTR') ? 'CNTR' : document.sections[0]?.name
      set({
        document,
        selectedSection,
        activeView: 'All',
        query: '',
        searchResults: [],
        changes: [],
        error: undefined,
      })
      persistChanges([])
    } catch (error) {
      set({ error: `解析失败：${error instanceof Error ? error.message : '未知错误'}` })
    }
  },

  setActiveView: (activeView) => set({ activeView }),

  selectSection: (selectedSection) => {
    const section = get().document?.sectionsByName.get(selectedSection)
    set({ selectedSection, activeView: section?.type ?? get().activeView })
  },

  setQuery: (query) => {
    const document = get().document
    set({
      query,
      searchResults: document ? searchDocument(document, query) : [],
    })
  },

  updateEntry: (entryId, nextValue) => {
    const state = get()
    if (!state.document) return
    const document = cloneDocument(state.document)
    const entry = findEntry(document, entryId)
    if (!entry) return

    const previousValue = entry.currentValue
    entry.currentValue = nextValue
    entry.modified = entry.currentValue !== entry.originalValue || entry.deleted
    entry.deleted = false
    const changes = [...state.changes, recordChange(entry, previousValue, nextValue)]
    persistChanges(changes)
    set({ document, changes })
  },

  revertEntry: (entryId) => {
    const state = get()
    if (!state.document) return
    let document = cloneDocument(state.document)
    const entry = findEntry(document, entryId)
    if (!entry) return

    if (entry.added) {
      document.lines = document.lines.filter((line) => line.id !== entry.id)
      document = refreshDocument(document)
    } else {
      const previousValue = entry.currentValue
      entry.currentValue = entry.originalValue
      entry.modified = false
      entry.deleted = false
      const changes = [...state.changes, recordChange(entry, previousValue, entry.originalValue)]
      persistChanges(changes)
      set({ document, changes })
      return
    }

    set({ document })
  },

  deleteEntry: (entryId) => {
    const state = get()
    if (!state.document) return
    const document = cloneDocument(state.document)
    const entry = findEntry(document, entryId)
    if (!entry) return
    const previousValue = entry.currentValue
    entry.deleted = true
    entry.modified = true
    const changes = [...state.changes, recordChange(entry, previousValue, '[deleted]')]
    persistChanges(changes)
    set({ document, changes })
  },

  addEntry: (sectionName, key, value) => {
    const state = get()
    if (!state.document) return
    let document = cloneDocument(state.document)
    const section = document.sectionsByName.get(sectionName)
    if (!section || !key.trim()) return

    const newLine: IniLine = {
      id: newId('line-added'),
      lineNumber: section.endLine + 1,
      raw: `${key.trim()}=${value}`,
      type: 'keyValue',
      sectionName,
      key: key.trim(),
      value,
      originalValue: '',
      currentValue: value,
      leadingWhitespace: '',
      separator: '=',
      modified: true,
      added: true,
    }

    document.lines.splice(section.endLine, 0, newLine)
    document = refreshDocument(document)
    const entry = getEntry(document, sectionName, key.trim())
    const changes = entry ? [...state.changes, recordChange(entry, '', value)] : state.changes
    persistChanges(changes)
    set({ document, changes })
  },

  undoChange: (changeId) => {
    const state = get()
    const change = state.changes.find((candidate) => candidate.id === changeId)
    const document = state.document
    if (!change || !document) return
    const entry = document.sectionsByName
      .get(change.sectionName)
      ?.entries.find((candidate) => candidate.key === change.key && candidate.lineNumber === change.lineNumber)
    if (!entry) return
    get().updateEntry(entry.id, change.previousValue)
    set({ changes: get().changes.filter((candidate) => candidate.id !== changeId) })
  },

  clearChanges: () => {
    const state = get()
    if (!state.document) return
    const document = cloneDocument(state.document)
    document.lines.forEach((line) => {
      if (line.type !== 'keyValue') return
      line.currentValue = line.originalValue
      line.modified = false
      line.deleted = false
    })
    const filtered = document.lines.filter((line) => !line.added)
    document.lines = filtered
    persistChanges([])
    set({ document: refreshDocument(document), changes: [] })
  },

  applyPresetChanges: (presetChanges) => {
    for (const presetChange of presetChanges) {
      const entry = getEntry(get().document!, presetChange.sectionName, presetChange.key)
      if (entry) get().updateEntry(entry.id, presetChange.nextValue)
    }
  },

  exportChangesJson: () => JSON.stringify(get().changes, null, 2),

  exportChangesMarkdown: () =>
    [
      '# MO Rulesmith 修改记录',
      '',
      ...get().changes.map((change) => {
        const section = get().document?.sectionsByName.get(change.sectionName)
        const sectionLabel = section ? getSectionDisplayInfo(section).displayName : change.sectionName
        const fieldDoc = getFieldDoc(change.key)
        return `- ${new Date(change.timestamp).toLocaleString()} ${sectionLabel} / ${change.sectionName} ${fieldDoc.zhName} ${change.key} (${change.lineNumber}): ${change.previousValue} -> ${change.nextValue} [${change.risk}]`
      }),
      '',
    ].join('\n'),
}))
