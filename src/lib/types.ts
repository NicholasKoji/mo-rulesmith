export type IniLineType = 'blank' | 'comment' | 'section' | 'keyValue' | 'unknown'

export type FieldRisk = 'safe' | 'caution' | 'danger' | 'unknown'

export type SectionType =
  | 'General'
  | 'Infantry'
  | 'Vehicle'
  | 'Aircraft'
  | 'Building'
  | 'Weapon'
  | 'Warhead'
  | 'Projectile'
  | 'SuperWeapon'
  | 'ArmorType'
  | 'Animation'
  | 'Particle'
  | 'ParticleSystem'
  | 'Country'
  | 'Side'
  | 'AI'
  | 'Terrain'
  | 'Overlay'
  | 'Unknown'

export interface IniLine {
  id: string
  lineNumber: number
  raw: string
  type: IniLineType
  sectionName?: string
  key?: string
  value?: string
  originalValue?: string
  currentValue?: string
  inlineComment?: string
  leadingWhitespace?: string
  separator?: '='
  duplicateIndex?: number
  isDuplicate?: boolean
  modified?: boolean
  deleted?: boolean
  added?: boolean
}

export interface IniEntry extends IniLine {
  type: 'keyValue'
  sectionName: string
  key: string
  value: string
  originalValue: string
  currentValue: string
}

export interface IniSection {
  name: string
  startLine: number
  endLine: number
  type: SectionType
  entries: IniEntry[]
  comments: IniLine[]
  registeredIn?: string
}

export interface IniStats {
  fileName: string
  fileSize: number
  totalLines: number
  sectionCount: number
  keyValueCount: number
  commentCount: number
  blankCount: number
  unknownCount: number
  looksLikeRulesMo: boolean
}

export interface IniDocument {
  fileName: string
  fileSize: number
  lineEnding: string
  hasTrailingNewline: boolean
  lines: IniLine[]
  sections: IniSection[]
  sectionsByName: Map<string, IniSection>
  stats: IniStats
}

export interface FieldDoc {
  key: string
  zhName: string
  category: string
  description: string
  valueDirection: string
  observedRange?: string
  suggestedChange?: string
  risk: FieldRisk
  examples?: string[]
}

export interface IniChange {
  id: string
  timestamp: number
  sectionName: string
  key: string
  lineNumber: number
  originalValue: string
  previousValue: string
  nextValue: string
  risk: FieldRisk
}

export interface ReferenceLink {
  sourceSection: string
  sourceKey: string
  targetSection: string
  targetType: SectionType
  exists: boolean
}

export interface SearchResult {
  id: string
  type: SectionType
  sectionName: string
  key?: string
  value?: string
  lineNumber: number
  reason: string
}

export interface ValidationIssue {
  id: string
  severity: 'info' | 'warning' | 'danger'
  sectionName?: string
  key?: string
  lineNumber?: number
  message: string
}

export interface PresetChange {
  sectionName: string
  key: string
  nextValue: string
  note: string
}

export interface RulesmithPreset {
  id: string
  name: string
  description: string
  risk: FieldRisk
  buildChanges: (document: IniDocument) => PresetChange[]
}
