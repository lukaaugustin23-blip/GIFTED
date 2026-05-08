import { Link } from 'react-router-dom'
import { DollarSign, Package, Truck, CheckCircle2, Pencil, BookOpen, Ruler, Palette, Scissors, Notebook, Laptop, Tablet, Headphones, Check, X, ArrowRight } from 'lucide-react'
import SectionNav from '../components/SectionNav'

const SECTIONS = [
  { id: 'page-hero', label: 'Overview' },
  { id: 'the-process', label: 'The Process' },
  { id: 'supply-selection', label: 'Supply Selection' },
  { id: 'what-we-collect', label: 'What We Accept' },
]

const processSteps = [
  {
    icon: DollarSign,
    n: '01',
    title: 'Funding',
    body: 'Donations and supply drives from individuals, schools, and organizations fund every shipment.',
    color: 'bg-brand-50 text-brand-600 border-brand-200',
  },
  {
    icon: Package,
    n: '02',
    title: 'Sourcing',
    body: 'We purchase or collect new school supplies and refurbished tech gear based on what partner schools request.',
    color: 'bg-green-50 text-green-700 border-green-200',
  },
  {
    icon: Truck,
    n: '03',
    title: 'Distribution',
    body: 'Boxes are packed, labeled, and shipped directly to partner schools across the Philippines.',
    color: 'bg-amber-50 text-amber-700 border-amber-200',
  },
  {
    icon: CheckCircle2,
    n: '04',
    title: 'Tracking',
    body: 'Each delivery is confirmed by school partners. We publish what was sent, to whom, and when.',
    color: 'bg-purple-50 text-purple-700 border-purple-200',
  },
]

const schoolSupplies = [
  { icon: Pencil, label: 'Pencils & Pens' },
  { icon: BookOpen, label: 'Notebooks & Journals' },
  { icon: Ruler, label: 'Rulers & Geometry Sets' },
  { icon: Palette, label: 'Crayons & Colored Pencils' },
  { icon: Scissors, label: 'Scissors & Glue' },
  { icon: Notebook, label: 'Folders & Binders' },
]

const techSupplies = [
  { icon: Laptop, label: 'Chromebooks & Laptops', note: 'Tested and wiped' },
  { icon: Tablet, label: 'Tablets & iPads', note: 'Refurbished, case included' },
  { icon: Headphones, label: 'Headphones & Earbuds', note: 'New or gently used' },
]

const criteria = [
  { label: 'New or gently used only', ok: true },
  { label: 'Functional and clean', ok: true },
  { label: 'Age-appropriate (K–6)', ok: true },
  { label: 'Tech devices must power on', ok: true },
  { label: 'Broken or non-functional items', ok: false },
  { label: 'Heavily damaged supplies', ok: false },
]

function PageHero() {
  return (
    <section id="page-hero" className="pt-28 pb-16 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="section-tag">How It Works</span>
          <h1 className="font-serif text-5xl md:text-6xl text-slate-900 font-bold leading-tight mb-5">
            From your hands<br />
            <em className="text-brand-600">to theirs.</em>
          </h1>
          <p className="text-slate-500 text-xl leading-relaxed">
            The path from a donated crayon to a Filipino child's desk is shorter than you think. Here's exactly how it happens.
          </p>
        </div>
      </div>
    </section>
  )
}

function TheProcess() {
  return (
    <section id="the-process" className="py-20 md:py-28 bg-cream-50">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14">
          <span className="section-tag">The Process</span>
          <h2 className="section-heading mb-3">Four steps. Real results.</h2>
        </div>

        {/* Horizontal flow — desktop */}
        <div className="hidden md:grid grid-cols-4 gap-0 relative mb-16">
          {/* Connector line */}
          <div className="absolute top-8 left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] h-px bg-slate-200 z-0" />

          {processSteps.map((s) => {
            const Icon = s.icon
            return (
              <div key={s.n} className="relative flex flex-col items-center text-center px-4 z-10">
                <div className={`w-16 h-16 rounded-2xl border flex items-center justify-center mb-5 bg-white shadow-sm ${s.color}`}>
                  <Icon size={24} strokeWidth={1.75} />
                </div>
                <span className="text-brand-600 font-bold text-xs uppercase tracking-widest mb-1">{s.n}</span>
                <h3 className="font-semibold text-slate-900 text-base mb-2">{s.title}</h3>
                <p className="text-slate-500 text-[13px] leading-relaxed">{s.body}</p>
              </div>
            )
          })}
        </div>

        {/* Vertical stack — mobile */}
        <div className="md:hidden flex flex-col gap-5 mb-12">
          {processSteps.map((s) => {
            const Icon = s.icon
            return (
              <div key={s.n} className={`flex gap-4 items-start bg-white rounded-2xl border p-5 ${s.color.split(' ').filter(c => c.startsWith('border')).join(' ')}`}>
                <div className={`w-11 h-11 rounded-xl border flex items-center justify-center flex-shrink-0 ${s.color}`}>
                  <Icon size={20} strokeWidth={1.75} />
                </div>
                <div>
                  <span className="text-brand-600 font-bold text-xs uppercase tracking-widest">{s.n} — {s.title}</span>
                  <p className="text-slate-500 text-sm leading-relaxed mt-1">{s.body}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <Link to="/impact" className="inline-flex items-center gap-2 text-brand-600 font-semibold text-sm hover:gap-3 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-500 rounded">
            See our impact <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  )
}

function SupplySelection() {
  return (
    <section id="supply-selection" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14">
          <span className="section-tag">Supply Selection</span>
          <h2 className="section-heading mb-4">What we send — and why</h2>
          <p className="text-slate-500 text-lg max-w-lg mx-auto leading-relaxed">
            Our school partners tell us exactly what students need. We collect and ship based on their guidance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-12">
          <div>
            <h3 className="font-semibold text-slate-800 text-base mb-4 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center text-xs font-bold flex-shrink-0">S</span>
              School Supplies
            </h3>
            <div className="grid grid-cols-2 gap-2.5">
              {schoolSupplies.map((s) => {
                const Icon = s.icon
                return (
                  <div key={s.label} className="bg-cream-50 rounded-xl p-3.5 flex items-center gap-3 border border-cream-200">
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0 border border-cream-200">
                      <Icon size={14} className="text-brand-600" strokeWidth={2} />
                    </div>
                    <span className="text-slate-700 text-sm font-medium">{s.label}</span>
                  </div>
                )
              })}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-slate-800 text-base mb-4 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-xs font-bold flex-shrink-0">T</span>
              Tech Gear
            </h3>
            <div className="flex flex-col gap-2.5 mb-5">
              {techSupplies.map((s) => {
                const Icon = s.icon
                return (
                  <div key={s.label} className="bg-cream-50 rounded-xl p-3.5 flex items-center gap-3 border border-cream-200">
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0 border border-cream-200">
                      <Icon size={14} className="text-amber-600" strokeWidth={2} />
                    </div>
                    <div>
                      <div className="text-slate-700 text-sm font-medium">{s.label}</div>
                      <div className="text-slate-400 text-xs">{s.note}</div>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 text-sm text-amber-800 leading-relaxed">
              All tech devices are tested, wiped, and verified before shipping.
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-slate-800 text-base mb-4">Acceptance criteria</h3>
          <div className="grid sm:grid-cols-2 gap-2.5 max-w-xl">
            {criteria.map((c, i) => (
              <div key={i} className={`rounded-xl px-4 py-3 flex items-center gap-3 text-sm border ${c.ok ? 'bg-green-50 border-green-100 text-green-800' : 'bg-danger-50 border-danger-100 text-danger-700'}`}>
                {c.ok
                  ? <Check size={14} className="text-green-600 flex-shrink-0" strokeWidth={2.5} />
                  : <X size={14} className="text-danger-400 flex-shrink-0" strokeWidth={2.5} />
                }
                {c.label}
              </div>
            ))}
          </div>
          <p className="text-slate-400 text-sm mt-5">
            Not sure if your item qualifies?{' '}
            <a href="mailto:hello@gifted-education.org" className="text-brand-600 hover:underline cursor-pointer">Email us</a>
          </p>
        </div>
      </div>
    </section>
  )
}

function WhatWeCollect() {
  return (
    <section id="what-we-collect" className="py-20 md:py-28 bg-cream-50">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-12">
          <span className="section-tag">The Logistics</span>
          <h2 className="section-heading mb-3">Behind every box</h2>
          <p className="text-slate-500 text-lg max-w-lg mx-auto leading-relaxed">
            Packing and shipping supplies internationally takes coordination. Here's what the process looks like in practice.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {[
            {
              title: 'Collection drives',
              body: 'Donors drop off supplies at labeled collection boxes. We run drives at schools, community centers, and online.',
              img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
              alt: 'Supply collection drive',
            },
            {
              title: 'Sorting & packing',
              body: 'Every item is counted, sorted by type, and packed into labeled shipping boxes. Tech gear is tested before packing.',
              img: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
              alt: 'Sorting and packing school supplies',
            },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-2xl overflow-hidden border border-cream-200 shadow-sm">
              {/* TODO: Replace with actual GIFTED logistics photos */}
              <div className="h-44 overflow-hidden">
                <img src={item.img} alt={item.alt} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-6">
                <h4 className="font-semibold text-slate-900 text-base mb-2">{item.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function HowItWorksPage() {
  return (
    <>
      <SectionNav sections={SECTIONS} />
      <PageHero />
      <TheProcess />
      <SupplySelection />
      <WhatWeCollect />
    </>
  )
}
