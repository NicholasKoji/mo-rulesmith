import clsx from 'clsx'
import { ChevronsRight } from 'lucide-react'
import { sectionTypeLabels } from '../lib/classifySections'
import { getDisplaySubtitle, getSectionDisplayInfo } from '../lib/displayName'
import { getEntry } from '../lib/iniParser'
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
  const columns = fieldsFor(activeView === 'All' || activeView === 'Changes' ? document.sectionsByName.get(selectedSection ?? '')?.type ?? 'Unknown' : activeView)
  const coreColumns = columns.filter((column) => !['UIName', 'Name'].includes(column))
  const activeViewLabel = activeView === 'MissingLocalization' ? '缺失语言项' : sectionTypeLabels[activeView]

  return (
    <section className="section-list">
      <div className="panel-title">
        <div>
          <p>{activeViewLabel ?? '分类'}</p>
          <strong>{sections.length.toLocaleString()} 个 Section</strong>
        </div>
      </div>
      <div className="table-scroll">
        <table>
          <thead>
            <tr>
              <th>显示名</th>
              <th>Section ID</th>
              <th>类型</th>
              <th>UIName</th>
              <th>Name</th>
              {coreColumns.map((column) => (
                <th key={column}>{column}</th>
              ))}
              <th></th>
            </tr>
          </thead>
          <tbody>
            {sections.map((section) => {
              const display = getSectionDisplayInfo(section)
              const subtitle = getDisplaySubtitle(display)
              const uiName = getEntry(document, section.name, 'UIName')?.currentValue
              const rawName = getEntry(document, section.name, 'Name')?.currentValue

              return (
                <tr
                  key={section.name}
                  className={clsx(selectedSection === section.name && 'selected')}
                  onClick={() => onSelect(section.name)}
                >
                  <td className="display-name-cell" title={`${display.displayName}\n${subtitle}`}>
                    <strong>{display.displayName}</strong>
                    {subtitle && <span>{subtitle}</span>}
                  </td>
                  <td className="mono strong">{section.name}</td>
                  <td>{sectionTypeLabels[section.type]}</td>
                  <td className="mono" title={uiName}>
                    {uiName ?? '—'}
                  </td>
                  <td title={rawName}>{rawName ?? '—'}</td>
                  {coreColumns.map((column) => (
                    <td key={column} title={getEntry(document, section.name, column)?.currentValue}>
                      {getEntry(document, section.name, column)?.currentValue ?? '—'}
                    </td>
                  ))}
                  <td>
                    <ChevronsRight size={16} />
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </section>
  )
}
