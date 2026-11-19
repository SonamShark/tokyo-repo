import { useEffect, useState } from 'react'
import { ArrowRight, Check, MapPin, Pause, Play, RotateCcw, Quote } from 'lucide-react'
import Icon from '../components/Icon'
import SlideHeader from '../components/SlideHeader'
import ExpandCard from '../components/ExpandCard'
import Segmented from '../components/Segmented'
import {
  participant, event, programme, aiTesting, verification, perspectives,
  takeaways, relevance, nextSteps, conclusion, thanks,
} from '../data/content'

const asset = p => `${import.meta.env.BASE_URL}${p}`

// Decorative Tokyo skyline (Tokyo Tower + blocks), used faintly on the intro slide.
function Skyline() {
  return (
    <svg className="skyline" viewBox="0 0 1200 160" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
      <g fill="currentColor">
        <path d="M0 160V110h40V80h50v40h30V90h60v70zM200 160V100h45V70h40v90zM330 160V95h60v65zM430 160V60h8v-14h6v14h8v100zM470 160L500 20l30 140zM480 160l20-120 20 120zM560 160V85h55v75zM650 160V105h40V75h35v85zM760 160V92h50V60h30v100zM880 160V108h60v52zM980 160V80h45V50h35v110zM1090 160V100h50v60z" />
      </g>
    </svg>
  )
}

/* 1 ── Cover */
function Cover() {
  return (
    <div className="cover">
      <div className="cover-main">
        <div className="logo-plate reveal" style={{ '--i': 0 }}>
          <img src={asset(event.logo)} alt="Tokyo Test Fest logo" />
        </div>
        <div className="eyebrow reveal" style={{ '--i': 1 }}>{event.dates} · {event.location}</div>
        <h1 className="reveal" style={{ '--i': 2 }}>{event.name}</h1>
        <p className="cover-sub reveal" style={{ '--i': 3 }}>{event.title}</p>
      </div>
      <aside className="card cover-card reveal" style={{ '--i': 4 }}>
        <div className="label">Participant</div>
        <div className="cover-name">{participant.name}</div>
        <div>{participant.designation}</div>
        <div className="muted">{participant.organisation}</div>
        <div className="muted">{participant.division}</div>
      </aside>
      <p className="credit">{event.photoCredit}</p>
    </div>
  )
}

/* 2 ── Programme at a glance */
function Programme() {
  const [day, setDay] = useState('workshop')
  const d = programme.days.find(x => x.id === day)
  const find = (slot, track) => programme.workshops.find(s => s.slot === slot && s.track === track)
  return (
    <>
      <SlideHeader eyebrow="01 · The programme at a glance" title="Two days: hands-on workshops, then the conference" kind="covered" />
      <Segmented label="Event day" value={day} onChange={setDay}
        options={programme.days.map(x => ({ id: x.id, label: `${x.label} · ${x.date}`, icon: <Icon name={x.icon} size={16} /> }))} />
      <ul className="venues reveal" style={{ '--i': 1 }} key={'v' + day}>
        {d.venues.map(v => (
          <li key={v.name}><MapPin size={16} aria-hidden="true" /> <strong>{v.name}</strong> <span className="muted">· {v.note}</span></li>
        ))}
      </ul>
      {day === 'workshop' ? (
        <div key="w">
          <div className="matrix">
            <div className="matrix-corner" />
            {programme.tracks.map(t => (
              <div key={t.id} className="matrix-col">{t.label}<span>{t.venue}</span></div>
            ))}
            {programme.slots.map((slot, r) => (
              <MatrixRow key={slot.id} slot={slot} r={r} cells={programme.tracks.map(t => find(slot.id, t.id))} />
            ))}
          </div>
          <p className="footnote">{programme.workshopNote} Select a workshop for its theme.</p>
        </div>
      ) : (
        <div className="grid g2" key="c">
          {programme.conference.map((g, i) => (
            <div key={g.group} className="card group reveal" style={{ '--i': i + 1 }}>
              <div className="group-head"><span className="icon-chip"><Icon name={g.icon} /></span><strong>{g.group}</strong></div>
              <ul>
                {g.items.map(it => <li key={it.what}><span className="who">{it.who}</span> {it.what}</li>)}
              </ul>
            </div>
          ))}
        </div>
      )}
      <Skyline />
    </>
  )
}
function MatrixRow({ slot, r, cells }) {
  return (
    <>
      <div className="matrix-row reveal" style={{ '--i': r + 1 }}>
        <strong>{slot.label}</strong><span>{slot.time}</span>
      </div>
      {cells.map((s, c) => (
        <ExpandCard key={s.title} index={r * 2 + c + 1} icon={s.icon} title={s.title}
          meta={s.speakers} summary={s.area} detail={s.detail} />
      ))}
    </>
  )
}

/* 3 ── AI and agentic testing */
function AiTesting() {
  const { stages, concepts } = aiTesting
  const [sel, setSel] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [concept, setConcept] = useState('mcp')

  useEffect(() => {
    if (!playing) return
    const t = setInterval(() => {
      setSel(s => {
        if (s >= stages.length - 1) { setPlaying(false); return s }
        return s + 1
      })
    }, 1800)
    return () => clearInterval(t)
  }, [playing, stages.length])

  const toggle = () => {
    if (!playing && sel >= stages.length - 1) setSel(0)
    setPlaying(p => !p)
  }
  const st = stages[sel]
  const c = concepts.find(x => x.id === concept)
  return (
    <>
      <SlideHeader eyebrow="02 · AI-powered and agentic testing" title="How an AI-assisted testing workflow fits together" kind="covered" />
      <div className="flow-wrap reveal" style={{ '--i': 1 }}>
        <div className="flow" role="group" aria-label="AI-assisted testing workflow">
          {stages.map((n, i) => (
            <div className="flow-item" key={n.id}>
              <button className={`flow-node ${sel === i ? 'active' : ''} ${i < sel ? 'passed' : ''}`}
                onClick={() => { setPlaying(false); setSel(i) }} aria-pressed={sel === i}>
                <span className="flow-step">{i + 1}</span>
                <Icon name={n.icon} size={20} />
                <strong>{n.title}</strong>
                <small>{n.sub}</small>
              </button>
              {i < stages.length - 1 && <ArrowRight className={`flow-arrow ${i < sel ? 'lit' : ''}`} size={16} aria-hidden="true" />}
            </div>
          ))}
        </div>
        <button className="play-btn" onClick={toggle} aria-label={playing ? 'Pause walkthrough' : 'Play walkthrough'}>
          {playing ? <Pause size={16} /> : sel >= stages.length - 1 ? <RotateCcw size={16} /> : <Play size={16} />}
          <span>{playing ? 'Pause' : sel >= stages.length - 1 ? 'Replay' : 'Walk through'}</span>
        </button>
      </div>
      <div className="flow-desc" aria-live="polite" key={st.id}>
        <strong>{st.title}.</strong> {st.text}
        {st.id === 'agent' && <span className="rag-note"> {aiTesting.rag}.</span>}
      </div>
      <p className="banner reveal" style={{ '--i': 2 }}><Check size={14} aria-hidden="true" /> {aiTesting.principle}</p>
      <div className="concepts reveal" style={{ '--i': 3 }}>
        <div className="chips-row" role="tablist" aria-label="Key concepts">
          {concepts.map(x => (
            <button key={x.id} role="tab" aria-selected={concept === x.id} className={`cchip ${concept === x.id ? 'on' : ''}`} onClick={() => setConcept(x.id)}>
              <Icon name={x.icon} size={16} /> {x.title}
            </button>
          ))}
        </div>
        <p className="concept-text" key={c.id}>{c.text}</p>
      </div>
      <p className="footnote">{aiTesting.sources}</p>
    </>
  )
}

/* 4 ── Trust and verification */
function Verification() {
  const [view, setView] = useState('compare')
  const opts = [
    { id: 'compare', label: 'Compare' },
    ...verification.views.map(v => ({ id: v.id, label: v.label })),
  ]
  const shown = view === 'compare' ? verification.views : verification.views.filter(v => v.id === view)
  return (
    <>
      <SlideHeader eyebrow="03 · Trust and verification" title="Generated is not the same as verified" kind="covered" />
      <Segmented label="Output view" options={opts} value={view} onChange={setView} />
      <div className={`vs ${view === 'compare' ? 'two' : 'one'}`} key={view}>
        {shown.map((v, i) => (
          <div key={v.id} className={`card vs-card tone-${v.tone} reveal`} style={{ '--i': i }}>
            <div className="vs-head"><span className="icon-chip"><Icon name={v.icon} /></span>
              <div><div className="card-title">{v.label}</div><div className="vs-sub">{v.headline}</div></div></div>
            <ul>{v.points.map(p => <li key={p}><span className="bullet" aria-hidden="true" />{p}</li>)}</ul>
          </div>
        ))}
        {view === 'compare' && (
          <div className="bridge reveal" style={{ '--i': 2 }} aria-label="Verification steps between the two">
            <span className="bridge-title">Independent verification</span>
            {verification.bridge.map((b, i) => <span key={b} className="bridge-step"><em>{i + 1}</em>{b}</span>)}
          </div>
        )}
      </div>
      <blockquote className="big-quote reveal" style={{ '--i': 3 }}><Quote size={18} aria-hidden="true" />{verification.quote}</blockquote>
      <div className="gov reveal" style={{ '--i': 4 }}>
        <span className="gov-title">{verification.govTitle}</span>
        {verification.gov.map(g => <span key={g.label} className="chip"><Icon name={g.icon} size={16} /> {g.label}</span>)}
      </div>
      <p className="footnote">{verification.sources}</p>
    </>
  )
}

/* 5 ── Emerging practices and industry perspectives */
function Perspectives() {
  const [tab, setTab] = useState('lightning')
  return (
    <>
      <SlideHeader eyebrow="04 · Emerging practices and industry perspectives" title="Beyond the tools: practices shaping testing" kind="covered" />
      <Segmented label="Theme group" options={perspectives.tabs} value={tab} onChange={setTab} />
      {tab === 'lightning' && (
        <div key="l">
          <div className="grid g5">
            {perspectives.lightning.map((it, i) => (
              <div key={it.title} className="card tile mini reveal" style={{ '--i': i * 0.5 }} tabIndex={0}>
                <span className="icon-chip sm"><Icon name={it.icon} size={16} /></span>
                <div className="card-title">{it.title}</div>
                <p className="card-sub">{it.text}</p>
              </div>
            ))}
          </div>
          <p className="footnote">{perspectives.lightningNote}</p>
        </div>
      )}
      {tab !== 'lightning' && (
        <div className="grid g2" key={tab}>
          {perspectives[tab].map((c, i) => (
            <ExpandCard key={c.title} index={i} icon={c.icon} title={c.title} meta={c.meta} detail={c.detail} defaultOpen />
          ))}
        </div>
      )}
    </>
  )
}

/* 6 ── Key takeaways */
function Takeaways() {
  return (
    <>
      <SlideHeader eyebrow="05 · My key takeaways" title="What I learned" kind="reflection" />
      <div className="grid g4">
        {takeaways.items.map((t, i) => (
          <ExpandCard key={t.title} index={i} icon={t.icon} title={t.title} summary={t.text}
            detail={`${t.why} Linked to: ${t.source}.`} accent="amber" />
        ))}
      </div>
      <p className="footnote">{takeaways.note}</p>
    </>
  )
}

/* 7 ── Application to GovTech */
function Relevance() {
  return (
    <>
      <SlideHeader eyebrow="06 · Application to GovTech Bhutan" title="Where this learning could help DSD" kind="proposed" />
      <div className="grid g3">
        {relevance.items.map((r, i) => (
          <ExpandCard key={r.title} index={i} icon={r.icon} title={r.title} summary={r.text}
            detail={`Illustrative example: ${r.example}`} accent="green" />
        ))}
      </div>
      <p className="footnote">{relevance.note} Select a card for an example.</p>
    </>
  )
}

/* 8 ── Proposed next steps */
function NextSteps() {
  const [sel, setSel] = useState(0)
  const it = nextSteps.items[sel]
  return (
    <>
      <SlideHeader eyebrow="07 · Recommendations" title={nextSteps.title} kind="proposed" />
      <p className="banner reveal" style={{ '--i': 1 }}>{nextSteps.banner}</p>
      <div className="init">
        <div className="init-list" role="tablist" aria-label="Proposed initiatives">
          {nextSteps.items.map((x, i) => (
            <button key={x.n} role="tab" aria-selected={sel === i} className={`init-btn reveal ${sel === i ? 'on' : ''}`} style={{ '--i': i + 1 }} onClick={() => setSel(i)}>
              <span className="step-num">{x.n}</span>
              <span><strong>{x.title}</strong><small>Proposed initiative</small></span>
            </button>
          ))}
        </div>
        <div className="init-detail" key={it.n} role="tabpanel">
          <h3><Icon name={it.icon} size={20} /> {it.title}</h3>
          <div className="init-fields">
            {nextSteps.fields.map(f => (
              <div key={f.key} className="card field">
                <div className="label"><Icon name={f.icon} size={14} /> {f.label}</div>
                <p>{it[f.key]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

/* 9 ── Conclusion */
function Conclusion() {
  return (
    <>
      <SlideHeader eyebrow="08 · Conclusion" title="Value of participation" />
      <blockquote className="hero-quote reveal" style={{ '--i': 1 }}>{conclusion.message}</blockquote>
      <div className="grid g3">
        {conclusion.answers.map((a, i) => (
          <div className="card tile reveal" style={{ '--i': i + 2 }} key={a.q} tabIndex={0}>
            <span className="icon-chip"><Icon name={a.icon} /></span>
            <div className="card-title">{a.q}</div>
            <p className="card-sub">{a.a}</p>
          </div>
        ))}
      </div>
    </>
  )
}

/* 10 ── Thank you */
function Thanks() {
  return (
    <div className="thanks-slide">
      <div className="logo-plate reveal" style={{ '--i': 0 }}><img src={asset(event.logo)} alt="Tokyo Test Fest logo" /></div>
      <h1 className="reveal" style={{ '--i': 1 }}>{thanks.heading}</h1>
      <p className="cover-sub reveal" style={{ '--i': 2 }}>{thanks.line}</p>
      <div className="sign reveal" style={{ '--i': 3 }}>
        <strong>{participant.name}</strong>
        <span>{participant.designation}</span>
        <span>{participant.organisation}</span>
      </div>
      <p className="credit">{event.photoCredit}</p>
    </div>
  )
}

// Order here defines navigation order and the table of contents.
// bg: 'photo' shows the Tokyo photograph behind the slide.
export const slides = [
  { id: 'cover', title: 'Cover', component: Cover, layout: 'cover', bg: 'photo' },
  { id: 'programme', title: 'Programme at a Glance', component: Programme },
  { id: 'ai', title: 'AI and Agentic Testing', component: AiTesting },
  { id: 'trust', title: 'Trust and Verification', component: Verification },
  { id: 'practices', title: 'Practices and Perspectives', component: Perspectives },
  { id: 'takeaways', title: 'My Key Takeaways', component: Takeaways },
  { id: 'relevance', title: 'Application to GovTech', component: Relevance },
  { id: 'next', title: 'Proposed Next Steps', component: NextSteps },
  { id: 'conclusion', title: 'Conclusion', component: Conclusion },
  { id: 'thanks', title: 'Thank You', component: Thanks, layout: 'cover', bg: 'photo' },
]
