import type { IniDocument, IniSection, SectionType } from './types'

const registryMap: Record<string, SectionType> = {
  InfantryTypes: 'Infantry',
  VehicleTypes: 'Vehicle',
  AircraftTypes: 'Aircraft',
  BuildingTypes: 'Building',
  WeaponTypes: 'Weapon',
  Warheads: 'Warhead',
  Projectiles: 'Projectile',
  SuperWeaponTypes: 'SuperWeapon',
  Animations: 'Animation',
  Particles: 'Particle',
  ParticleSystems: 'ParticleSystem',
  Countries: 'Country',
  Sides: 'Side',
  TerrainTypes: 'Terrain',
  OverlayTypes: 'Overlay',
}

const generalSections = new Set(['General', 'AudioVisual', 'CombatDamage', 'CrateRules', 'Powerups', 'JumpjetControls'])
const aiSections = new Set(['AI', 'IQ', 'Easy', 'Normal', 'Difficult'])

export function classifyDocument(document: IniDocument) {
  const registered = new Map<string, { type: SectionType; registeredIn: string }>()

  for (const [registryName, type] of Object.entries(registryMap)) {
    const registry = document.sectionsByName.get(registryName)
    if (!registry) continue

    registry.type = type === 'Warhead' ? 'Warhead' : 'General'
    registry.entries.forEach((entry) => {
      const id = entry.currentValue?.trim()
      if (id) {
        registered.set(id.toLowerCase(), { type, registeredIn: registryName })
      }
    })
  }

  for (const section of document.sections) {
    const fromRegistry = registered.get(section.name.toLowerCase())
    if (fromRegistry) {
      section.type = fromRegistry.type
      section.registeredIn = fromRegistry.registeredIn
      continue
    }

    section.type = inferSectionType(section)
  }
}

export function inferSectionType(section: IniSection): SectionType {
  if (section.name === 'ArmorTypes') return 'ArmorType'
  if (section.name === 'Sides') return 'Side'
  if (section.name === 'Countries') return 'Country'
  if (generalSections.has(section.name)) return 'General'
  if (aiSections.has(section.name)) return 'AI'

  const keys = new Set(section.entries.map((entry) => entry.key.toLowerCase()))
  const hasAny = (...names: string[]) => names.some((name) => keys.has(name.toLowerCase()))
  const hasAll = (...names: string[]) => names.every((name) => keys.has(name.toLowerCase()))

  if (hasAny('Verses') || section.entries.some((entry) => /^Versus\./i.test(entry.key))) return 'Warhead'
  if (hasAll('Damage', 'ROF') || hasAny('Projectile', 'Warhead')) return 'Weapon'
  if (hasAny('AA', 'AG', 'Arcing', 'Inviso', 'SubjectToWalls', 'AirburstWeapon')) return 'Projectile'
  if (hasAny('SW.Type', 'RechargeTime', 'SidebarImage', 'SW.Warhead')) return 'SuperWeapon'
  if (hasAny('Strength', 'Armor', 'TechLevel', 'Prerequisite', 'Primary')) {
    if (hasAny('Foundation', 'Power', 'Factory')) return 'Building'
    if (hasAny('AirportBound', 'Fighter', 'Landable')) return 'Aircraft'
    if (hasAny('Size', 'Fearless', 'Crawls', 'Occupier')) return 'Infantry'
    return 'Vehicle'
  }

  return 'Unknown'
}

export const sectionTypeLabels: Record<SectionType | 'All' | 'Changes', string> = {
  All: '总览',
  General: '全局',
  Infantry: '步兵',
  Vehicle: '载具',
  Aircraft: '飞机',
  Building: '建筑',
  Weapon: '武器',
  Warhead: '弹头',
  Projectile: '抛射体',
  SuperWeapon: '超级武器',
  ArmorType: '护甲',
  Animation: '动画',
  Particle: '粒子',
  ParticleSystem: '粒子系统',
  Country: '国家',
  Side: '阵营',
  AI: 'AI',
  Terrain: '地形',
  Overlay: '覆盖物',
  Unknown: '未知',
  Changes: '修改记录',
}
