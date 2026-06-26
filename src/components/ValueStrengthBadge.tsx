import clsx from 'clsx'
import { analyzeValue } from '../lib/valueAnalysis'

export function ValueStrengthBadge({ fieldKey, value }: { fieldKey: string; value?: string }) {
  const analysis = analyzeValue(fieldKey, value)
  return (
    <span className={clsx('strength-badge', `tone-${analysis.tone}`)} title={analysis.detail}>
      {analysis.label}
    </span>
  )
}
