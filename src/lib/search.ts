import { sectionTypeLabels } from './classifySections'
import { getReferenceDisplayLabel, getSectionSearchText } from './displayName'
import { getFieldSearchText } from './fieldDocs'
import { isReferenceKey, splitTargets } from './references'
import type { IniDocument, SearchResult } from './types'

export function searchDocument(document: IniDocument, query: string, limit = 200): SearchResult[] {
  const q = query.trim().toLowerCase()
  if (!q) return []

  const results: SearchResult[] = []
  const seen = new Set<string>()
  const exactSection = document.sections.find((section) => section.name.toLowerCase() === q)
  if (exactSection) {
    const id = `section-${exactSection.name}`
    seen.add(id)
    results.push({
      id,
      type: exactSection.type,
      sectionName: exactSection.name,
      lineNumber: exactSection.startLine,
      reason: 'Section ID 精确命中',
    })
  }

  for (const section of document.sections) {
    if (results.length >= limit) break
    const typeLabel = sectionTypeLabels[section.type].toLowerCase()
    const sectionHaystack = `${typeLabel} ${getSectionSearchText(section)}`
    if (sectionHaystack.includes(q)) {
      const id = `section-${section.name}`
      if (!seen.has(id)) {
        seen.add(id)
        results.push({
          id,
          type: section.type,
          sectionName: section.name,
          lineNumber: section.startLine,
          reason: 'Section / 显示名 / 类型命中',
        })
      }
    }

    for (const entry of section.entries) {
      if (results.length >= limit) break
      const referenceSearchText = isReferenceKey(entry.key)
        ? splitTargets(entry.currentValue)
            .map((target) => getReferenceDisplayLabel(document, target))
            .join(' ')
        : ''
      const fieldSearchText = getFieldSearchText(entry.key)
      const haystack = `${entry.key} ${entry.currentValue} ${entry.raw} ${fieldSearchText} ${referenceSearchText}`.toLowerCase()
      if (haystack.includes(q)) {
        if (!seen.has(entry.id)) {
          seen.add(entry.id)
          results.push({
            id: entry.id,
            type: section.type,
            sectionName: section.name,
            key: entry.key,
            value: entry.currentValue,
            lineNumber: entry.lineNumber,
            reason: fieldSearchText.includes(q) ? '字段中文说明命中' : '字段 / 值 / 引用 / 原文命中',
          })
        }
      }
    }

    for (const comment of section.comments) {
      if (results.length >= limit) break
      if (comment.raw.toLowerCase().includes(q)) {
        if (!seen.has(comment.id)) {
          seen.add(comment.id)
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
  }

  return results
}
