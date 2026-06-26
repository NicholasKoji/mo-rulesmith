import { Link2 } from 'lucide-react'
import { buildReferenceTree } from '../lib/references'
import type { IniDocument } from '../lib/types'

export function ReferenceGraph({
  document,
  sectionName,
  onJump,
}: {
  document: IniDocument
  sectionName: string
  onJump: (sectionName: string) => void
}) {
  const tree = buildReferenceTree(document, sectionName)

  return (
    <section className="reference-panel">
      <div className="mini-title">
        <Link2 size={16} />
        引用链路
      </div>
      {tree.length === 0 ? (
        <p className="muted">该对象暂无可识别引用。</p>
      ) : (
        <ul className="ref-tree">
          {tree.map((link) => (
            <li key={`${link.sourceKey}-${link.targetSection}`}>
              <button type="button" className={link.exists ? 'ref-link' : 'ref-missing'} onClick={() => link.exists && onJump(link.targetSection)}>
                {link.sourceKey}: {link.targetSection}
              </button>
              {link.children.length > 0 && (
                <ul>
                  {link.children.map((child) => (
                    <li key={`${child.sourceKey}-${child.targetSection}`}>
                      <button
                        type="button"
                        className={child.exists ? 'ref-link' : 'ref-missing'}
                        onClick={() => child.exists && onJump(child.targetSection)}
                      >
                        {child.sourceKey}: {child.targetSection}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
