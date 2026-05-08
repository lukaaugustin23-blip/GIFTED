import { Quote } from 'lucide-react'

export default function Mission() {
  return (
    <section id="our-story" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <span className="section-tag">How It Started</span>
            <h2 className="section-heading mb-6">
              Three students who refused
              to look away.
            </h2>
            <p className="section-body mb-6">
              In 2022, students <strong>Sean Locurcio</strong>, <strong>Ruvi Khanin</strong>, and <strong>Luka Hernandez</strong> learned
              that millions of Filipino children begin each school year without
              basic supplies — no pencils, no notebooks, no crayons.
            </p>
            <p className="section-body mb-8">
              Rather than post about it and scroll on, the three co-founded GIFTED —
              the <em>Global Initiative For Thorough Education</em>. From garage
              supply drives to international shipments, they built something
              real, one box at a time.
            </p>

            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6 md:p-8">
              <Quote size={26} className="text-amber-400 mb-3" />
              <p className="font-serif text-xl text-stone-800 leading-relaxed italic mb-4">
                "We didn't want to wait until we were grown up to make a difference.
                Kids helping kids — that's the whole idea."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white border border-amber-200 flex items-center justify-center text-amber-700 font-serif font-bold text-sm shadow-sm">
                  SL
                </div>
                <div>
                  <div className="font-semibold text-stone-900 text-sm">Sean Locurcio</div>
                  <div className="text-stone-500 text-xs">Co-Founder & CEO, GIFTED</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-xl">
              {/* TODO: Replace with actual GIFTED photo of Filipino students with supplies */}
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80"
                alt="Colorful school supplies — pencils and crayons ready to be shipped to the Philippines"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 to-transparent" />
            </div>

            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-lg border border-stone-100 p-5 max-w-[190px]">
              <div className="font-serif text-3xl font-bold text-brand-600 mb-1">100%</div>
              <div className="text-stone-600 text-sm font-medium leading-snug">of donations go directly to school supplies</div>
            </div>

            <div className="absolute -top-5 -right-5 bg-stone-900 rounded-2xl shadow-lg p-5 max-w-[175px]">
              <div className="text-2xl mb-1">🇵🇭</div>
              <div className="text-stone-300 text-sm font-medium leading-snug">Shipping to the Philippines since 2022</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
