import clsx from 'clsx'
import type { FieldRisk } from '../lib/types'

const labels: Record<FieldRisk, string> = {
  safe: '推荐改',
  caution: '谨慎改',
  danger: '高风险',
  unknown: '未知',
}

export function RiskBadge({ risk }: { risk: FieldRisk }) {
  return <span className={clsx('risk-badge', `risk-${risk}`)}>{labels[risk]}</span>
}
