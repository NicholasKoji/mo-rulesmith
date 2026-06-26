import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { getMissingLocalizationItems, getReferenceDisplayLabel, getSectionDisplayInfo } from '../src/lib/displayName'
import { exportIni } from '../src/lib/iniExporter'
import { getEntry, parseIni } from '../src/lib/iniParser'
import { getReferenceLinks } from '../src/lib/references'
import { searchDocument } from '../src/lib/search'

const filePath = process.argv[2] ?? 'D:\\software\\Mental Omega\\rulesmo.ini'
const text = readFileSync(resolve(filePath), 'utf8')
const document = parseIni(text, 'rulesmo.ini', Buffer.byteLength(text))

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) {
    throw new Error(message)
  }
}

assert(document.stats.totalLines > 100_000, `expected >100000 lines, got ${document.stats.totalLines}`)
assert(document.stats.sectionCount > 4_000, `expected >4000 sections, got ${document.stats.sectionCount}`)
assert(document.stats.keyValueCount > 100_000, `expected >100000 key-values, got ${document.stats.keyValueCount}`)
assert(document.stats.looksLikeRulesMo, 'rulesmo.ini feature detection failed')

const cntr = document.sectionsByName.get('CNTR')
assert(cntr, 'missing [CNTR]')
assert(cntr.type === 'Vehicle', `expected CNTR to be Vehicle, got ${cntr.type}`)

const cntrDisplay = getSectionDisplayInfo(cntr)
assert(cntrDisplay.displayName === '百夫长攻城机甲', `expected CNTR Chinese display name, got ${cntrDisplay.displayName}`)
assert(cntrDisplay.resolvedBy === 'uiName', `expected CNTR display to resolve by UIName, got ${cntrDisplay.resolvedBy}`)
assert(cntrDisplay.uiName === 'NAME:CNTR', `expected CNTR UIName=NAME:CNTR, got ${cntrDisplay.uiName}`)
assert(cntrDisplay.rawName === 'Centurion Siege Crawler', `expected CNTR Name fallback metadata, got ${cntrDisplay.rawName}`)

const cntrSearch = searchDocument(document, '百夫长')
assert(cntrSearch.some((result) => result.sectionName === 'CNTR'), 'Chinese search did not find CNTR')
assert(searchDocument(document, 'CNTR').some((result) => result.sectionName === 'CNTR'), 'Section ID search did not find CNTR')

const speed = getEntry(document, 'CNTR', 'Speed')
assert(speed, 'missing CNTR.Speed')
assert(speed.currentValue === '3', `expected CNTR.Speed=3, got ${speed.currentValue}`)

const primary = getEntry(document, 'CNTR', 'Primary')
assert(primary?.currentValue === 'CenturionCannon', `expected CNTR.Primary=CenturionCannon, got ${primary?.currentValue}`)

const cntrLinks = getReferenceLinks(document, 'CNTR')
assert(cntrLinks.some((link) => link.targetSection === 'CenturionCannon' && link.exists), 'missing CNTR -> CenturionCannon link')
assert(getReferenceDisplayLabel(document, 'CNTR').includes('百夫长攻城机甲'), 'reference label should include CNTR Chinese display name')

const weaponLinks = getReferenceLinks(document, 'CenturionCannon')
assert(weaponLinks.some((link) => link.targetSection === 'CenturionCannonBall' && link.exists), 'missing weapon -> projectile link')
assert(weaponLinks.some((link) => link.targetSection === 'CenturionCannonWH' && link.exists), 'missing weapon -> warhead link')

const missingItems = getMissingLocalizationItems(document)
assert(
  !missingItems.some((item) => item.sectionId === 'CNTR'),
  'CNTR should not be reported as a missing localization item',
)

speed.currentValue = '4'
speed.modified = true
const exported = exportIni(document)
const originalLines = text.split(/\r\n|\n|\r/)
const exportedLines = exported.split(/\r\n|\n|\r/)
const diffs: number[] = []

for (let index = 0; index < Math.max(originalLines.length, exportedLines.length); index += 1) {
  if (originalLines[index] !== exportedLines[index]) {
    diffs.push(index + 1)
  }
}

assert(diffs.length === 1, `expected exactly one changed line, got ${diffs.length}: ${diffs.slice(0, 10).join(', ')}`)
assert(diffs[0] === speed.lineNumber, `expected changed line ${speed.lineNumber}, got ${diffs[0]}`)
assert(exportedLines[speed.lineNumber - 1] === 'Speed=4', `unexpected exported Speed line: ${exportedLines[speed.lineNumber - 1]}`)
assert(exported.includes('UIName=NAME:CNTR'), 'export should preserve original UIName label')
assert(!exported.includes('UIName=百夫长攻城机甲'), 'export must not write Chinese display names into rulesmo.ini')

console.log(
  JSON.stringify(
    {
      file: filePath,
      lines: document.stats.totalLines,
      sections: document.stats.sectionCount,
      keyValues: document.stats.keyValueCount,
      cntrType: cntr.type,
      cntrDisplayName: cntrDisplay.displayName,
      cntrPrimary: primary.currentValue,
      missingLocalizationItems: missingItems.length,
      changedLine: speed.lineNumber,
      result: 'ok',
    },
    null,
    2,
  ),
)
