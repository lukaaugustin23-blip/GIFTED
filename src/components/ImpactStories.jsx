import { Star } from 'lucide-react'

const stories = [
  {
    quote:
      "Before GIFTED arrived, my students shared a single box of crayons for the whole class. Now every child has their own set. You cannot imagine how their faces lit up.",
    name: 'Teacher Maria Santos',
    role: 'Grade 3 Teacher, Cebu Province',
    initials: 'MS',
    color: 'bg-brand-100 text-brand-700',
  },
  {
    quote:
      "My daughter came home and said her teacher told them the pencils came from students in America who cared about them. She cried. I cried. We are so grateful.",
    name: 'Parent, Laguna Province',
    role: 'Parent of a Grade 5 student',
    initials: 'PL',
    color: 'bg-forest-100 text-forest-700',
  },
  {
    quote:
      "These supplies don't just help kids learn — they send a message that people across the world believe in them. That belief is everything for a child.",
    name: 'Principal Jose Reyes',
    role: 'Elementary School, Batangas',
    initials: 'JR',
    color: 'bg-amber-100 text-amber-700',
  },
]

export default function ImpactStories() {
  return (
    <section id="impact" className="py-20 md:py-32 bg-stone-50">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-16">
          <span className="section-tag">Real Impact</span>
          <h2 className="section-heading mb-4">
            Heard from the classrooms
            <br />
            <em className="text-brand-600">themselves.</em>
          </h2>
          <p className="section-body max-w-xl mx-auto">
            Every box we ship changes something in a child's day. Here's what
            teachers and parents on the other side of the world have told us.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-7 md:p-8 shadow-sm border border-stone-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-default flex flex-col"
            >
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} className="fill-brand-400 text-brand-400" />
                ))}
              </div>
              <p className="font-serif text-lg text-stone-800 leading-relaxed italic flex-1 mb-6">
                "{s.quote}"
              </p>
              <div className="flex items-center gap-3 pt-5 border-t border-stone-100">
                <div className={`w-10 h-10 rounded-full ${s.color} flex items-center justify-center font-bold text-sm flex-shrink-0`}>
                  {s.initials}
                </div>
                <div>
                  <div className="font-semibold text-stone-900 text-sm">{s.name}</div>
                  <div className="text-stone-500 text-xs">{s.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl overflow-hidden relative h-72 md:h-96 shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1400&q=80"
            alt="Children smiling and learning together in a classroom"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/70 to-stone-900/20 flex items-center">
            <div className="max-w-md px-8 md:px-14">
              <p className="font-serif text-3xl md:text-4xl text-white leading-tight font-semibold">
                "Education is the one gift
                that cannot be taken away."
              </p>
              <p className="text-white/70 mt-4 text-sm">— GIFTED founding principle</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
