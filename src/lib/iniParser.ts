import { classifyDocument } from './classifySections'
import type { IniDocument, IniEntry, IniLine, IniSection, IniStats } from './types'

const sectionPattern = /^\s*\[([^\]]+)\]\s*(?:[;#].*)?$/

function splitLines(text: string) {
  const lineEnding = text.includes('\r\n') ? '\r\n' : text.includes('\r') ? '\r' : '\n'
  const hasTrailingNewline = /\r\n$|\n$|\r$/.test(text)
  const lines = text.split(/\r\n|\n|\r/)
  if (hasTrailingNewline) {
    lines.pop()
  }
  return { lineEnding, hasTrailingNewline, rawLines: lines }
}

function splitInlineComment(valueText: string) {
  for (let index = 0; index < valueText.length; index += 1) {
    const char = valueText[index]
    if ((char === ';' || char === '#') && (index === 0 || /\s/.test(valueText[index - 1]))) {
      return {
        value: valueText.slice(0, index).trimEnd(),
        inlineComment: valueText.slice(index),
      }
    }
  }
  return { value: valueText.trimEnd(), inlineComment: undefined }
}

function parseLine(raw: string, lineNumber: number, currentSection?: string): IniLine {
  const base = {
    id: `line-${lineNumber}`,
    lineNumber,
    raw,
    sectionName: currentSection,
  }

  if (/^\s*$/.test(raw)) {
    return { ...base, type: 'blank' }
  }

  if (/^\s*[;#]/.test(raw)) {
    return { ...base, type: 'comment' }
  }

  const sectionMatch = raw.match(sectionPattern)
  if (sectionMatch) {
    return {
      ...base,
      type: 'section',
      sectionName: sectionMatch[1].trim(),
    }
  }

  const equalsIndex = raw.indexOf('=')
  if (equalsIndex > -1) {
    const keyPart = raw.slice(0, equalsIndex)
    const key = keyPart.trim()
    const leadingWhitespace = keyPart.match(/^\s*/)?.[0] ?? ''
    const { value, inlineComment } = splitInlineComment(raw.slice(equalsIndex + 1))

    if (key.length > 0) {
      return {
        ...base,
        type: 'keyValue',
        key,
        value,
        originalValue: value,
        currentValue: value,
        inlineComment,
        leadingWhitespace,
        separator: '=',
      }
    }
  }

  return { ...base, type: 'unknown' }
}

export function parseIni(text: string, fileName = 'rulesmo.ini', fileSize = text.length): IniDocument {
  const { lineEnding, hasTrailingNewline, rawLines } = splitLines(text)
  const lines: IniLine[] = []
  const duplicateCounts = new Map<string, number>()
  let currentSection: string | undefined

  rawLines.forEach((raw, index) => {
    const lineNumber = index + 1
    const parsed = parseLine(raw, lineNumber, currentSection)

    if (parsed.type === 'section') {
      currentSection = parsed.sectionName
      parsed.sectionName = currentSection
    } else if (parsed.type === 'keyValue' && currentSection) {
      parsed.sectionName = currentSection
      const duplicateKey = `${currentSection.toLowerCase()}\u0000${parsed.key?.toLowerCase()}`
      const count = (duplicateCounts.get(duplicateKey) ?? 0) + 1
      duplicateCounts.set(duplicateKey, count)
      parsed.duplicateIndex = count
      parsed.isDuplicate = count > 1
    }

    lines.push(parsed)
  })

  const document = buildDocumentFromLines(lines, {
    fileName,
    fileSize,
    lineEnding,
    hasTrailingNewline,
  })

  duplicateCounts.forEach((count, duplicateKey) => {
    if (count < 2) return
    const [, keyLower] = duplicateKey.split('\u0000')
    for (const section of document.sections) {
      for (const entry of section.entries) {
        if (entry.key.toLowerCase() === keyLower) {
          const sectionKey = `${section.name.toLowerCase()}\u0000${keyLower}`
          if (sectionKey === duplicateKey) {
            entry.isDuplicate = true
          }
        }
      }
    }
  })

  classifyDocument(document)
  document.stats.looksLikeRulesMo = detectRulesMo(document)

  return document
}

export function buildDocumentFromLines(
  lines: IniLine[],
  meta: Pick<IniDocument, 'fileName' | 'fileSize' | 'lineEnding' | 'hasTrailingNewline'>,
): IniDocument {
  const sections: IniSection[] = []
  const sectionsByName = new Map<string, IniSection>()
  let current: IniSection | null = null

  lines.forEach((line, index) => {
    line.lineNumber = index + 1

    if (line.type === 'section' && line.sectionName) {
      if (current) {
        current.endLine = line.lineNumber - 1
      }
      current = {
        name: line.sectionName,
        startLine: line.lineNumber,
        endLine: line.lineNumber,
        type: 'Unknown',
        entries: [],
        comments: [],
      }
      sections.push(current)
      sectionsByName.set(current.name, current)
      return
    }

    if (!current) return
    current.endLine = line.lineNumber
    line.sectionName = current.name

    if (line.type === 'keyValue' && line.key && line.value !== undefined) {
      current.entries.push(line as IniEntry)
    }
    if (line.type === 'comment') {
      current.comments.push(line)
    }
  })

  const stats: IniStats = {
    fileName: meta.fileName,
    fileSize: meta.fileSize,
    totalLines: lines.length,
    sectionCount: sections.length,
    keyValueCount: lines.filter((line) => line.type === 'keyValue').length,
    commentCount: lines.filter((line) => line.type === 'comment').length,
    blankCount: lines.filter((line) => line.type === 'blank').length,
    unknownCount: lines.filter((line) => line.type === 'unknown').length,
    looksLikeRulesMo: false,
  }

  return {
    ...meta,
    lines,
    sections,
    sectionsByName,
    stats,
  }
}

function detectRulesMo(document: IniDocument) {
  const required = ['General', 'InfantryTypes', 'VehicleTypes', 'WeaponTypes', 'Warheads']
  const hasCoreSections = required.every((name) => document.sectionsByName.has(name))
  const general = document.sectionsByName.get('General')
  const name = general?.entries.find((entry) => entry.key === 'Name')?.currentValue ?? ''
  return hasCoreSections && /Mental Omega|Official Rules/i.test(name)
}

export function getEntry(document: IniDocument, sectionName: string, key: string) {
  return document.sectionsByName
    .get(sectionName)
    ?.entries.find((entry) => entry.key.toLowerCase() === key.toLowerCase() && !entry.deleted)
}

export function getEntries(document: IniDocument, sectionName: string, keys: string[]) {
  const section = document.sectionsByName.get(sectionName)
  if (!section) return []
  const keySet = new Set(keys.map((key) => key.toLowerCase()))
  return section.entries.filter((entry) => keySet.has(entry.key.toLowerCase()) && !entry.deleted)
}
