import Tag from './Tag'

export default function SlideHeader({ eyebrow, title, lead, kind }) {
  return (
    <header className="slide-header reveal" style={{ '--i': 0 }}>
      <div className="eyebrow">{eyebrow}</div>
      <h2>{title}</h2>
      {lead && <p className="lead">{lead}</p>}
      {kind && <Tag kind={kind} />}
    </header>
  )
}
