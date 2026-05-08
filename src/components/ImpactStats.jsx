import { useEffect, useRef, useState } from 'react'

const stats = [
  { number: 2500, suffix: '+', label: 'School Supplies Shipped', description: 'Pencils, notebooks, crayons and more' },
  { number: 15, suffix: '+', label: 'Schools Reached', description: 'Across multiple provinces in the Philippines' },
  { number: 3, suffix: '', label: 'Years of Impact', description: 'And growing every semester' },
  { number: 100, suffix: '%', label: 'Volunteer-Run', description: 'Every dollar goes directly to supplies' },
]

function CountUp({ target, suffix, active }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    let start = 0
    const duration = 1800
    const step = Math.ceil(target / (duration / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 16)
    return () => clearInterval(timer)
  }, [active, target])

  return (
    <span>{count.toLocaleString()}{suffix}</span>
  )
}

export default function ImpactStats() {
  const ref = useRef(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="impact-stats" ref={ref} className="bg-charcoal-800 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="font-serif text-5xl md:text-6xl font-bold text-white mb-2">
                <CountUp target={s.number} suffix={s.suffix} active={active} />
              </div>
              <div className="text-white font-semibold text-base md:text-lg mb-1">
                {s.label}
              </div>
              <div className="text-cream-200 text-sm leading-snug">
                {s.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
