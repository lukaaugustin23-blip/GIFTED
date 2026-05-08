import { Gift, Truck, DollarSign } from 'lucide-react'

const ways = [
  {
    icon: Gift,
    title: 'Donate Supplies',
    description: 'Drop off pencils, notebooks, crayons, rulers, and other school basics at our collection drives.',
  },
  {
    icon: DollarSign,
    title: 'Donate Money',
    description: 'Can\'t make a drive? A cash donation lets us purchase exactly what\'s needed and cover shipping costs.',
  },
  {
    icon: Truck,
    title: 'Host a Drive',
    description: 'Bring GIFTED to your school or workplace. We provide everything you need to run a supply drive.',
  },
]

export default function DonateCTA() {
  return (
    <section id="donate" className="py-20 md:py-32 bg-cream-100">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-16">
          <span className="section-tag">Get Involved</span>
          <h2 className="section-heading mb-4">
            A pencil costs cents.
            <br />
            <em className="text-brand-600">Its impact is priceless.</em>
          </h2>
          <p className="section-body max-w-xl mx-auto">
            There are three ways to help us get supplies into the hands of
            Filipino children. Every single one matters.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {ways.map((w, i) => {
            const Icon = w.icon
            return (
              <div
                key={i}
                className="bg-white rounded-2xl p-7 shadow-sm border border-stone-100 hover:border-brand-200 hover:shadow-md transition-all duration-200 cursor-default"
              >
                <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-5">
                  <Icon size={22} className="text-brand-600" strokeWidth={1.75} />
                </div>
                <h3 className="font-serif text-xl font-bold text-stone-900 mb-2">{w.title}</h3>
                <p className="text-stone-600 text-[15px] leading-relaxed">{w.description}</p>
              </div>
            )
          })}
        </div>

        <div className="bg-brand-600 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 10% 90%, #fff 0%, transparent 40%), radial-gradient(circle at 90% 10%, #fff 0%, transparent 40%)`
            }}
          />
          <div className="relative z-10">
            <div className="font-serif text-4xl md:text-5xl text-white font-bold mb-4 leading-tight">
              Our next supply drive is
              <br />
              coming this summer.
            </div>
            <p className="text-brand-100 text-lg mb-8 max-w-lg mx-auto">
              Sign up to be notified about drop-off locations near you, or reach out to partner with GIFTED directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@gifted-education.org"
                className="inline-flex items-center justify-center gap-2 bg-white text-brand-700 hover:bg-brand-50 font-semibold px-8 py-4 rounded-full transition-colors duration-200 cursor-pointer shadow-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-600"
              >
                Get Involved
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white/60 text-white hover:border-white hover:bg-white/10 font-semibold px-8 py-4 rounded-full transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-600"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
