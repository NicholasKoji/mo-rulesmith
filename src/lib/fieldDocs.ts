import {
  getFieldSearchTextZhCN,
  resolveFieldDocZhCN,
  type FieldValueKind,
} from '../data/moFieldLocalization.zhCN'
import type { FieldDoc, FieldRisk } from './types'

export interface LocalizedFieldDoc extends FieldDoc {
  valueKind: FieldValueKind
  exact: boolean
}

export function getFieldDoc(key?: string): LocalizedFieldDoc {
  const resolved = resolveFieldDocZhCN(key ?? '')
  return {
    key: resolved.key,
    zhName: resolved.zhName,
    category: resolved.category,
    description: resolved.description,
    valueDirection: resolved.valueDirection,
    suggestedChange: resolved.suggestedChange || undefined,
    risk: resolved.risk,
    examples: resolved.examples,
    valueKind: resolved.valueKind,
    exact: resolved.exact,
  }
}

export function getFieldRisk(key?: string): FieldRisk {
  return getFieldDoc(key).risk
}

export function getFieldLabel(key?: string) {
  return getFieldDoc(key).zhName
}

export function getFieldSearchText(key?: string) {
  if (!key) return ''
  return getFieldSearchTextZhCN(key).toLowerCase()
}
