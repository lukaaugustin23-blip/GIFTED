import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const pages = [
  { label: 'Home', to: '/' },
  { label: 'Our Story', to: '/our-story' },
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'Impact', to: '/impact' },
  { label: 'Get Involved', to: '/get-involved' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', handler, { passive: true })
    handler()
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  const transparent = isHome && !scrolled
  const textColor = transparent ? 'text-white/90' : 'text-stone-700'
  const activeColor = transparent ? 'text-brand-300' : 'text-brand-600'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        transparent ? 'bg-transparent' : 'bg-white/97 backdrop-blur-sm shadow-sm border-b border-stone-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          <Link
            to="/"
            className="flex items-baseline gap-2.5 focus:outline-none focus:ring-2 focus:ring-brand-500 rounded"
            aria-label="GIFTED home"
          >
            <span className={`font-serif text-xl font-bold tracking-tight transition-colors duration-300 ${transparent ? 'text-white' : 'text-stone-900'}`}>
              GIFTED
            </span>
            <span className={`hidden sm:block text-[10px] font-semibold uppercase tracking-widest transition-colors duration-300 ${transparent ? 'text-white/50' : 'text-stone-400'}`}>
              Global Initiative For Thorough Education
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Page navigation">
            {pages.map((p) => (
              <NavLink
                key={p.to}
                to={p.to}
                end={p.to === '/'}
                className={({ isActive }) =>
                  `relative text-[13.5px] font-medium px-3.5 py-2 rounded-lg transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-500 ${
                    isActive
                      ? `${activeColor} font-semibold`
                      : `${textColor} hover:text-brand-500`
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {p.label}
                    {isActive && (
                      <span className={`absolute bottom-1 left-3.5 right-3.5 h-0.5 rounded-full ${transparent ? 'bg-brand-300' : 'bg-brand-500'}`} />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/donate"
              className="hidden lg:inline-flex btn-primary text-[13.5px] py-2 px-5"
            >
              Donate
            </Link>
            <button
              className={`lg:hidden p-2 rounded-md cursor-pointer transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-500 ${
                transparent ? 'text-white hover:bg-white/10' : 'text-stone-700 hover:bg-stone-100'
              }`}
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-stone-100 shadow-lg">
          <nav className="max-w-7xl mx-auto px-5 py-4 flex flex-col gap-1" aria-label="Mobile navigation">
            {pages.map((p) => (
              <NavLink
                key={p.to}
                to={p.to}
                end={p.to === '/'}
                className={({ isActive }) =>
                  `py-3 px-3 text-[15px] font-medium rounded-lg cursor-pointer transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-500 ${
                    isActive
                      ? 'text-brand-600 bg-brand-50 font-semibold'
                      : 'text-stone-700 hover:bg-stone-50 hover:text-brand-600'
                  }`
                }
              >
                {p.label}
              </NavLink>
            ))}
            <Link
              to="/donate"
              className="btn-primary mt-2 justify-center"
            >
              Donate
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
