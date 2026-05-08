import { Linkedin, Mail } from 'lucide-react'

const team = [
  {
    name: 'Sean Locurcio',
    role: 'Co-Founder & CEO',
    bio: 'Sean co-founded GIFTED after learning about the lack of basic school supplies in Philippine classrooms. As CEO, he oversees the organization\'s strategy, logistics, and the supply chain that gets boxes across the Pacific.',
    initials: 'SL',
  },
  {
    name: 'Ruvi Khanin',
    role: 'Co-Founder & CFO',
    bio: "As CFO, Ruvi manages GIFTED's finances and community engagement — running supply drives and building the donor and volunteer network that powers every shipment. She believes in the loudest version of compassion.",
    initials: 'RK',
  },
  {
    name: 'Luka Hernandez',
    role: 'Co-Founder & CTO',
    bio: 'As CTO, Luka leads GIFTED\'s digital presence and technology operations, building the tools and platforms that help the organization scale its reach, track its impact, and connect with donors worldwide.',
    initials: 'LH',
  },
]

export default function Team() {
  return (
    <section id="founders" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14">
          <span className="section-tag">The Founders</span>
          <h2 className="section-heading mb-4">
            Students building a<br />better world.
          </h2>
          <p className="section-body max-w-xl mx-auto">
            GIFTED was founded by three students and is run entirely by young people
            who believe that age is no excuse for inaction.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 max-w-5xl mx-auto">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-amber-50 rounded-3xl border border-stone-200 p-8 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-start gap-5 mb-5">
                <div className="w-14 h-14 rounded-full bg-white border-2 border-amber-200 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <span className="font-serif text-xl font-bold text-amber-700">
                    {member.initials}
                  </span>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-stone-900 leading-snug">
                    {member.name}
                  </h3>
                  <p className="text-brand-600 text-sm font-semibold mt-0.5">{member.role}</p>
                </div>
              </div>

              <p className="text-stone-600 text-[15px] leading-relaxed mb-6">
                {member.bio}
              </p>

              <div className="flex gap-2.5 pt-5 border-t border-amber-200">
                <a
                  href="mailto:hello@gifted-education.org"
                  className="w-9 h-9 rounded-full bg-white border border-stone-200 hover:border-brand-300 hover:text-brand-600 text-stone-500 flex items-center justify-center transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-500"
                  aria-label={`Email ${member.name}`}
                >
                  <Mail size={14} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white border border-stone-200 hover:border-brand-300 hover:text-brand-600 text-stone-500 flex items-center justify-center transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-500"
                  aria-label={`${member.name} on LinkedIn`}
                >
                  <Linkedin size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 max-w-3xl mx-auto bg-stone-50 rounded-3xl p-8 md:p-12 border border-stone-100 text-center">
          <p className="font-serif text-2xl md:text-3xl text-stone-800 italic leading-snug">
            "We're just three students with boxes and a shipping address.
            But we're also proof that you don't have to wait."
          </p>
          <p className="text-stone-400 text-sm mt-5">— Sean, Ruvi & Luka, GIFTED Co-Founders</p>
        </div>
      </div>
    </section>
  )
}
