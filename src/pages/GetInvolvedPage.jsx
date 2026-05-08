import { Gift, DollarSign, Truck, Mail, MapPin, Users, Building2, Bell, Share2, Instagram, Twitter, Link2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionNav from '../components/SectionNav'

const SECTIONS = [
  { id: 'page-hero', label: 'Overview' },
  { id: 'ways-to-help', label: 'Ways to Help' },
  { id: 'volunteer', label: 'Volunteer' },
  { id: 'partnerships', label: 'Partnerships' },
  { id: 'share', label: 'Share' },
  { id: 'mailing-list', label: 'Stay Updated' },
  { id: 'contact', label: 'Contact' },
]

const ways = [
  {
    icon: Gift,
    title: 'Donate Supplies',
    description:
      'Drop off pencils, notebooks, crayons, rulers, and other school basics at one of our collection drives. No supply is too small.',
    cta: 'Find a Drop-off',
    href: '#contact',
  },
  {
    icon: DollarSign,
    title: 'Make a Donation',
    description:
      "Can't make a drive? A cash donation lets us purchase exactly what's needed and cover the shipping costs to get it to Filipino classrooms.",
    cta: 'Donate Now',
    href: '/donate',
  },
  {
    icon: Truck,
    title: 'Host a Drive',
    description:
      'Bring GIFTED to your school, workplace, or community. We provide everything you need — boxes, signage, and a pickup when you\'re done.',
    cta: 'Get Started',
    href: 'mailto:hello@gifted-education.org',
  },
]

const volunteerRoles = [
  {
    title: 'Supply Drive Coordinator',
    description: 'Set up and run a drive at your school, workplace, or community center. We provide everything — you just organize.',
  },
  {
    title: 'Packing Volunteer',
    description: 'Join us at one of our packing sessions to sort, count, and box supplies before they ship.',
  },
  {
    title: 'Social Media Advocate',
    description: 'Share our mission online. The biggest thing we need is awareness — help us reach more donors.',
  },
  {
    title: 'School Liaison',
    description: 'Know a school in the Philippines? Help us connect with local administrators and coordinate drop-offs.',
  },
]

function PageHero() {
  return (
    <section id="page-hero" className="pt-28 pb-16 bg-cream-50">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="section-tag">Get Involved</span>
          <h1 className="font-serif text-5xl md:text-6xl text-stone-900 font-bold leading-tight mb-5">
            Show up for<br />
            <em className="text-brand-600">Filipino children.</em>
          </h1>
          <p className="text-stone-600 text-xl leading-relaxed">
            You don't need to travel to the Philippines to change a child's life.
            A pencil donated here becomes a future unlocked there.
          </p>
        </div>
      </div>
    </section>
  )
}

function WaysToHelp() {
  return (
    <section id="ways-to-help" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14">
          <span className="section-tag">Three Ways to Help</span>
          <h2 className="section-heading mb-3">
            A pencil costs cents.
            <br />
            <em className="text-brand-600">Its impact is priceless.</em>
          </h2>
          <p className="section-body max-w-lg mx-auto">
            Every single contribution — however small — goes directly to supplies
            in the hands of Filipino students.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {ways.map((w, i) => {
            const Icon = w.icon
            const isExternal = w.href.startsWith('mailto:')
            const isInternal = w.href.startsWith('/')
            return (
              <div key={i} className="bg-cream-50 rounded-2xl p-7 border border-stone-100 hover:border-brand-200 hover:shadow-md transition-all duration-200 flex flex-col">
                <div className="w-12 h-12 bg-white rounded-xl border border-stone-200 flex items-center justify-center mb-5 shadow-sm">
                  <Icon size={22} className="text-brand-600" strokeWidth={1.75} />
                </div>
                <h3 className="font-serif text-xl font-bold text-stone-900 mb-2">{w.title}</h3>
                <p className="text-stone-600 text-[15px] leading-relaxed flex-1 mb-6">{w.description}</p>
                {isInternal ? (
                  <Link to={w.href} className="btn-outline text-sm py-2.5 px-5 self-start">{w.cta}</Link>
                ) : (
                  <a href={w.href} className="btn-outline text-sm py-2.5 px-5 self-start">{w.cta}</a>
                )}
              </div>
            )
          })}
        </div>

        <div className="bg-brand-600 rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `radial-gradient(circle at 15% 85%, #fff 0%, transparent 45%), radial-gradient(circle at 85% 15%, #fff 0%, transparent 45%)`
          }} />
          <div className="relative z-10">
            <h3 className="font-serif text-3xl md:text-4xl text-white font-bold mb-4">
              Our next supply drive is<br />coming this summer.
            </h3>
            <p className="text-brand-100 text-base mb-8 max-w-md mx-auto">
              Sign up to be notified about drop-off locations, or reach out to partner with GIFTED directly.
            </p>
            <a
              href="#mailing-list"
              onClick={e => { e.preventDefault(); document.getElementById('mailing-list')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="inline-flex items-center justify-center gap-2 bg-white text-brand-700 hover:bg-brand-50 font-semibold px-8 py-3.5 rounded-full transition-colors duration-200 cursor-pointer shadow-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-600"
            >
              Get Notified
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Volunteer() {
  return (
    <section id="volunteer" className="py-20 md:py-28 bg-stone-50">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div>
            <span className="section-tag">Volunteer</span>
            <h2 className="section-heading mb-5">
              Give your time.<br />Change a life.
            </h2>
            <p className="section-body mb-6">
              GIFTED is entirely volunteer-powered. Whether you have an hour or a month,
              there's a way to plug in. Every role directly contributes to getting supplies
              into the hands of Filipino students.
            </p>
            <a
              href="mailto:hello@gifted-education.org?subject=Volunteer Interest"
              className="btn-primary self-start"
            >
              I want to volunteer
            </a>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {volunteerRoles.map((role, i) => (
              <div key={i} className="bg-white rounded-2xl border border-stone-100 p-6 hover:border-brand-200 hover:shadow-sm transition-all duration-200">
                <div className="w-8 h-8 rounded-full bg-brand-50 flex items-center justify-center mb-3">
                  <Users size={14} className="text-brand-600" strokeWidth={1.75} />
                </div>
                <h4 className="font-semibold text-stone-900 text-sm mb-2">{role.title}</h4>
                <p className="text-stone-500 text-xs leading-relaxed">{role.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Partnerships() {
  return (
    <section id="partnerships" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14">
          <span className="section-tag">Corporate & School Partnerships</span>
          <h2 className="section-heading mb-4">Partner with GIFTED</h2>
          <p className="section-body max-w-lg mx-auto">
            Organizations of all sizes can partner with us to amplify their community
            impact — and give their teams something meaningful to rally around.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Building2,
              title: 'Corporate Partnership',
              description: 'Host a supply drive in your office, match employee donations, or sponsor a full classroom kit. We provide branded materials and a donation summary.',
              cta: 'Partner with us',
            },
            {
              icon: Gift,
              title: 'School Partnership',
              description: 'Bring GIFTED to your school for a campus-wide drive. Students can earn service hours and learn firsthand about global educational equity.',
              cta: 'Bring us to your school',
            },
            {
              icon: Users,
              title: 'Community Organizations',
              description: 'Faith groups, civic organizations, and nonprofits can host drives and collect on behalf of their communities. We handle logistics.',
              cta: 'Get in touch',
            },
          ].map((p, i) => {
            const Icon = p.icon
            return (
              <div key={i} className="bg-cream-50 rounded-2xl border border-stone-100 p-7 flex flex-col hover:border-brand-200 hover:shadow-sm transition-all duration-200">
                <div className="w-12 h-12 bg-white rounded-xl border border-stone-200 flex items-center justify-center mb-5 shadow-sm">
                  <Icon size={20} className="text-brand-600" strokeWidth={1.75} />
                </div>
                <h3 className="font-serif text-xl font-bold text-stone-900 mb-3">{p.title}</h3>
                <p className="text-stone-600 text-[15px] leading-relaxed flex-1 mb-6">{p.description}</p>
                <a
                  href="mailto:hello@gifted-education.org"
                  className="btn-outline text-sm py-2.5 px-5 self-start"
                >
                  {p.cta}
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Share() {
  const shareOptions = [
    {
      icon: Instagram,
      label: 'Instagram',
      body: 'Share our story or a supply drive update with your followers.',
      href: 'https://instagram.com',
      color: 'text-pink-600',
    },
    {
      icon: Twitter,
      label: 'Twitter / X',
      body: 'Tweet about GIFTED. Even one post can reach the right donor.',
      href: 'https://twitter.com',
      color: 'text-sky-500',
    },
    {
      icon: Link2,
      label: 'Share a link',
      body: 'Copy our donation link and paste it anywhere — group chats, emails, Slack.',
      href: '/donate',
      color: 'text-brand-600',
    },
  ]

  return (
    <section id="share" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-12">
          <span className="section-tag">Spread the Word</span>
          <h2 className="section-heading mb-3">Share our mission.</h2>
          <p className="text-slate-500 text-lg max-w-lg mx-auto leading-relaxed">
            Awareness is free. A single post can bring in supplies for an entire classroom.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 max-w-3xl mx-auto">
          {shareOptions.map((opt) => {
            const Icon = opt.icon
            return (
              <a
                key={opt.label}
                href={opt.href}
                target={opt.href.startsWith('http') ? '_blank' : undefined}
                rel={opt.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="bg-cream-50 rounded-2xl border border-cream-200 p-6 hover:border-brand-200 hover:shadow-sm transition-all duration-200 cursor-pointer flex flex-col gap-3 focus:outline-none focus:ring-2 focus:ring-brand-500"
              >
                <Icon size={22} className={opt.color} strokeWidth={1.75} />
                <div>
                  <div className="font-semibold text-slate-900 text-sm mb-1">{opt.label}</div>
                  <div className="text-slate-500 text-xs leading-relaxed">{opt.body}</div>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function MailingList() {
  return (
    <section id="mailing-list" className="py-20 md:py-28 bg-brand-600 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle at 0% 100%, #fff 0%, transparent 50%), radial-gradient(circle at 100% 0%, #fff 0%, transparent 50%)`
      }} />
      <div className="relative z-10 max-w-2xl mx-auto px-5 sm:px-8 text-center">
        <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Bell size={24} className="text-white" strokeWidth={1.5} />
        </div>
        <span className="text-brand-200 text-sm font-semibold uppercase tracking-widest block mb-4">Stay Updated</span>
        <h2 className="font-serif text-4xl md:text-5xl text-white font-bold mb-5">
          Be the first to know.
        </h2>
        <p className="text-brand-100 text-lg leading-relaxed mb-10 max-w-md mx-auto">
          Drive dates, shipping updates, and impact reports — delivered directly to your inbox.
          No spam, ever. Unsubscribe anytime.
        </p>
        <form onSubmit={e => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 px-5 py-3.5 rounded-full text-stone-900 placeholder-stone-400 text-sm focus:outline-none focus:ring-2 focus:ring-white shadow-sm"
          />
          <button
            type="submit"
            className="bg-white text-brand-700 hover:bg-brand-50 font-semibold px-7 py-3.5 rounded-full transition-colors duration-200 cursor-pointer shadow-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-600 whitespace-nowrap"
          >
            Sign Me Up
          </button>
        </form>
        <p className="text-brand-200/60 text-xs mt-5">
          We respect your privacy. Your email is never sold or shared.
        </p>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-stone-50">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div>
            <span className="section-tag">Reach Out</span>
            <h2 className="section-heading mb-5">
              Questions? Ideas?<br />Let's talk.
            </h2>
            <p className="section-body mb-8">
              Whether you want to run a drive, make a large donation, partner with
              us, or just learn more — we read every message personally.
            </p>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:hello@gifted-education.org"
                className="flex items-center gap-3 text-stone-700 hover:text-brand-600 transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-500 rounded group"
              >
                <div className="w-10 h-10 bg-white rounded-xl border border-stone-200 flex items-center justify-center shadow-sm group-hover:border-brand-200 transition-colors duration-200">
                  <Mail size={17} className="text-stone-500 group-hover:text-brand-600 transition-colors" />
                </div>
                <span className="font-medium">hello@gifted-education.org</span>
              </a>
              <div className="flex items-center gap-3 text-stone-500">
                <div className="w-10 h-10 bg-white rounded-xl border border-stone-200 flex items-center justify-center shadow-sm">
                  <MapPin size={17} className="text-stone-400" />
                </div>
                <span className="text-[15px]">United States · Shipping to the Philippines</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-stone-100 p-8 shadow-sm">
            <h3 className="font-serif text-xl font-semibold text-stone-900 mb-6">Send us a message</h3>
            <form
              onSubmit={e => e.preventDefault()}
              className="flex flex-col gap-4"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1.5">
                  Your name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Jane Smith"
                  className="w-full border border-stone-200 rounded-xl px-4 py-3 text-stone-900 placeholder-stone-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition-shadow"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1.5">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="jane@example.com"
                  className="w-full border border-stone-200 rounded-xl px-4 py-3 text-stone-900 placeholder-stone-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition-shadow"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="I'd like to host a drive at my school..."
                  className="w-full border border-stone-200 rounded-xl px-4 py-3 text-stone-900 placeholder-stone-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition-shadow resize-none"
                />
              </div>
              <button
                type="submit"
                className="btn-primary justify-center mt-1"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function GetInvolvedPage() {
  return (
    <>
      <SectionNav sections={SECTIONS} />
      <PageHero />
      <WaysToHelp />
      <Volunteer />
      <Partnerships />
      <Share />
      <MailingList />
      <Contact />
    </>
  )
}
