import { Link } from 'react-router-dom'
import { ArrowRight, ArrowDown } from 'lucide-react'
import SectionNav from '../components/SectionNav'

const SECTIONS = [
  { id: 'hero', label: 'Top' },
  { id: 'what-we-do', label: 'What We Do' },
  { id: 'impact-preview', label: 'Impact' },
  { id: 'story-preview', label: 'Our Story' },
  { id: 'get-involved-preview', label: 'Get Involved' },
  { id: 'final-cta', label: 'Donate' },
]

const tickerItems = [
  '100% goes to supplies',
  'Student-led nonprofit',
  'Transparent impact',
  'Verified deliveries',
]

const steps = [
  { n: '1', title: 'We raise funds', body: 'Through donations, drives, and campaigns from people like you.' },
  { n: '2', title: 'We send the funds', body: 'your donatoins our snet to a board member based in the Philippines.' },
  { n: '3', title: 'Buy supplies locally', body: 'Our phillipino partners purchase supplies directly from local vendors and send it to the schools' },
]

const stats = [
  { value: '500+', label: 'Students helped' },
  { value: '2,500+', label: 'Supplies shipped' },
  { value: '15+', label: 'Schools reached' },
]

const involvedOptions = [
  { title: 'Donate', body: 'Every dollar goes directly to supplies and shipping.', to: '/donate', cta: 'Donate now' },
  { title: 'Volunteer', body: 'Join a supply drive, pack boxes, or spread the word.', to: '/get-involved', cta: 'Volunteer' },
  { title: 'Partner', body: 'Bring GIFTED to your school, business, or community.', to: '/get-involved', cta: 'Partner with us' },
]

function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* TODO: Replace with actual GIFTED photo of Filipino students */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=80')` }}
        role="img"
        aria-label="Filipino children learning in a classroom"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/75 via-slate-900/65 to-slate-900/80" />

      <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 text-center py-32">
        <p className="text-brand-300 text-xs font-semibold uppercase tracking-[0.2em] mb-6">
          Student-led nonprofit · Philippines
        </p>
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl text-white leading-[1.08] font-bold mb-6">
          Education is a right,<br />
          <em className="text-brand-300 not-italic">not a privilege.</em>
        </h1>
        <p className="text-white/70 text-lg md:text-xl max-w-lg mx-auto leading-relaxed mb-10 font-light">
          We ship basic school supplies to students in the Philippines all of which is 100% donated and 100% delivered.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/donate" className="btn-primary text-base px-10 py-4 shadow-lg">
            Donate Now
          </Link>
          <Link to="/our-story" className="btn-secondary text-base px-10 py-4">
            Learn More
          </Link>
        </div>
      </div>

      <a
        href="#what-we-do"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/80 transition-colors duration-200 cursor-pointer focus:outline-none"
        aria-label="Scroll down"
        onClick={e => { e.preventDefault(); document.getElementById('what-we-do')?.scrollIntoView({ behavior: 'smooth' }) }}
      >
        <ArrowDown size={22} className="animate-bounce" />
      </a>
    </section>
  )
}

const tickerDoubled = [...tickerItems, ...tickerItems]

function CredibilityStrip() {
  return (
    <div className="bg-charcoal-800 py-3 overflow-hidden" aria-hidden="true">
      <div className="flex animate-marquee whitespace-nowrap will-change-transform">
        {tickerDoubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 text-white/75 text-[11px] font-semibold uppercase tracking-[0.15em] px-10"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

function WhatWeDo() {
  return (
    <section id="what-we-do" className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: text */}
          <div>
            <span className="section-tag">How It Works</span>
            <h2 className="section-heading mb-8">Simple. Transparent. Direct.</h2>
            <ol className="space-y-6 mb-10">
              {steps.map((s) => (
                <li key={s.n} className="flex items-start gap-4">
                  <span className="font-serif text-3xl font-bold text-gold-200 leading-none w-8 shrink-0">{s.n}</span>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-base mb-0.5">{s.title}</h3>
                    <p className="text-slate-500 text-[14px] leading-relaxed">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 bg-brand-600 text-white hover:bg-brand-500 font-semibold text-sm px-6 py-3 rounded-full transition-colors duration-200 shadow-sm"
            >
              See the full process <ArrowRight size={14} />
            </Link>
          </div>

          {/* Right: photo */}
          <div className="rounded-2xl overflow-hidden aspect-[4/5] shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1473649085228-583485e6e4d7?auto=format&fit=crop&w=800&q=80"
              alt="Students in a rural classroom"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function ImpactPreview() {
  return (
    <section id="impact-preview" className="py-20 md:py-28 bg-cream-50">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="section-tag">Impact</span>
            <h2 className="section-heading mb-6">The numbers<br />speak for themselves.</h2>
            <div className="grid grid-cols-3 gap-5 mb-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-serif text-3xl md:text-4xl font-bold text-brand-600 leading-none mb-1">{s.value}</div>
                  <div className="text-slate-500 text-xs leading-snug">{s.label}</div>
                </div>
              ))}
            </div>
            <Link to="/impact" className="inline-flex items-center gap-2 text-brand-600 font-semibold text-sm hover:gap-3 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-500 rounded">
              View full impact <ArrowRight size={14} />
            </Link>
          </div>

          <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-lg">
            {/* TODO: Replace with actual GIFTED photo */}
            <img
              src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80"
              alt="Students receiving supplies in the Philippines"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function StoryPreview() {
  return (
    <section id="story-preview" className="py-20 md:py-28 bg-white">
      <div className="max-w-2xl mx-auto px-5 sm:px-8 text-center">
        <span className="section-tag">Our Story</span>
        <h2 className="section-heading mb-6">Started by students,<br />driven by purpose.</h2>
        <p className="text-slate-600 text-lg leading-relaxed mb-4">
          In 2026, Sean, Ruvi, and Luka co-founded GIFTED after learning that millions of Filipino children begin each school year without a single pencil.
        </p>
        <Link to="/our-story" className="inline-flex items-center gap-2 text-brand-600 font-semibold text-sm hover:gap-3 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-500 rounded">
          Read our story <ArrowRight size={14} />
        </Link>
      </div>
    </section>
  )
}

function GetInvolvedPreview() {
  return (
    <section id="get-involved-preview" className="py-20 md:py-28 bg-cream-50">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-12">
          <span className="section-tag">Get Involved</span>
          <h2 className="section-heading mb-3">Three ways to help.</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {involvedOptions.map((opt) => (
            <div key={opt.title} className="bg-white rounded-2xl p-7 border border-cream-200 hover:border-brand-200 hover:shadow-sm transition-all duration-200">
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">{opt.title}</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-6">{opt.body}</p>
              <Link to={opt.to} className="inline-flex items-center gap-1.5 text-brand-600 font-semibold text-sm hover:gap-2.5 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-500 rounded">
                {opt.cta} <ArrowRight size={13} />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/get-involved" className="btn-outline px-8 py-3">
            See all ways to help
          </Link>
        </div>
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section id="final-cta" className="py-24 md:py-32 bg-charcoal-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.07]"
        style={{ backgroundImage: `radial-gradient(ellipse at 0% 100%, #fff 0%, transparent 60%), radial-gradient(ellipse at 100% 0%, #fff 0%, transparent 60%)` }}
      />
      <div className="relative z-10 max-w-2xl mx-auto px-5 sm:px-8 text-center">
        <h2 className="font-serif text-4xl md:text-5xl text-white font-bold leading-tight mb-5">
          Be the reason a<br />student succeeds.
        </h2>
        <p className="text-cream-200 text-lg leading-relaxed mb-10 max-w-md mx-auto">
          A pencil costs cents. To a child who's never owned one, it's everything.
        </p>
        <Link to="/donate" className="inline-flex items-center justify-center gap-2 bg-brand-500 text-white hover:bg-brand-400 font-semibold px-10 py-4 rounded-full transition-colors duration-200 cursor-pointer shadow-md focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-2 focus:ring-offset-charcoal-800 text-base">
          Donate Now
        </Link>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <SectionNav sections={SECTIONS} />
      <Hero />
      <CredibilityStrip />
      <WhatWeDo />
      <ImpactPreview />
      <StoryPreview />
      <GetInvolvedPreview />
      <FinalCTA />
    </>
  )
}
