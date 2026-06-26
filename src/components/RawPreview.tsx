import { FileText } from 'lucide-react'
import { renderLine } from '../lib/iniExporter'
import type { IniDocument } from '../lib/types'

export function RawPreview({ document, sectionName }: { document: IniDocument; sectionName: string }) {
  const section = document.sectionsByName.get(sectionName)
  if (!section) return null

  const lines = document.lines.slice(section.startLine - 1, Math.min(section.endLine, section.startLine + 80))

  return (
    <section className="raw-preview">
      <div className="mini-title">
        <FileText size={16} />
        原文片段
      </div>
      <pre>
        {lines.map((line) => (
          <code key={line.id} className={line.modified || line.deleted || line.added ? 'raw-modified' : undefined}>
            {String(line.lineNumber).padStart(6, ' ')}  {renderLine(line)}
            {'\n'}
          </code>
        ))}
      </pre>
    </section>
  )
}
