import {
  getDisplaySearchText,
  resolveStringLabel,
  type DisplayNameResolvedBy,
} from '../data/moLocalization.zhCN'
import type { IniDocument, IniSection, SectionType } from './types'

export interface SectionDisplayInfo {
  sectionId: string
  type: SectionType
  displayName: string
  uiName?: string
  rawName?: string
  resolvedBy: DisplayNameResolvedBy
}

export interface MissingLocalizationItem {
  sectionId: string
  type: SectionType
  uiName: string
  rawName?: string
  suggestedDisplayName: string
}

function getSectionEntryValue(section: IniSection, key: string) {
  const lowerKey = key.toLowerCase()
  for (let index = section.entries.length - 1; index >= 0; index -= 1) {
    const entry = section.entries[index]
    if (!entry.deleted && entry.key.toLowerCase() === lowerKey) {
      return entry.currentValue
    }
  }
  return undefined
}

export function getSectionDisplayInfo(section: IniSection): SectionDisplayInfo {
  const uiName = getSectionEntryValue(section, 'UIName')
  const rawName = getSectionEntryValue(section, 'Name')
  const localized = resolveStringLabel(uiName)

  if (localized) {
    return {
      sectionId: section.name,
      type: section.type,
      displayName: localized,
      uiName,
      rawName,
      resolvedBy: 'uiName',
    }
  }

  if (rawName) {
    return {
      sectionId: section.name,
      type: section.type,
      displayName: rawName,
      uiName,
      rawName,
      resolvedBy: 'name',
    }
  }

  return {
    sectionId: section.name,
    type: section.type,
    displayName: section.name,
    uiName,
    rawName,
    resolvedBy: 'section',
  }
}

export function getDisplaySubtitle(info: SectionDisplayInfo) {
  const parts = [info.sectionId]
  if (info.rawName && info.rawName !== info.displayName) {
    parts.push(info.rawName)
  }
  return parts.join(' · ')
}

export function hasLocalizedDisplayName(info: SectionDisplayInfo) {
  return info.resolvedBy === 'uiName' && info.displayName !== info.sectionId
}

export function getReferenceDisplayLabel(document: IniDocument, targetSectionId: string) {
  const section = document.sectionsByName.get(targetSectionId)
  if (!section) return targetSectionId

  const info = getSectionDisplayInfo(section)
  if (!hasLocalizedDisplayName(info)) return targetSectionId
  return `${targetSectionId} / ${info.displayName}`
}

export function getSectionSearchText(section: IniSection) {
  const info = getSectionDisplayInfo(section)
  return [
    section.name,
    section.type,
    info.displayName,
    info.uiName,
    info.rawName,
    getDisplaySearchText(section.name),
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase()
}

export function getMissingLocalizationItems(document: IniDocument): MissingLocalizationItem[] {
  return document.sections.flatMap((section) => {
    const uiName = getSectionEntryValue(section, 'UIName')
    if (!uiName) return []
    if (resolveStringLabel(uiName)) return []

    const rawName = getSectionEntryValue(section, 'Name')
    return [
      {
        sectionId: section.name,
        type: section.type,
        uiName,
        rawName,
        suggestedDisplayName: rawName || section.name,
      },
    ]
  })
}

export function formatMissingLocalizationList(items: MissingLocalizationItem[]) {
  return [
    'Section ID\tType\tUIName\tName\tSuggested Display Name',
    ...items.map((item) =>
      [item.sectionId, item.type, item.uiName, item.rawName ?? '', item.suggestedDisplayName].join('\t'),
    ),
  ].join('\n')
}
