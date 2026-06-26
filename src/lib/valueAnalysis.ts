import { analyzeFieldValueZhCN } from '../data/moFieldLocalization.zhCN'

export interface ValueAnalysis {
  label: string
  tone: 'muted' | 'good' | 'warn' | 'danger' | 'info'
  detail: string
}

function numeric(value?: string) {
  if (!value) return Number.NaN
  return Number.parseFloat(value.replace('%', ''))
}

function between(value: number, rules: Array<[number, string, ValueAnalysis['tone'], string]>): ValueAnalysis {
  for (const [max, label, tone, detail] of rules) {
    if (value <= max) return { label, tone, detail }
  }
  return rules.at(-1)
    ? { label: rules.at(-1)![1], tone: rules.at(-1)![2], detail: rules.at(-1)![3] }
    : { label: '未知', tone: 'muted', detail: '无法判断。' }
}

export function analyzeValue(key: string, value?: string): ValueAnalysis {
  const localizedAnalysis = analyzeFieldValueZhCN(key, value ?? '')
  if (localizedAnalysis) {
    return {
      label: localizedAnalysis.label,
      tone: mapLocalizedTone(localizedAnalysis.tone),
      detail: localizedAnalysis.description,
    }
  }

  const n = numeric(value)
  if (Number.isNaN(n)) {
    if (/^(yes|true)$/i.test(value ?? '')) return { label: '启用', tone: 'info', detail: '布尔字段已启用。' }
    if (/^(no|false)$/i.test(value ?? '')) return { label: '关闭', tone: 'muted', detail: '布尔字段已关闭。' }
    return { label: '非数值', tone: 'muted', detail: '该字段不是单一数值，需结合上下文判断。' }
  }

  if (/^Speed$/i.test(key)) {
    return between(n, [
      [2, '极慢', 'warn', '0-2：极慢。'],
      [3, '很慢', 'warn', '3：重型单位常见。'],
      [5, '正常', 'good', '4-5：正常载具速度。'],
      [8, '较快', 'info', '6-8：较快。'],
      [Number.POSITIVE_INFINITY, '非常快', 'danger', '9+：非常快，可能改变手感。'],
    ])
  }

  if (/^(ROT|TurretROT)$/i.test(key)) {
    return between(n, [
      [1, '笨重', 'warn', '0-1：转向很笨。'],
      [3, '重型', 'warn', '2-3：重型单位常见。'],
      [5, '正常', 'good', '4-5：正常。'],
      [Number.POSITIVE_INFINITY, '灵活', 'info', '6+：转向灵活。'],
    ])
  }

  if (/^ROF$/i.test(key)) {
    return between(n, [
      [10, '极高射速', 'danger', '1-10：极高射速。'],
      [30, '高射速', 'info', '11-30：高射速。'],
      [80, '常规射速', 'good', '31-80：常规射速。'],
      [150, '慢射速', 'warn', '81-150：慢射速。'],
      [Number.POSITIVE_INFINITY, '很慢', 'warn', '151+：很慢。'],
    ])
  }

  if (/^Damage$/i.test(key)) {
    return between(n, [
      [20, '低伤害', 'muted', '1-20：低伤害。'],
      [60, '中低伤害', 'good', '21-60：中低伤害。'],
      [120, '中高伤害', 'info', '61-120：中高伤害。'],
      [250, '高伤害', 'warn', '121-250：高伤害。'],
      [Number.POSITIVE_INFINITY, '超高伤害', 'danger', '251+：超高伤害。'],
    ])
  }

  if (/^Range$/i.test(key)) {
    return between(n, [
      [4, '近距离', 'muted', '1-4：近距离。'],
      [7, '常规射程', 'good', '5-7：常规射程。'],
      [11, '远射程', 'info', '8-11：远射程。'],
      [15, '超远射程', 'warn', '12-15：超远射程。'],
      [Number.POSITIVE_INFINITY, '攻城级', 'danger', '16+：攻城级射程。'],
    ])
  }

  if (/^CellSpread$/i.test(key)) {
    return between(n, [
      [0, '无溅射', 'muted', '0：无明显溅射。'],
      [0.5, '小溅射', 'good', '0.1-0.5：小范围溅射。'],
      [1.5, '中等溅射', 'info', '0.6-1.5：中等溅射。'],
      [3, '大溅射', 'warn', '1.6-3：大范围溅射。'],
      [Number.POSITIVE_INFINITY, '超大溅射', 'danger', '3+：超大范围。'],
    ])
  }

  if (/^(Verses|Versus\.)/i.test(key)) {
    return analyzePercent(n)
  }

  return { label: '可编辑', tone: 'muted', detail: '暂无专用强弱规则。' }
}

function mapLocalizedTone(tone: 'neutral' | 'good' | 'warning' | 'danger'): ValueAnalysis['tone'] {
  if (tone === 'neutral') return 'muted'
  if (tone === 'warning') return 'warn'
  return tone
}

export function analyzePercent(value: number): ValueAnalysis {
  return between(value, [
    [0, '完全无效', 'muted', '0%：完全无效。'],
    [25, '刮痧', 'warn', '1%-25%：效果很弱。'],
    [75, '较弱', 'warn', '26%-75%：效果较弱。'],
    [125, '正常', 'good', '76%-125%：正常。'],
    [200, '克制', 'info', '126%-200%：克制。'],
    [Number.POSITIVE_INFINITY, '强克制', 'danger', '200%+：强克制。'],
  ])
}
