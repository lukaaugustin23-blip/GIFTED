import { ArrowDown, Heart } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=1600&q=80')`,
        }}
        role="img"
        aria-label="Children learning in a classroom"
      />

      <div className="absolute inset-0 bg-gradient-to-br from-stone-900/80 via-stone-900/65 to-brand-900/50" />

      <div className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, #ea580c 0%, transparent 50%), radial-gradient(circle at 80% 20%, #f59e0b 0%, transparent 50%)`
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 text-center py-28">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium px-4 py-2 rounded-full mb-8">
          <Heart size={14} className="text-brand-400 fill-brand-400" />
          Founded by two high schoolers with a big dream
        </div>

        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[1.1] mb-8 font-bold">
          Every child{' '}
          <em className="text-brand-400 not-italic">deserves</em>
          <br />
          the tools to learn.
        </h1>

        <p className="text-white/80 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed mb-12 font-light">
          GIFTED collects school supplies across the U.S. and ships them to children
          in the Philippines who need them most.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#donate" className="btn-primary text-base px-9 py-4 shadow-lg shadow-brand-900/30">
            Donate Supplies
          </a>
          <a href="#mission" className="btn-secondary text-base px-9 py-4">
            Our Story
          </a>
        </div>
      </div>

      <a
        href="#impact-stats"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors duration-200 cursor-pointer focus:outline-none"
        aria-label="Scroll to impact statistics"
      >
        <ArrowDown size={28} className="animate-bounce" />
      </a>
    </section>
  )
}
