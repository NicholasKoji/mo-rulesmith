import { getFieldRisk } from './fieldDocs'
import { getReferenceLinks } from './references'
import type { IniDocument, IniEntry, ValidationIssue } from './types'

const numericKeys = new Set([
  'Strength',
  'Cost',
  'TechLevel',
  'BuildLimit',
  'Sight',
  'Speed',
  'ROT',
  'TurretROT',
  'Damage',
  'ROF',
  'Range',
  'MinimumRange',
  'Burst',
  'CellSpread',
])

const percentKeys = new Set(['VeteranRatio', 'PercentAtMax', 'ProneDamage', 'EMP.Modifier'])
const booleanKeys = new Set(['OpenTopped', 'SelfHealing', 'AA', 'AG', 'Arcing', 'Inviso', 'AffectsAllies', 'AffectsOwner'])

const highRiskKeys = new Set([
  'Locomotor',
  'MovementZone',
  'Category',
  'Foundation',
  'Image',
  'ArtImage',
  'Prerequisite',
  'Owner',
  'RequiredHouses',
  'ForbiddenHouses',
  'Armor',
  'Warhead',
  'Projectile',
])

function issue(entry: IniEntry, severity: ValidationIssue['severity'], message: string): ValidationIssue {
  return {
    id: `${entry.id}-${severity}-${message}`,
    severity,
    sectionName: entry.sectionName,
    key: entry.key,
    lineNumber: entry.lineNumber,
    message,
  }
}

export function validateDocument(document: IniDocument): ValidationIssue[] {
  const issues: ValidationIssue[] = []

  if (document.lines.length === 0) {
    issues.push({ id: 'empty-export', severity: 'danger', message: '导出文件为空。' })
  }

  if (document.sections.some((section) => !section.name.trim())) {
    issues.push({ id: 'empty-section', severity: 'danger', message: '存在空 Section 名。' })
  }

  for (const section of document.sections) {
    for (const link of getReferenceLinks(document, section.name)) {
      if (!link.exists) {
        issues.push({
          id: `missing-ref-${section.name}-${link.sourceKey}-${link.targetSection}`,
          severity: 'warning',
          sectionName: section.name,
          key: link.sourceKey,
          message: `引用目标 [${link.targetSection}] 不存在。`,
        })
      }
    }

    for (const entry of section.entries) {
      if (!entry.modified && !entry.deleted && !entry.added) continue

      const value = entry.currentValue ?? ''
      if (numericKeys.has(entry.key) && Number.isNaN(Number.parseFloat(value))) {
        issues.push(issue(entry, 'danger', '数值字段填写了非数字。'))
      }

      if ((percentKeys.has(entry.key) || /^Versus\./i.test(entry.key)) && value && !value.includes('%')) {
        issues.push(issue(entry, 'warning', '百分比字段可能缺少 %。'))
      }

      if (booleanKeys.has(entry.key) && value && !/^(yes|no|true|false)$/i.test(value)) {
        issues.push(issue(entry, 'warning', '布尔字段建议使用 yes/no 或 true/false。'))
      }

      if (highRiskKeys.has(entry.key) || getFieldRisk(entry.key) === 'danger') {
        issues.push(issue(entry, 'danger', '修改了高风险字段，导出前请确认引用和战役脚本影响。'))
      }

      if (entry.deleted && highRiskKeys.has(entry.key)) {
        issues.push(issue(entry, 'danger', '删除了关键字段，可能导致规则异常。'))
      }

      if (entry.added && !/^[A-Za-z0-9_.-]+$/.test(entry.key)) {
        issues.push(issue(entry, 'warning', '新增字段名看起来可能拼写异常。'))
      }

      if (entry.isDuplicate) {
        issues.push(issue(entry, 'info', '该 Section 内存在重复 Key，导出会保留重复结构。'))
      }
    }
  }

  return issues
}
