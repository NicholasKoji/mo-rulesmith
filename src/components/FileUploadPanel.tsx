import { FileUp, ShieldCheck } from 'lucide-react'
import { useRef, useState } from 'react'

interface Props {
  onLoad: (text: string, fileName: string, fileSize: number) => void
}

export function FileUploadPanel({ onLoad }: Props) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [busy, setBusy] = useState(false)
  const hasPreviousChanges =
    typeof localStorage !== 'undefined' && (localStorage.getItem('mo-rulesmith:last-changes') ?? '[]') !== '[]'

  async function readFile(file?: File) {
    if (!file) return
    if (!file.name.toLowerCase().endsWith('.ini')) {
      alert('请选择 .ini 文件。')
      return
    }
    setBusy(true)
    try {
      const text = await file.text()
      onLoad(text, file.name, file.size)
    } finally {
      setBusy(false)
    }
  }

  return (
    <section
      className="upload-panel"
      onDragOver={(event) => event.preventDefault()}
      onDrop={(event) => {
        event.preventDefault()
        void readFile(event.dataTransfer.files[0])
      }}
    >
      <div className="upload-art">
        <img src="/assets/upload-panel.png" alt="" />
      </div>
      <div>
        <p className="eyebrow">LOCAL RULES WORKSHOP</p>
        <h1>上传 rulesmo.ini，开始可视化修改</h1>
        <p className="upload-copy">文件只会在浏览器本地解析，不会上传到任何服务器。</p>
        {hasPreviousChanges && (
          <p className="resume-note">检测到上次修改记录。请重新上传原始 rulesmo.ini 后继续核对和导出。</p>
        )}
        <div className="upload-actions">
          <button className="primary-button" type="button" onClick={() => inputRef.current?.click()} disabled={busy}>
            <FileUp size={18} />
            {busy ? '读取中' : '选择 INI 文件'}
          </button>
          <span className="local-note">
            <ShieldCheck size={16} />
            纯前端，本地运行
          </span>
        </div>
        <input ref={inputRef} type="file" accept=".ini,text/plain" hidden onChange={(event) => void readFile(event.target.files?.[0])} />
      </div>
    </section>
  )
}
