import clsx from 'clsx'
import {
  Activity,
  Archive,
  Atom,
  Bot,
  Boxes,
  Building2,
  CircleDot,
  Crosshair,
  FileCog,
  History,
  Plane,
  Shield,
  Sparkles,
  Users,
  Zap,
} from 'lucide-react'
import { sectionTypeLabels } from '../lib/classifySections'
import type { ActiveView } from '../store/useIniStore'
import type { IniDocument, SectionType } from '../lib/types'

const order: ActiveView[] = [
  'All',
  'Infantry',
  'Vehicle',
  'Aircraft',
  'Building',
  'Weapon',
  'Warhead',
  'Projectile',
  'ArmorType',
  'SuperWeapon',
  'AI',
  'General',
  'Unknown',
  'Changes',
]

const icons: Record<string, typeof FileCog> = {
  All: Activity,
  Infantry: Users,
  Vehicle: Boxes,
  Aircraft: Plane,
  Building: Building2,
  Weapon: Crosshair,
  Warhead: Zap,
  Projectile: CircleDot,
  ArmorType: Shield,
  SuperWeapon: Sparkles,
  AI: Bot,
  General: FileCog,
  Unknown: Archive,
  Changes: History,
}

export function SidebarNav({
  document,
  activeView,
  onChange,
}: {
  document: IniDocument
  activeView: ActiveView
  onChange: (view: ActiveView) => void
}) {
  const counts = document.sections.reduce<Record<string, number>>((acc, section) => {
    acc[section.type] = (acc[section.type] ?? 0) + 1
    acc.All = (acc.All ?? 0) + 1
    return acc
  }, {})
  counts.Changes = document.lines.filter((line) => line.modified || line.deleted || line.added).length

  return (
    <nav className="sidebar">
      <div className="sidebar-brand">
        <img src="/assets/logo.png" alt="" />
        <div>
          <strong>MO Rulesmith</strong>
          <span>规则工坊</span>
        </div>
      </div>
      {order.map((view) => {
        const Icon = icons[view] ?? Atom
        return (
          <button
            type="button"
            key={view}
            className={clsx('nav-item', activeView === view && 'active')}
            onClick={() => onChange(view)}
          >
            <Icon size={17} />
            <span>{sectionTypeLabels[view as SectionType] ?? sectionTypeLabels[view]}</span>
            <b>{counts[view] ?? 0}</b>
          </button>
        )
      })}
    </nav>
  )
}
