import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, List, Maximize, Minimize, X } from 'lucide-react'
import { slides } from './slides'
import { event } from './data/content'

const clamp = n => Math.max(0, Math.min(slides.length - 1, n))
const fromHash = () => {
  const n = parseInt(window.location.hash.replace('#', ''), 10)
  return Number.isNaN(n) ? 0 : clamp(n - 1)
}

export default function App() {
  const [index, setIndex] = useState(fromHash)
  const [dir, setDir] = useState(1)
  const [tocOpen, setTocOpen] = useState(false)
  const [full, setFull] = useState(false)
  const stage = useRef(null)

  // Only show the photo (and its credit) if the image file actually loads.
  useEffect(() => {
    const img = new Image()
    img.onload = () => document.body.classList.add('photo-ok')
    img.src = `${import.meta.env.BASE_URL}${event.photo}`
  }, [])
  const touch = useRef(null)

  const go = useCallback(n => {
    setIndex(cur => {
      const next = clamp(typeof n === 'function' ? n(cur) : n)
      if (next !== cur) setDir(next > cur ? 1 : -1)
      return next
    })
  }, [])

  const toggleFull = useCallback(() => {
    if (document.fullscreenElement) document.exitFullscreen?.()
    else document.documentElement.requestFullscreen?.().catch(() => {})
  }, [])

  // keep URL hash and document title in sync
  useEffect(() => {
    window.history.replaceState(null, '', `#${index + 1}`)
    document.title = `${slides[index].title} · Tokyo Test Fest 2026 Report`
    stage.current?.scrollTo(0, 0)
  }, [index])

  useEffect(() => {
    const onHash = () => go(fromHash())
    const onFs = () => setFull(!!document.fullscreenElement)
    window.addEventListener('hashchange', onHash)
    document.addEventListener('fullscreenchange', onFs)
    return () => {
      window.removeEventListener('hashchange', onHash)
      document.removeEventListener('fullscreenchange', onFs)
    }
  }, [go])

  useEffect(() => {
    const onKey = e => {
      if (e.metaKey || e.ctrlKey || e.altKey) return
      switch (e.key) {
        case 'ArrowRight': case 'PageDown': go(i => i + 1); break
        case 'ArrowLeft': case 'PageUp': go(i => i - 1); break
        case 'Home': go(0); break
        case 'End': go(slides.length - 1); break
        case 'f': case 'F': toggleFull(); break
        case 't': case 'T': setTocOpen(o => !o); break
        case 'Escape': setTocOpen(false); break
        default: return
      }
      e.preventDefault()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [go, toggleFull])

  const Slide = slides[index].component
  const isCover = slides[index].layout === 'cover'

  return (
    <div className="app">
      <div className="bg" aria-hidden="true"><i /><i /><i /></div>
      <div className={`photo-bg ${slides[index].bg === 'photo' ? 'on' : ''}`} aria-hidden="true"
        style={{ backgroundImage: `url(${import.meta.env.BASE_URL}${event.photo})` }} />

      <header className="topbar">
        <button className="brand" onClick={() => go(0)} aria-label="Go to cover">
          <span className="logo">TTF</span><span>Tokyo Test Fest 2026</span>
        </button>
        <div className="top-actions">
          <button className="icon-btn" onClick={() => setTocOpen(true)} aria-label="Open table of contents (T)" title="Contents (T)"><List size={18} /></button>
          <button className="icon-btn" onClick={toggleFull} aria-label={full ? 'Exit full screen (F)' : 'Enter full screen (F)'} title="Full screen (F)">
            {full ? <Minimize size={18} /> : <Maximize size={18} />}
          </button>
        </div>
      </header>

      <main className="stage" ref={stage} onTouchStart={e => (touch.current = e.touches[0].clientX)}
        onTouchEnd={e => {
          if (touch.current == null) return
          const dx = e.changedTouches[0].clientX - touch.current
          touch.current = null
          if (Math.abs(dx) > 60) go(i => i + (dx < 0 ? 1 : -1))
        }}>
        <section key={index} className={`slide ${isCover ? 'is-cover' : ''} ${slides[index].bg === 'photo' ? 'on-photo' : ''} dir-${dir > 0 ? 'fwd' : 'back'}`}
          aria-label={`Slide ${index + 1} of ${slides.length}: ${slides[index].title}`}>
          <Slide />
        </section>
      </main>

      <footer className="controls">
        <button className="nav-btn" onClick={() => go(i => i - 1)} disabled={index === 0} aria-label="Previous slide"><ChevronLeft size={20} /> <span>Prev</span></button>
        <div className="progress">
          <div className="dots" role="tablist" aria-label="Slides">
            {slides.map((s, i) => (
              <button key={s.id} role="tab" aria-selected={i === index} aria-label={`Slide ${i + 1}: ${s.title}`}
                className={`dot ${i === index ? 'on' : i < index ? 'done' : ''}`} onClick={() => go(i)} />
            ))}
          </div>
          <span className="count">{index + 1} / {slides.length} · {slides[index].title}</span>
        </div>
        <button className="nav-btn" onClick={() => go(i => i + 1)} disabled={index === slides.length - 1} aria-label="Next slide"><span>Next</span> <ChevronRight size={20} /></button>
      </footer>
      <div className="bar" aria-hidden="true"><div style={{ width: `${((index + 1) / slides.length) * 100}%` }} /></div>

      {tocOpen && (
        <div className="toc-overlay" onClick={() => setTocOpen(false)}>
          <nav className="toc" aria-label="Table of contents" onClick={e => e.stopPropagation()}>
            <div className="toc-head"><span>Contents</span>
              <button className="icon-btn" onClick={() => setTocOpen(false)} aria-label="Close contents"><X size={18} /></button>
            </div>
            <ol>
              {slides.map((s, i) => (
                <li key={s.id}>
                  <button className={i === index ? 'current' : ''} onClick={() => { go(i); setTocOpen(false) }}>
                    <span className="toc-n">{String(i + 1).padStart(2, '0')}</span>{s.title}
                  </button>
                </li>
              ))}
            </ol>
            <p className="toc-hint">← → navigate · F full screen · T contents · Esc close</p>
          </nav>
        </div>
      )}
    </div>
  )
}
