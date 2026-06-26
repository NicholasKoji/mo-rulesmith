import { Copy, Languages } from 'lucide-react'
import { useMemo } from 'react'
import { sectionTypeLabels } from '../lib/classifySections'
import { formatMissingLocalizationList, getMissingLocalizationItems } from '../lib/displayName'
import type { IniDocument } from '../lib/types'

export function MissingLocalizationPanel({
  document,
  onJump,
}: {
  document: IniDocument
  onJump: (sectionName: string) => void
}) {
  const items = useMemo(() => getMissingLocalizationItems(document), [document])
  const copiedList = useMemo(() => formatMissingLocalizationList(items), [items])

  return (
    <section className="missing-localization">
      <div className="panel-title">
        <div>
          <p>缺失语言项</p>
          <strong>{items.length.toLocaleString()} 个未解析 UIName</strong>
        </div>
        <button type="button" onClick={() => navigator.clipboard.writeText(copiedList)}>
          <Copy size={15} />
          复制缺失列表
        </button>
      </div>

      {items.length === 0 ? (
        <div className="empty-state-line">
          <Languages size={18} />
          当前文件中的 UIName 都能被内置中文映射解析。
        </div>
      ) : (
        <div className="missing-table-scroll">
          <table>
            <thead>
              <tr>
                <th>Section ID</th>
                <th>对象类型</th>
                <th>UIName</th>
                <th>Name</th>
                <th>建议显示名</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={`${item.sectionId}-${item.uiName}`} onClick={() => onJump(item.sectionId)}>
                  <td className="mono strong">{item.sectionId}</td>
                  <td>{sectionTypeLabels[item.type]}</td>
                  <td className="mono" title={item.uiName}>
                    {item.uiName}
                  </td>
                  <td title={item.rawName}>{item.rawName ?? '—'}</td>
                  <td title={item.suggestedDisplayName}>{item.suggestedDisplayName}</td>
                  <td className="row-actions" onClick={(event) => event.stopPropagation()}>
                    <button type="button" title="复制 UIName" onClick={() => navigator.clipboard.writeText(item.uiName)}>
                      <Copy size={15} />
                    </button>
                    <button type="button" title="复制 Section ID" onClick={() => navigator.clipboard.writeText(item.sectionId)}>
                      ID
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}
