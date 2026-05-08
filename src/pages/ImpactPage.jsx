import { Clock, Package, School, MapPin, CalendarDays, Pencil, BookOpen, Palette, Truck, CheckCircle2, Circle, ArrowRight, PieChart } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionNav from '../components/SectionNav'
import ImpactStats from '../components/ImpactStats'

const SECTIONS = [
  { id: 'page-hero', label: 'Overview' },
  { id: 'by-the-numbers', label: 'By the Numbers' },
  { id: 'live-tracking', label: 'Live Tracking' },
  { id: 'what-we-shipped', label: 'What We Shipped' },
  { id: 'our-reach', label: 'Our Reach' },
  { id: 'milestones', label: 'Milestones' },
  { id: 'transparency', label: 'Where Money Goes' },
  { id: 'photo-gallery', label: 'Gallery' },
  { id: 'testimonials', label: 'Testimonials' },
]

const supplies = [
  { icon: Pencil, label: 'Pencils & Pens', count: '800+', description: 'The most-requested item in every drive' },
  { icon: BookOpen, label: 'Notebooks', count: '400+', description: 'Wide-ruled and composition books' },
  { icon: Palette, label: 'Crayons & Markers', count: '350+', description: 'Color sets for art and creative learning' },
  { icon: Package, label: 'Rulers & Erasers', count: '500+', description: 'Everyday classroom essentials' },
  { icon: School, label: 'Folders & Binders', count: '200+', description: 'Keeping schoolwork organized' },
  { icon: Package, label: 'Scissors & Glue', count: '250+', description: 'Craft supplies for project-based learning' },
]

const provinces = [
  { name: 'Metro Manila', schools: 4, note: 'Urban public elementary schools' },
  { name: 'Cavite', schools: 3, note: 'Rural community classrooms' },
  { name: 'Laguna', schools: 3, note: 'Partnered through local coordinators' },
  { name: 'Batangas', schools: 2, note: 'Remote barangay schools' },
  { name: 'Bulacan', schools: 2, note: 'Underserved public schools' },
  { name: 'Other Regions', schools: '1+', note: 'Growing as we expand our network' },
]

const milestones = [
  {
    year: '2022',
    title: 'GIFTED is founded',
    description: 'Sean, Ruvi, and Luka run their first supply drive from a garage in New Jersey, collecting 300+ supplies and packing their first two boxes.',
  },
  {
    year: '2022',
    title: 'First shipment reaches the Philippines',
    description: 'Two boxes of pencils, notebooks, and crayons land in Metro Manila and are distributed to 60 students at an underfunded public school.',
  },
  {
    year: '2023',
    title: 'School drives expand',
    description: 'GIFTED partners with three local schools to run on-campus collection drives, tripling their supply volume in a single semester.',
  },
  {
    year: '2023',
    title: '10 schools reached',
    description: 'The organization crosses 10 partner schools in the Philippines, spanning four provinces and multiple grade levels.',
  },
  {
    year: '2024',
    title: '2,000 supplies milestone',
    description: 'Cumulative supplies shipped pass 2,000 items — pencils, notebooks, crayons, rulers, and more — all funded and delivered by volunteers.',
  },
  {
    year: '2025',
    title: 'Community drives go statewide',
    description: 'Supply drives now run at community centers, libraries, and faith organizations across New Jersey and New York.',
  },
]

const trackingStages = [
  { label: 'Supplies Collected', detail: 'Drive completed · Spring 2025', done: true },
  { label: 'Sorted & Packed', detail: '14 boxes labeled and ready', done: true },
  { label: 'In Transit', detail: 'Shipped via air freight · Est. arrival June 2025', done: true, current: false },
  { label: 'Arrived in Philippines', detail: 'Cleared customs · Manila', done: false, current: true },
  { label: 'Distributed to Schools', detail: 'Pending · Cavite & Laguna', done: false },
]

function PageHero() {
  return (
    <section id="page-hero" className="pt-28 pb-16 relative overflow-hidden">
      {/* TODO: Replace with actual GIFTED photo of Filipino students receiving supplies */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1600&q=80')`,
        }}
        role="img"
        aria-label="Filipino children in a classroom"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-stone-900/80 to-stone-900/40" />
      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="text-brand-300 text-sm font-semibold uppercase tracking-widest mb-3 block">
            Our Impact
          </span>
          <h1 className="font-serif text-5xl md:text-6xl text-white font-bold leading-tight mb-5">
            Real children.<br />
            <em className="text-brand-400 not-italic">Real change.</em>
          </h1>
          <p className="text-white/75 text-xl leading-relaxed">
            Every statistic we share is a child who now has a pencil in their hand
            and a reason to believe someone, somewhere, cares about their future.
          </p>
        </div>
      </div>
    </section>
  )
}

function LiveTracking() {
  return (
    <section id="live-tracking" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div>
            <span className="section-tag">Live Updates</span>
            <h2 className="section-heading mb-5">Current shipment status</h2>
            <p className="section-body mb-6">
              We track every box from the moment it's packed to the moment it reaches
              a classroom. This is where our Spring 2025 shipment stands right now.
            </p>
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
              <span className="text-green-700 text-sm font-semibold">Live — last updated April 2025</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-4 top-4 bottom-4 w-px bg-stone-200" />
            <div className="flex flex-col gap-1">
              {trackingStages.map((stage, i) => (
                <div key={i} className={`relative pl-10 py-4 rounded-xl transition-colors ${stage.current ? 'bg-brand-50 border border-brand-100' : ''}`}>
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8">
                    {stage.done ? (
                      <CheckCircle2 size={20} className="text-forest-600" strokeWidth={1.75} />
                    ) : stage.current ? (
                      <div className="w-5 h-5 rounded-full border-2 border-brand-500 bg-white flex items-center justify-center">
                        <div className="w-2.5 h-2.5 rounded-full bg-brand-500 animate-pulse" />
                      </div>
                    ) : (
                      <Circle size={18} className="text-stone-300" strokeWidth={1.5} />
                    )}
                  </div>
                  <div className={`text-sm font-semibold ${stage.current ? 'text-brand-700' : stage.done ? 'text-stone-700' : 'text-stone-400'}`}>
                    {stage.label}
                  </div>
                  <div className={`text-xs mt-0.5 ${stage.current ? 'text-brand-500' : stage.done ? 'text-stone-400' : 'text-stone-300'}`}>
                    {stage.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function WhatWeShipped() {
  return (
    <section id="what-we-shipped" className="py-20 md:py-28 bg-stone-50">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14">
          <span className="section-tag">Supply Breakdown</span>
          <h2 className="section-heading mb-4">What we've shipped</h2>
          <p className="section-body max-w-lg mx-auto">
            Every box we send is packed by hand. Here's what's been inside them since 2022.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {supplies.map((s, i) => {
            const Icon = s.icon
            return (
              <div key={i} className="bg-white rounded-2xl border border-stone-100 p-6 flex items-start gap-4 hover:border-brand-200 hover:shadow-sm transition-all duration-200">
                <div className="w-11 h-11 bg-white rounded-xl border border-stone-200 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Icon size={20} className="text-brand-600" strokeWidth={1.75} />
                </div>
                <div>
                  <div className="font-serif text-2xl font-bold text-brand-600 leading-none mb-1">{s.count}</div>
                  <div className="font-semibold text-stone-900 text-sm mb-1">{s.label}</div>
                  <div className="text-stone-500 text-xs leading-snug">{s.description}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function OurReach() {
  return (
    <section id="our-reach" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div>
            <span className="section-tag">Where We Work</span>
            <h2 className="section-heading mb-5">Schools we've reached</h2>
            <p className="section-body mb-8">
              Our supplies have landed in public schools across the Philippines — many in
              areas where students go entire semesters without a single new pencil.
            </p>
            <div className="flex items-center gap-3 text-stone-500 text-sm mb-2">
              <MapPin size={15} className="text-brand-500 flex-shrink-0" />
              <span>15+ schools across 5+ provinces</span>
            </div>
            <div className="flex items-center gap-3 text-stone-500 text-sm">
              <School size={15} className="text-brand-500 flex-shrink-0" />
              <span>All public — no private schools</span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {provinces.map((p, i) => (
              <div key={i} className="bg-cream-50 rounded-xl border border-stone-100 px-5 py-4 flex items-center gap-4 hover:border-brand-200 hover:shadow-sm transition-all duration-200">
                <div className="w-9 h-9 rounded-full bg-brand-50 border border-brand-100 flex items-center justify-center flex-shrink-0">
                  <span className="font-serif text-sm font-bold text-brand-600">{p.schools}</span>
                </div>
                <div>
                  <div className="font-semibold text-stone-900 text-sm">{p.name}</div>
                  <div className="text-stone-500 text-xs">{p.note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Milestones() {
  return (
    <section id="milestones" className="py-20 md:py-28 bg-stone-50">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14">
          <span className="section-tag">Our Journey</span>
          <h2 className="section-heading mb-4">How we got here</h2>
          <p className="section-body max-w-lg mx-auto">
            From a single garage drive to classrooms across the Pacific — every step forward was taken by volunteers.
          </p>
        </div>

        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-5 top-2 bottom-2 w-px bg-stone-200 hidden sm:block" />
          <div className="flex flex-col gap-8">
            {milestones.map((m, i) => (
              <div key={i} className="relative sm:pl-16">
                <div className="hidden sm:flex absolute left-0 top-1 w-10 h-10 rounded-full bg-white border-2 border-brand-200 items-center justify-center shadow-sm">
                  <CalendarDays size={15} className="text-brand-600" strokeWidth={1.75} />
                </div>
                <div className="bg-white rounded-2xl border border-stone-100 p-6 hover:border-brand-200 hover:shadow-sm transition-all duration-200">
                  <span className="text-brand-600 font-bold text-xs uppercase tracking-widest mb-2 block">{m.year}</span>
                  <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">{m.title}</h3>
                  <p className="text-stone-600 text-[15px] leading-relaxed">{m.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Transparency() {
  const breakdown = [
    { label: 'School supplies', pct: 65, color: 'bg-brand-500' },
    { label: 'Tech gear', pct: 22, color: 'bg-green-500' },
    { label: 'Shipping & logistics', pct: 13, color: 'bg-amber-400' },
  ]

  return (
    <section id="transparency" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <span className="section-tag">Transparency</span>
            <h2 className="section-heading mb-5">Where your<br />money goes.</h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              Every dollar donated goes toward supplies, gear, and getting them to students. Zero goes to salaries, overhead, or administration.
            </p>

            <div className="flex flex-col gap-4">
              {breakdown.map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-slate-700 text-sm font-medium">{item.label}</span>
                    <span className="text-slate-900 text-sm font-bold">{item.pct}%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${item.color}`}
                      style={{ width: `${item.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-start gap-3 bg-brand-50 border border-brand-100 rounded-xl p-4">
              <PieChart size={16} className="text-brand-600 flex-shrink-0 mt-0.5" strokeWidth={1.75} />
              <p className="text-brand-700 text-sm leading-relaxed">
                GIFTED is a registered nonprofit. Detailed financial reports are available upon request.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {[
              { label: '$0', detail: 'Founder or staff salaries' },
              { label: '100%', detail: 'Of donations used for direct impact' },
              { label: 'Every box', detail: 'Tracked and confirmed by school partners' },
              { label: 'Annual', detail: 'Impact reports shared with all donors' },
            ].map((item, i) => (
              <div key={i} className="bg-cream-50 rounded-xl border border-cream-200 px-5 py-4 flex items-center gap-4">
                <div className="font-serif text-2xl font-bold text-brand-600 flex-shrink-0 w-20">{item.label}</div>
                <div className="text-slate-500 text-sm">{item.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function PhotoGallery() {
  const photos = [
    {
      src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
      alt: 'Students in a classroom — placeholder for GIFTED Philippines photos',
      caption: 'In the classroom',
    },
    {
      src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
      alt: 'Children learning — placeholder for GIFTED Philippines photos',
      caption: 'Learning together',
    },
    {
      src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80',
      alt: 'Children smiling — placeholder for GIFTED Philippines photos',
      caption: 'Smiles from the Philippines',
    },
    {
      src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
      alt: 'School supplies — placeholder for GIFTED supply photos',
      caption: 'Ready to ship',
    },
  ]

  return (
    <section id="photo-gallery" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-12">
          <span className="section-tag">Photo Gallery</span>
          <h2 className="section-heading mb-3">Impact in pictures</h2>
          <p className="section-body max-w-lg mx-auto">
            {/* TODO: Replace with actual GIFTED photos from the Philippines */}
            Photos from our supply drives and partner schools. Real children, real classrooms.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {photos.map((photo, i) => (
            <div key={i} className="group relative rounded-2xl overflow-hidden aspect-square">
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/40 transition-colors duration-300 flex items-end p-3">
                <span className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {photo.caption}
                </span>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-stone-400 text-xs mt-6">
          {/* TODO: Replace placeholders with actual GIFTED photos of Filipino children and classrooms */}
          Placeholder photos — real GIFTED photos coming soon.
        </p>
      </div>
    </section>
  )
}

function TestimonialsPlaceholder() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-cream-50">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-12">
          <span className="section-tag">Stories from the Philippines</span>
          <h2 className="section-heading mb-3">Testimonials</h2>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="bg-white rounded-3xl border-2 border-dashed border-stone-200 p-10 md:p-14 text-center">
            <div className="w-14 h-14 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock size={24} className="text-amber-500" strokeWidth={1.5} />
            </div>
            <h3 className="font-serif text-2xl text-stone-900 font-semibold mb-3">
              Testimonials coming soon
            </h3>
            <p className="text-stone-500 text-[15px] leading-relaxed">
              We are actively collecting stories and letters from teachers,
              parents, and students in the Philippines. As we receive them,
              we will share them here — unedited, in their own words.
            </p>
            <div className="mt-8 pt-7 border-t border-stone-100">
              <p className="text-stone-400 text-sm">
                Are you a teacher or school partner in the Philippines who has received GIFTED supplies?
                <br />
                <a
                  href="mailto:hello@gifted-education.org"
                  className="text-brand-600 hover:underline cursor-pointer font-medium"
                >
                  We'd love to hear from you.
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 text-center">
          <p className="text-stone-500 text-base mb-6">Want to help us reach even more classrooms?</p>
          <Link to="/get-involved" className="btn-primary px-8 py-3.5">
            Get Involved
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function ImpactPage() {
  return (
    <>
      <SectionNav sections={SECTIONS} />
      <PageHero />
      <div id="by-the-numbers">
        <ImpactStats />
      </div>
      <LiveTracking />
      <WhatWeShipped />
      <OurReach />
      <Milestones />
      <Transparency />
      <PhotoGallery />
      <TestimonialsPlaceholder />
    </>
  )
}
