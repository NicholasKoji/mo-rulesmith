import { getEntry } from './iniParser'
import type { IniDocument, PresetChange, RulesmithPreset } from './types'

function change(sectionName: string, key: string, nextValue: string, note: string): PresetChange {
  return { sectionName, key, nextValue, note }
}

export const presets: RulesmithPreset[] = [
  {
    id: 'auto-repair',
    name: '自动维修',
    description: '让玩家建筑受损时自动维修。维修仍然消耗资金。',
    risk: 'safe',
    buildChanges: () => [change('IQ', 'RepairSell', '0', '让玩家建筑受损时自动维修。')],
  },
  {
    id: 'campaign-comfort',
    name: '战役舒适版',
    description: '略微加快建造，增强矿车和基地车生存能力。',
    risk: 'caution',
    buildChanges: (document: IniDocument) => {
      const result = [change('General', 'BuildSpeed', '.5', '略微降低 BuildSpeed，加快建造。')]
      for (const sectionName of ['HARV', 'CMIN', 'AMCV', 'SMCV', 'PCV', 'FMCV']) {
        const strength = getEntry(document, sectionName, 'Strength')
        if (strength) {
          const next = Math.round(Number.parseFloat(strength.currentValue) * 1.25).toString()
          result.push(change(sectionName, 'Strength', next, '提高关键经济/基地单位血量约 25%。'))
        }
        const sight = getEntry(document, sectionName, 'Sight')
        if (sight) {
          const next = (Number.parseFloat(sight.currentValue) + 1).toString()
          result.push(change(sectionName, 'Sight', next, '提高 1 点视野。'))
        }
      }
      return result
    },
  },
  {
    id: 'centurion-fun',
    name: '百夫长爽玩版',
    description: '明显加强百夫长，可能破坏战役平衡。',
    risk: 'danger',
    buildChanges: () => [
      change('CNTR', 'Speed', '4', '百夫长移动从很慢变为略更灵活。'),
      change('CNTR', 'ROT', '3', '提高车体转向。'),
      change('CNTR', 'TurretROT', '4', '提高炮塔转向。'),
      change('CNTR', 'BuildLimit', '3', '允许同时拥有更多百夫长。'),
    ],
  },
  {
    id: 'sight-boost',
    name: '单位视野增强',
    description: '为可建造单位生成 Sight +1 建议，默认只列出建议。',
    risk: 'caution',
    buildChanges: (document: IniDocument) =>
      document.sections
        .filter((section) => ['Infantry', 'Vehicle', 'Aircraft', 'Building'].includes(section.type))
        .flatMap((section) => {
          const sight = getEntry(document, section.name, 'Sight')
          const tech = getEntry(document, section.name, 'TechLevel')
          if (!sight || tech?.currentValue === '-1') return []
          const next = (Number.parseFloat(sight.currentValue) + 1).toString()
          return [change(section.name, 'Sight', next, '可建造单位视野 +1。')]
        })
        .slice(0, 80),
  },
]
