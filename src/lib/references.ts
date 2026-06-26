import { getEntry } from './iniParser'
import type { IniDocument, IniEntry, ReferenceLink, SectionType } from './types'

const unitWeaponKeys = new Set([
  'Primary',
  'Secondary',
  'ElitePrimary',
  'EliteSecondary',
  'DeathWeapon',
  'DeployFireWeapon',
  'OpenTransportWeapon',
])

const projectileWeaponKeys = new Set(['AirburstWeapon', 'Splits', 'Cluster'])

function inferTargetType(key: string): SectionType {
  if (unitWeaponKeys.has(key) || projectileWeaponKeys.has(key)) return 'Weapon'
  if (key === 'Projectile') return 'Projectile'
  if (key === 'Warhead' || key === 'SW.Warhead') return 'Warhead'
  if (key === 'SW.Animation') return 'Animation'
  return 'Unknown'
}

export function isReferenceKey(key: string) {
  return (
    unitWeaponKeys.has(key) ||
    projectileWeaponKeys.has(key) ||
    key === 'Projectile' ||
    key === 'Warhead' ||
    key.startsWith('SW.')
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
