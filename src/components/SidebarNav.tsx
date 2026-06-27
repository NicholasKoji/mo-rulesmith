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
  Languages,
  PanelLeftClose,
  PanelLeftOpen,
  Plane,
  Shield,
  Sparkles,
  Users,
  Zap,
} from 'lucide-react'
import { sectionTypeLabels } from '../lib/classifySections'
import { getMissingLocalizationItems } from '../lib/displayName'
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
  'MissingLocalization',
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
  MissingLocalization: Languages,
  Changes: History,
}

const viewLabels: Record<ActiveView, string> = {
  ...sectionTypeLabels,
  MissingLocalization: '缺失语言项',
}

export function SidebarNav({
  document,
  activeView,
  collapsed,
  onToggleCollapsed,
  onChange,
}: {
  document: IniDocument
  activeView: ActiveView
  collapsed: boolean
  onToggleCollapsed: () => void
  onChange: (view: ActiveView) => void
}) {
  const counts = document.sections.reduce<Record<string, number>>((acc, section) => {
    acc[section.type] = (acc[section.type] ?? 0) + 1
    acc.All = (acc.All ?? 0) + 1
    return acc
  }, {})
  counts.Changes = document.lines.filter((line) => line.modified || line.deleted || line.added).length
  counts.MissingLocalization = getMissingLocalizationItems(document).length

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
            title={viewLabels[view] ?? sectionTypeLabels[view as SectionType]}
          >
            <Icon size={17} />
            <span>{viewLabels[view] ?? sectionTypeLabels[view as SectionType]}</span>
            <b>{counts[view] ?? 0}</b>
          </button>
        )
      })}
      <div className="sidebar-bottom">
        <button
          type="button"
          className="sidebar-toggle"
          title={collapsed ? '展开侧栏' : '折叠侧栏'}
          onClick={onToggleCollapsed}
        >
          {collapsed ? <PanelLeftOpen size={15} /> : <PanelLeftClose size={15} />}
          <span>{collapsed ? '展开侧栏' : '折叠侧栏'}</span>
        </button>
      </div>
    </nav>
  )
}
