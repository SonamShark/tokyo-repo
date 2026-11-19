// Small tab switcher used inside slides (not for slide navigation).
export default function Segmented({ options, value, onChange, label }) {
  return (
    <div className="segmented" role="tablist" aria-label={label}>
      {options.map(o => (
        <button key={o.id} role="tab" aria-selected={value === o.id}
          className={value === o.id ? 'on' : ''} onClick={() => onChange(o.id)}>
          {o.icon}{o.label}
        </button>
      ))}
    </div>
  )
}
