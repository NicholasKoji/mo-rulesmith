import type { IniDocument, IniLine } from './types'

function renderKeyValue(line: IniLine) {
  const key = line.key ?? ''
  const value = line.currentValue ?? line.value ?? ''
  const comment = line.inlineComment ? ` ${line.inlineComment.trimStart()}` : ''
  return `${line.leadingWhitespace ?? ''}${key}${line.separator ?? '='}${value}${comment}`
}

export function renderLine(line: IniLine) {
  if (line.type === 'keyValue') {
    if (line.deleted) {
      return `; [MO Rulesmith deleted] ${line.raw}`
    }
    if (line.modified || line.added) {
      return renderKeyValue(line)
    }
  }
  return line.raw
}

export function exportIni(document: IniDocument) {
  const text = document.lines.map(renderLine).join(document.lineEnding)
  return document.hasTrailingNewline ? `${text}${document.lineEnding}` : text
}

export function downloadText(filename: string, text: string) {
  const blob = new Blob([text], { type: 'text/plain;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const anchor = window.document.createElement('a')
  anchor.href = url
  anchor.download = filename
  anchor.click()
  URL.revokeObjectURL(url)
}
