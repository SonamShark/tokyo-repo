import { useId, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Icon from './Icon'

// Click-to-expand card. Used wherever extra detail is useful but not essential.
export default function ExpandCard({ icon, title, meta, summary, detail, index = 0, accent, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  const id = useId()
  return (
    <div className={`card expand ${open ? 'open' : ''} ${accent ? 'accent-' + accent : ''} reveal`} style={{ '--i': index + 1 }}>
      <button type="button" className="expand-head" aria-expanded={open} aria-controls={id} onClick={() => setOpen(o => !o)}>
        {icon && <span className="icon-chip"><Icon name={icon} /></span>}
        <span className="expand-text">
          <span className="card-title">{title}</span>
          {meta && <span className="card-meta">{meta}</span>}
          {summary && <span className="card-sub">{summary}</span>}
        </span>
        <ChevronDown className="chev" size={18} aria-hidden="true" />
      </button>
      <div id={id} className="expand-body" role="region" aria-hidden={!open}>
        <div><p>{detail}</p></div>
      </div>
    </div>
  )
}
