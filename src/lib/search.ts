import { getAllFieldDocs } from './fieldDocs'
import { sectionTypeLabels } from './classifySections'
import { getSectionSearchText } from './displayName'
import type { IniDocument, SearchResult } from './types'

const docs = getAllFieldDocs()

export function searchDocument(document: IniDocument, query: string, limit = 200): SearchResult[] {
  const q = query.trim().toLowerCase()
  if (!q) return []

  const results: SearchResult[] = []
  const fieldDocHits = docs.filter(
    (doc) =>
      doc.key.toLowerCase().includes(q) ||
      doc.zhName.toLowerCase().includes(q) ||
      doc.description.toLowerCase().includes(q),
  )
  const docKeys = new Set(fieldDocHits.map((doc) => doc.key.toLowerCase()))

  for (const section of document.sections) {
    if (results.length >= limit) break
    const typeLabel = sectionTypeLabels[section.type].toLowerCase()
    const sectionHaystack = `${typeLabel} ${getSectionSearchText(section)}`
    if (sectionHaystack.includes(q)) {
      results.push({
        id: `section-${section.name}`,
        type: section.type,
        sectionName: section.name,
        lineNumber: section.startLine,
        reason: 'Section / 显示名 / 类型命中',
      })
    }

    for (const entry of section.entries) {
      if (results.length >= limit) break
      const haystack = `${entry.key} ${entry.currentValue} ${entry.raw}`.toLowerCase()
      if (haystack.includes(q) || docKeys.has(entry.key.toLowerCase())) {
        results.push({
          id: entry.id,
          type: section.type,
          sectionName: section.name,
          key: entry.key,
          value: entry.currentValue,
          lineNumber: entry.lineNumber,
          reason: docKeys.has(entry.key.toLowerCase()) ? '字段中文说明命中' : '字段 / 值 / 原文命中',
        })
      }
    }

    for (const comment of section.comments) {
      if (results.length >= limit) break
      if (comment.raw.toLowerCase().includes(q)) {
        results.push({
          id: comment.id,
          type: section.type,
          sectionName: section.name,
          lineNumber: comment.lineNumber,
          reason: '注释命中',
        })
      }
    }
  }

  return results
}
