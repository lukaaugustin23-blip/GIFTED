import { useState, useEffect, useRef } from 'react'
import { List, X } from 'lucide-react'

export default function SectionNav({ sections }) {
  const [active, setActive] = useState(sections[0]?.id ?? '')
  const [mobileOpen, setMobileOpen] = useState(false)
  const mobileRef = useRef(null)

  useEffect(() => {
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
    )

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [sections])

  useEffect(() => {
    function handleClick(e) {
      if (mobileRef.current && !mobileRef.current.contains(e.target)) {
        setMobileOpen(false)
      }
    }
    if (mobileOpen) document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [mobileOpen])

  function scrollTo(id) {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMobileOpen(false)
  }

  if (sections.length < 2) return null

  return (
    <>
      {/* Desktop: fixed right-side dot nav */}
      <nav
        className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-3 items-end"
        aria-label="Section navigation"
      >
        {sections.map((s) => {
          const isActive = active === s.id
          return (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className="group flex items-center gap-2.5 cursor-pointer focus:outline-none"
              aria-label={`Jump to ${s.label}`}
            >
              <span
                className={`text-[11px] font-medium transition-all duration-200 whitespace-nowrap ${
                  isActive ? 'text-brand-600 opacity-100' : 'text-stone-400 opacity-0 group-hover:opacity-100'
                }`}
              >
                {s.label}
              </span>
              <span
                className={`block rounded-full transition-all duration-200 flex-shrink-0 ${
                  isActive
                    ? 'w-2.5 h-2.5 bg-brand-500 shadow-sm'
                    : 'w-1.5 h-1.5 bg-stone-300 group-hover:bg-brand-300 group-hover:w-2 group-hover:h-2'
                }`}
              />
            </button>
          )
        })}
      </nav>

      {/* Mobile/tablet: floating FAB bottom-right */}
      <div ref={mobileRef} className="xl:hidden fixed bottom-6 right-5 z-40">
        {mobileOpen && (
          <div className="absolute bottom-14 right-0 bg-white rounded-2xl shadow-xl border border-stone-100 p-2 min-w-[180px] overflow-hidden">
            {sections.map((s) => {
              const isActive = active === s.id
              return (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-[13px] font-medium transition-colors duration-150 cursor-pointer flex items-center gap-2.5 focus:outline-none ${
                    isActive
                      ? 'bg-brand-50 text-brand-700'
                      : 'text-stone-600 hover:bg-stone-50 hover:text-stone-900'
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${isActive ? 'bg-brand-500' : 'bg-stone-300'}`}
                  />
                  {s.label}
                </button>
              )
            })}
          </div>
        )}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="w-11 h-11 rounded-full bg-brand-600 hover:bg-brand-700 text-white shadow-lg flex items-center justify-center cursor-pointer transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
          aria-label="Toggle section navigation"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={18} /> : <List size={18} />}
        </button>
      </div>
    </>
  )
}
