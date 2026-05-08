import { Heart, Mail, Instagram, Twitter } from 'lucide-react'
import { Link } from 'react-router-dom'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Our Story', to: '/our-story' },
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'Impact', to: '/impact' },
  { label: 'Get Involved', to: '/get-involved' },
  { label: 'Donate', to: '/donate' },
]

const socials = [
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com' },
  { icon: Twitter, label: 'Twitter / X', href: 'https://twitter.com' },
  { icon: Mail, label: 'Email', href: 'mailto:hello@gifted-education.org' },
]

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 pb-12 border-b border-stone-800">
          <div className="lg:col-span-1">
            <Link to="/" className="font-serif text-2xl font-bold text-white mb-1.5 block focus:outline-none focus:ring-2 focus:ring-brand-500 rounded">
              GIFTED
            </Link>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-brand-400 mb-4">
              Global Initiative For Thorough Education
            </p>
            <p className="text-stone-400 text-sm leading-relaxed mb-6">
              A nonprofit run by three students, collecting and shipping
              school supplies to children in the Philippines.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => {
                const Icon = s.icon
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith('http') ? '_blank' : undefined}
                    rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="w-9 h-9 rounded-full bg-stone-800 hover:bg-brand-600 text-stone-400 hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-500"
                    aria-label={s.label}
                  >
                    <Icon size={15} />
                  </a>
                )
              })}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-5 text-sm uppercase tracking-wide">Pages</h3>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-stone-400 hover:text-brand-400 text-sm transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-500 rounded"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-5 text-sm uppercase tracking-wide">Contact</h3>
            <p className="text-stone-400 text-sm leading-relaxed mb-4">
              Want to partner, volunteer, or host a supply drive? We'd love to hear from you.
            </p>
            <a
              href="mailto:hello@gifted-education.org"
              className="inline-flex items-center gap-2 text-brand-400 hover:text-brand-300 text-sm font-medium cursor-pointer transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-500 rounded"
            >
              <Mail size={14} />
              hello@gifted-education.org
            </a>
            <div className="mt-6">
              <Link to="/donate" className="btn-primary text-sm py-2.5 px-5">
                Donate Now
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-stone-500 text-xs">
          <p>© {new Date().getFullYear()} GIFTED. A registered nonprofit organization.</p>
          <p className="flex items-center gap-1">
            Made with <Heart size={10} className="fill-brand-500 text-brand-500 mx-0.5" /> by students, for students.
          </p>
        </div>
      </div>
    </footer>
  )
}
