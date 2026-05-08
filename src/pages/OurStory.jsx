import { ShieldCheck, Eye, Heart, Globe } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionNav from '../components/SectionNav'
import Mission from '../components/Mission'
import Team from '../components/Team'

const SECTIONS = [
  { id: 'page-hero', label: 'Overview' },
  { id: 'problem', label: 'The Problem' },
  { id: 'our-story', label: 'Our Origin' },
  { id: 'founders', label: 'The Team' },
  { id: 'board', label: 'The Board' },
  { id: 'values', label: 'Values' },
]

const boardMembers = [
  {
    name: 'Michael',
    role: 'Board Member',
    initials: 'M',
    note: 'Supports organizational strategy and governance.',
  },
  {
    name: 'John Hall',
    role: 'Board Member',
    initials: 'JH',
    note: 'Advises on outreach, partnerships, and community relations.',
  },
  {
    name: '[Name] — Florida',
    role: 'Board Member',
    initials: 'FL',
    note: 'Leads regional coordination and donor engagement in Florida.',
  },
]

const values = [
  {
    icon: Eye,
    title: 'Transparency',
    body: 'We track every box, publish every shipment, and tell you exactly where your money goes. No vague promises.',
  },
  {
    icon: Heart,
    title: 'Impact',
    body: "We measure success in supplies delivered and students reached — not dollars raised or followers gained.",
  },
  {
    icon: Globe,
    title: 'Accessibility',
    body: 'Education belongs to every child, regardless of geography or circumstance. That is the only principle we operate by.',
  },
  {
    icon: ShieldCheck,
    title: 'Accountability',
    body: 'GIFTED is a registered nonprofit. We answer to our donors, our board, and the students we serve.',
  },
]

function PageHero() {
  return (
    <section id="page-hero" className="pt-28 pb-16 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="section-tag">Our Story</span>
          <h1 className="font-serif text-5xl md:text-6xl text-slate-900 font-bold leading-tight mb-5">
            Three students.<br />
            <em className="text-brand-600">One idea.</em>
          </h1>
          <p className="text-slate-500 text-xl leading-relaxed mb-4 max-w-xl">
            <strong className="text-slate-700 font-semibold">Our mission:</strong> GIFTEd's mission is to bridge educational inequities across the globe by fundraising, organizing events, creating community partnerships, and directing resources to under-resourced schools and student populations internationally, beginning with connections to the Philippines and other communities in need.

          </p>
        </div>
      </div>
    </section>
  )
}

function Problem() {
  return (
    <section id="problem" className="py-16 md:py-20 bg-cream-50 border-y border-cream-200">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <span className="section-tag">The Problem</span>
            <h2 className="font-serif text-3xl md:text-4xl text-slate-900 font-bold leading-snug mb-5">
              Millions of children start school with nothing.
            </h2>
            <p className="text-slate-600 text-[17px] leading-relaxed mb-4">
              In the Philippines, underfunded public schools serve students who cannot afford basic supplies. No pencils. No notebooks. No crayons.
            </p>
            <p className="text-slate-500 text-base leading-relaxed">
              Teachers spend their own salaries filling the gap. Parents skip meals to buy a single notebook. Children share one pencil between four.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { stat: '23M+', label: 'Students in the Philippine school system' },
              { stat: '1 in 4', label: 'Students in public schools lack basic learning materials' },
              { stat: 'Very limited', label: 'Some families spend only a few dollars per child on school supplies' },
              { stat: '0', label: 'Reasons a child should go without a pencil' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl border border-cream-200 p-5">
                <div className="font-serif text-3xl font-bold text-brand-600 leading-none mb-1">{item.stat}</div>
                <div className="text-slate-500 text-xs leading-snug">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Board() {
  return (
    <section id="board" className="py-20 md:py-28 bg-cream-50">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14">
          <span className="section-tag">The Board</span>
          <h2 className="section-heading mb-4">Guided by experience.</h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto leading-relaxed">
            Our board provides strategic oversight and the wisdom that comes from decades of community leadership.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
          {boardMembers.map((member) => (
            <div key={member.name} className="bg-white rounded-2xl border border-cream-200 p-7 text-center hover:border-brand-200 hover:shadow-sm transition-all duration-200">
              <div className="w-12 h-12 rounded-full bg-slate-100 border-2 border-slate-200 flex items-center justify-center mx-auto mb-4">
                <span className="font-serif text-sm font-bold text-slate-600">{member.initials}</span>
              </div>
              <h3 className="font-serif text-lg font-bold text-slate-900 mb-1">{member.name}</h3>
              <p className="text-brand-600 text-xs font-semibold uppercase tracking-wide mb-3">{member.role}</p>
              <p className="text-slate-500 text-sm leading-relaxed">{member.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Values() {
  return (
    <section id="values" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14">
          <span className="section-tag">What We Stand For</span>
          <h2 className="section-heading mb-3">Our values.</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v) => {
            const Icon = v.icon
            return (
              <div key={v.title} className="bg-cream-50 rounded-2xl border border-cream-200 p-7 hover:border-brand-200 hover:shadow-sm transition-all duration-200">
                <div className="w-10 h-10 bg-gold-50 rounded-xl flex items-center justify-center mb-4">
                  <Icon size={18} className="text-gold-500" strokeWidth={1.75} />
                </div>
                <h3 className="font-semibold text-slate-900 text-base mb-2">{v.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{v.body}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-14 text-center">
          <p className="text-slate-500 text-base mb-5">Ready to make a difference?</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/donate" className="btn-primary px-8">Donate Now</Link>
            <Link to="/get-involved" className="btn-outline px-8">Get Involved</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function OurStory() {
  return (
    <>
      <SectionNav sections={SECTIONS} />
      <PageHero />
      <Problem />
      <Mission />
      <Team />
      <Board />
      <Values />
    </>
  )
}
