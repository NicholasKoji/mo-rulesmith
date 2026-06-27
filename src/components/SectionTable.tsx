import clsx from 'clsx'
import { ChevronsRight } from 'lucide-react'
import { sectionTypeLabels } from '../lib/classifySections'
import { getDisplaySubtitle, getReferenceDisplayLabel, getSectionDisplayInfo } from '../lib/displayName'
import { getEntry } from '../lib/iniParser'
import { isReferenceKey, splitTargets } from '../lib/references'
import type { ActiveView } from '../store/useIniStore'
import type { IniDocument } from '../lib/types'

const unitFields = ['UIName', 'Name', 'Strength', 'Armor', 'Cost', 'TechLevel', 'Primary', 'Speed', 'BuildLimit']
const weaponFields = ['Damage', 'ROF', 'Range', 'Projectile', 'Warhead', 'Burst']
const warheadFields = ['Verses', 'CellSpread', 'PercentAtMax', 'AffectsAllies']
const projectileFields = ['Image', 'AA', 'AG', 'ROT', 'Speed', 'Arcing']
const superFields = ['Type', 'RechargeTime', 'Action', 'SidebarImage', 'SW.AffectsTarget']

function fieldsFor(type: string) {
  if (['Infantry', 'Vehicle', 'Aircraft', 'Building'].includes(type)) return unitFields
  if (type === 'Weapon') return weaponFields
  if (type === 'Warhead') return warheadFields
  if (type === 'Projectile') return projectileFields
  if (type === 'SuperWeapon') return superFields
  return ['Name', 'UIName', 'Image', 'Type', 'Strength', 'Damage']
}

export function SectionTable({
  document,
  activeView,
  selectedSection,
  onSelect,
}: {
  document: IniDocument
  activeView: ActiveView
  selectedSection?: string
  onSelect: (sectionName: string) => void
}) {
  const sections = document.sections
    .filter((section) => activeView === 'All' || activeView === 'Changes' || section.type === activeView)
    .filter((section) =>
      activeView === 'Changes' ? section.entries.some((entry) => entry.modified || entry.deleted || entry.added) : true,
    )
  const activeViewLabel = activeView === 'MissingLocalization' ? '缺失语言项' : sectionTypeLabels[activeView]

  return (
    <section className="section-list">
      <div className="panel-title">
        <div>
          <p>{activeViewLabel ?? '分类'}</p>
          <strong>{sections.length.toLocaleString()} 个 Section</strong>
        </div>
      </div>
      <div className="object-list-scroll">
        {sections.map((section) => {
          const display = getSectionDisplayInfo(section)
          const subtitle = getDisplaySubtitle(display)
          const summaryFields = fieldsFor(section.type)
            .filter((column) => !['UIName', 'Name'].includes(column))
            .map((column) => ({
              key: column,
              value: getEntry(document, section.name, column)?.currentValue,
            }))
            .filter((item) => item.value)
            .slice(0, 3)
          const modified = section.entries.some((entry) => entry.modified || entry.deleted || entry.added)

          return (
            <button
              type="button"
              key={section.name}
              className={clsx('object-list-item', selectedSection === section.name && 'selected', modified && 'modified')}
              onClick={() => onSelect(section.name)}
              title={`${display.displayName}\n${subtitle}`}
            >
              <span className="object-list-name">{display.displayName}</span>
              <span className="object-list-subtitle">
                <code>{section.name}</code>
                {display.rawName && <> · {display.rawName}</>}
              </span>
              <span className="object-list-summary">
                {summaryFields.length > 0
                  ? summaryFields.map((item) => `${item.key} ${formatColumnValue(document, item.key, item.value)}`).join(' · ')
                  : sectionTypeLabels[section.type]}
              </span>
              <ChevronsRight size={15} />
            </button>
          )
        })}
      </div>
    </section>
  )
}

function formatColumnValue(document: IniDocument, key: string, value?: string) {
  if (!value) return '—'
  if (!isReferenceKey(key)) return value
  return splitTargets(value)
    .map((target) => getReferenceDisplayLabel(document, target))
    .join(', ')
}
