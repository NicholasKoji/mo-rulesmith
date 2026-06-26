import { getEntry } from './iniParser'
import type { IniDocument, IniEntry, ReferenceLink, SectionType } from './types'

const unitWeaponKeys = new Set([
  'primary',
  'secondary',
  'eliteprimary',
  'elitesecondary',
  'weapon',
  'deathweapon',
  'deployfireweapon',
  'opentransportweapon',
  'airburstweapon',
])

const superWeaponKeys = new Set([
  'superweapon',
  'superweapon2',
])

const projectileWeaponKeys = new Set(['splits', 'cluster'])

function normalizeKey(key: string) {
  return key.trim().toLowerCase()
}

function inferTargetType(key: string): SectionType {
  const normalized = normalizeKey(key)
  if (unitWeaponKeys.has(normalized) || projectileWeaponKeys.has(normalized)) return 'Weapon'
  if (superWeaponKeys.has(normalized)) return 'SuperWeapon'
  if (normalized === 'projectile') return 'Projectile'
  if (normalized === 'warhead' || normalized === 'sw.warhead') return 'Warhead'
  if (normalized === 'sw.animation') return 'Animation'
  return 'Unknown'
}

export function isReferenceKey(key: string) {
  const normalized = normalizeKey(key)
  return (
    unitWeaponKeys.has(normalized) ||
    projectileWeaponKeys.has(normalized) ||
    superWeaponKeys.has(normalized) ||
    normalized === 'projectile' ||
    normalized === 'warhead' ||
    normalized.startsWith('sw.')
  )
}

export function getReferenceLinks(document: IniDocument, sectionName: string): ReferenceLink[] {
  const section = document.sectionsByName.get(sectionName)
  if (!section) return []

  return section.entries
    .filter((entry) => isReferenceKey(entry.key) && entry.currentValue?.trim())
    .flatMap((entry) => {
      const targets = splitTargets(entry.currentValue)
      return targets.map((target) => ({
        sourceSection: sectionName,
        sourceKey: entry.key,
        targetSection: target,
        targetType: inferTargetType(entry.key),
        exists: document.sectionsByName.has(target),
      }))
    })
}

export function buildReferenceTree(document: IniDocument, sectionName: string) {
  const firstHop = getReferenceLinks(document, sectionName)
  return firstHop.map((link) => {
    if (!link.exists) return { ...link, children: [] as ReferenceLink[] }
    return {
      ...link,
      children: getReferenceLinks(document, link.targetSection).filter((child) =>
        ['Projectile', 'Warhead', 'Weapon'].includes(child.targetType),
      ),
    }
  })
}

export function getArmorVerses(entry: IniEntry) {
  return splitTargets(entry.currentValue).map((value) => Number.parseFloat(value.replace('%', '')))
}

export function getWarheadArmorRows(document: IniDocument, sectionName: string) {
  const section = document.sectionsByName.get(sectionName)
  const verses = getEntry(document, sectionName, 'Verses')
  if (!section || !verses) return []

  const armorSection = document.sectionsByName.get('ArmorTypes')
  const armorNames = armorSection?.entries.map((entry) => entry.key) ?? ['none', 'flak', 'plate', 'light', 'medium', 'heavy']
  const values = splitTargets(verses.currentValue)

  return values.map((value, index) => ({
    armor: armorNames[index] ?? `armor-${index + 1}`,
    value,
  }))
}

export function splitTargets(value?: string) {
  if (!value) return []
  return value
    .split(',')
    .map((part) => part.trim())
    .filter(Boolean)
}
