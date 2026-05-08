import { PackageSearch, Package, Plane } from 'lucide-react'

const steps = [
  {
    icon: PackageSearch,
    step: '01',
    title: 'We Collect',
    description:
      'We run supply drives at schools, community centers, and online. Every donated pencil, notebook, and crayon is counted and sorted by volunteers.',
    color: 'bg-brand-50 text-brand-600',
    border: 'border-brand-200',
  },
  {
    icon: Package,
    step: '02',
    title: 'We Pack',
    description:
      'Our team carefully packs supplies into boxes destined for Philippine classrooms. Each box is labeled and tracked so we know exactly where every donation ends up.',
    color: 'bg-forest-50 text-forest-700',
    border: 'border-forest-200',
  },
  {
    icon: Plane,
    step: '03',
    title: 'We Deliver',
    description:
      'Boxes ship directly to schools across the Philippines. Teachers distribute supplies to students who need them most — hands that were empty now hold pencils.',
    color: 'bg-amber-50 text-amber-700',
    border: 'border-amber-200',
  },
]

export default function HowItWorks() {
  return (
    <section id="the-process" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-16 md:mb-20">
          <span className="section-tag">The Process</span>
          <h2 className="section-heading mb-4">
            Simple mission. Real results.
          </h2>
          <p className="section-body max-w-xl mx-auto">
            From a cardboard box in someone's garage to classrooms across the Pacific —
            here's how we make it happen.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10 relative">
          <div className="hidden md:block absolute top-14 left-[calc(16.7%+2rem)] right-[calc(16.7%+2rem)] h-px bg-gradient-to-r from-brand-200 via-forest-200 to-amber-200" />

          {steps.map((s) => {
            const Icon = s.icon
            return (
              <div key={s.step} className="relative flex flex-col items-center text-center group">
                <div className={`relative w-20 h-20 rounded-2xl ${s.color} border ${s.border} flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform duration-200`}>
                  <Icon size={32} strokeWidth={1.5} />
                  <span className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-stone-900 text-white text-xs font-bold flex items-center justify-center">
                    {s.step}
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-stone-900 mb-3">{s.title}</h3>
                <p className="text-stone-600 leading-relaxed text-[15px]">{s.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
