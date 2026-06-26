import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { exportIni } from '../src/lib/iniExporter'
import { getEntry, parseIni } from '../src/lib/iniParser'
import { getReferenceLinks } from '../src/lib/references'

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

const speed = getEntry(document, 'CNTR', 'Speed')
assert(speed, 'missing CNTR.Speed')
assert(speed.currentValue === '3', `expected CNTR.Speed=3, got ${speed.currentValue}`)

const primary = getEntry(document, 'CNTR', 'Primary')
assert(primary?.currentValue === 'CenturionCannon', `expected CNTR.Primary=CenturionCannon, got ${primary?.currentValue}`)

const cntrLinks = getReferenceLinks(document, 'CNTR')
assert(cntrLinks.some((link) => link.targetSection === 'CenturionCannon' && link.exists), 'missing CNTR -> CenturionCannon link')

const weaponLinks = getReferenceLinks(document, 'CenturionCannon')
assert(weaponLinks.some((link) => link.targetSection === 'CenturionCannonBall' && link.exists), 'missing weapon -> projectile link')
assert(weaponLinks.some((link) => link.targetSection === 'CenturionCannonWH' && link.exists), 'missing weapon -> warhead link')

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

console.log(
  JSON.stringify(
    {
      file: filePath,
      lines: document.stats.totalLines,
      sections: document.stats.sectionCount,
      keyValues: document.stats.keyValueCount,
      cntrType: cntr.type,
      cntrPrimary: primary.currentValue,
      changedLine: speed.lineNumber,
      result: 'ok',
    },
    null,
    2,
  ),
)
