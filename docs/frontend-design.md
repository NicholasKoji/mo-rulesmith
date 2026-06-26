# MO Rulesmith Frontend Design Notes

## Layout

- Desktop-first three-zone workspace: sticky left category navigation, central searchable table/detail workspace, right field-help panel.
- Upload view is the first screen before a file exists. After parsing, the app switches directly into the editor.
- Dense tables use stable row heights, sticky table headers, horizontal overflow and capped initial rendering to keep large files usable.

## Color System

- Background: charcoal black and dark gunmetal.
- Primary accent: warning red for export, modified state and active navigation.
- Supporting accents: amber for caution and presets, green for safe changes, blue for reference links.
- Risk colors:
  - Safe: green.
  - Caution: amber.
  - Danger: red.
  - Unknown: neutral steel.
  - Reference: blue.

## Component Hierarchy

- `App`: application shell, upload/editor switching, search, export and preset modals.
- `SidebarNav`: category navigation and counts.
- `SectionTable`: category list with key fields by object type.
- `SectionDetail`: object summary, field editor table, reference graph, armor table and raw preview.
- `FieldHelpPanel`: Chinese field explanation, value direction, range and risk.
- `ChangeLogPanel`: modification history and sidecar exports.
- `ExportDialog`: safety check and final download.

## Interaction States

- Modified rows get an amber background.
- Active navigation uses red border and dark red fill.
- Reference fields are clickable blue tags.
- High-risk fields surface red badges and export-time warnings.
- Presets always open a confirmation preview before application.

## Responsive Behavior

- Wide desktop: two-column content grid plus sticky help panel.
- Medium screens: sidebar collapses to icons, detail/help stack vertically.
- Small screens: navigation becomes horizontal, top actions stack, add-field form becomes single column.

## Image Assets

Generated with the built-in imagegen tool and saved under `public/assets/`:

- `logo.png`
- `upload-panel.png`
- `empty-state.png`
- `cover.png`
