import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Lock, CreditCard, ArrowLeft } from 'lucide-react'

const PRESETS = [
  {
    value: 15,
    short: 'School supplies',
    impact: '1 student fully stocked with pencils, notebooks, crayons, and an eraser.',
  },
  {
    value: 50,
    short: 'Tech accessories',
    impact: '1 student equipped with headphones, USB drive, and essential tech accessories.',
  },
  {
    value: 150,
    short: 'Refurbished laptop',
    impact: '1 student receives a refurbished laptop — their gateway to digital learning.',
  },
]

function getImpact(amount, frequency) {
  const suffix = frequency === 'monthly' ? ' every month' : ''
  if (!amount || amount <= 0) return 'Select an amount above to see your impact.'
  if (amount < 15) return `Every dollar goes directly to supplies for Filipino students${suffix}.`
  if (amount < 50) {
    const n = Math.floor(amount / 15)
    return `${n} student${n > 1 ? 's' : ''} fully stocked with school supplies${suffix}.`
  }
  if (amount < 150) {
    const n = Math.floor(amount / 50)
    return `${n} student${n > 1 ? 's' : ''} equipped with tech accessories${suffix}.`
  }
  const n = Math.floor(amount / 150)
  return `${n} refurbished laptop${n > 1 ? 's' : ''} delivered to student${n > 1 ? 's' : ''} in the Philippines${suffix}.`
}

export default function DonatePage() {
  const [frequency, setFrequency] = useState('one-time')
  const [selectedValue, setSelectedValue] = useState(50)
  const [isCustom, setIsCustom] = useState(false)
  const [customRaw, setCustomRaw] = useState('')

  const amount = isCustom ? parseFloat(customRaw) || 0 : selectedValue
  const impact = getImpact(amount, frequency)

  function selectPreset(val) {
    setSelectedValue(val)
    setIsCustom(false)
    setCustomRaw('')
  }

  function activateCustom() {
    setIsCustom(true)
    setSelectedValue(null)
  }

  const displayAmount = amount > 0 ? `$${Number.isInteger(amount) ? amount : amount.toFixed(2)}` : ''
  const btnLabel = displayAmount
    ? frequency === 'monthly'
      ? `Provide Supplies Now — ${displayAmount}/mo`
      : `Provide Supplies Now — ${displayAmount}`
    : 'Select an amount above'

  return (
    <div className="min-h-screen bg-cream-100 flex flex-col">

      {/* Minimal header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-100">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">
          <Link
            to="/"
            className="font-serif text-[17px] font-bold text-stone-900 tracking-tight focus:outline-none focus:ring-2 focus:ring-brand-400 rounded"
          >
            GIFTED
          </Link>
          <Link
            to="/"
            className="flex items-center gap-1.5 text-stone-400 hover:text-stone-700 text-[13px] font-medium transition-colors duration-150 cursor-pointer focus:outline-none"
          >
            <ArrowLeft size={13} />
            Back to site
          </Link>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 flex flex-col items-center justify-center px-5 py-12 md:py-16">
        <div className="w-full max-w-[420px]">

          {/* Page headline */}
          <div className="text-center mb-8">
            <h1 className="font-serif text-[28px] font-bold text-stone-900 leading-snug mb-2">
              Support Filipino students
            </h1>
            <p className="text-stone-500 text-[14px] leading-relaxed mb-4">
              100% of your donation goes directly to school supplies and tech gear.
            </p>
            <div className="inline-flex items-center gap-2 text-[12px] text-slate-500 font-medium bg-slate-50 border border-slate-200 rounded-full px-4 py-1.5">
              <Lock size={10} className="text-green-500 flex-shrink-0" strokeWidth={2.5} />
              Secure &nbsp;·&nbsp; Tax-deductible &nbsp;·&nbsp; 100% to students
            </div>
          </div>

          {/* Card */}
          <div className="bg-white rounded-2xl border border-stone-150 shadow-[0_2px_28px_rgba(0,0,0,0.07)] overflow-hidden">

            {/* Frequency toggle */}
            <div className="px-5 pt-5">
              <div className="bg-stone-100 rounded-xl p-1 flex">
                {[
                  { key: 'one-time', label: 'One-Time' },
                  { key: 'monthly', label: 'Monthly' },
                ].map(({ key, label }) => (
                  <button
                    key={key}
                    onClick={() => setFrequency(key)}
                    className={`flex-1 py-2 rounded-lg text-[13px] font-semibold transition-all duration-200 cursor-pointer focus:outline-none ${
                      frequency === key
                        ? 'bg-white text-stone-900 shadow-sm'
                        : 'text-stone-400 hover:text-stone-600'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div className="px-5 pt-4 pb-5">

              {/* Amount grid */}
              <div className="grid grid-cols-2 gap-2 mb-2.5">
                {PRESETS.map(({ value, short }) => {
                  const active = !isCustom && selectedValue === value
                  return (
                    <button
                      key={value}
                      onClick={() => selectPreset(value)}
                      className={`py-3.5 px-4 rounded-xl border-2 text-left transition-all duration-150 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-300 ${
                        active
                          ? 'border-brand-600 bg-brand-50'
                          : 'border-stone-200 bg-white hover:border-brand-300'
                      }`}
                    >
                      <div className={`font-bold text-[18px] leading-none mb-0.5 ${active ? 'text-brand-700' : 'text-stone-900'}`}>
                        ${value}
                      </div>
                      <div className="text-stone-400 text-[11px] leading-snug">{short}</div>
                    </button>
                  )
                })}

                {/* Custom tile */}
                <button
                  onClick={activateCustom}
                  className={`py-3.5 px-4 rounded-xl border-2 text-left transition-all duration-150 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-300 ${
                    isCustom
                      ? 'border-brand-600 bg-brand-50'
                      : 'border-stone-200 bg-white hover:border-brand-300'
                  }`}
                >
                  <div className={`font-bold text-[18px] leading-none mb-0.5 ${isCustom ? 'text-brand-700' : 'text-stone-400'}`}>
                    Custom
                  </div>
                  <div className="text-stone-400 text-[11px]">Your choice</div>
                </button>
              </div>

              {/* Custom amount input */}
              {isCustom && (
                <div className="relative mb-2.5">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-500 font-semibold text-sm select-none">$</span>
                  <input
                    type="number"
                    min="1"
                    step="1"
                    placeholder="Enter amount"
                    value={customRaw}
                    onChange={e => setCustomRaw(e.target.value)}
                    autoFocus
                    className="w-full pl-8 pr-4 py-3 rounded-xl border-2 border-brand-400 bg-brand-50 text-stone-900 font-semibold text-[15px] placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-brand-500"
                  />
                </div>
              )}

              {/* Dynamic impact text */}
              <div
                className={`rounded-xl px-4 py-3 mb-5 transition-colors duration-300 ${
                  amount > 0 ? 'bg-brand-50 border border-brand-100' : 'bg-stone-50 border border-stone-100'
                }`}
              >
                <p className={`text-[12.5px] leading-relaxed ${amount > 0 ? 'text-brand-700' : 'text-stone-400'}`}>
                  {impact}
                </p>
              </div>

              {/* Section label */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex-1 h-px bg-stone-100" />
                <span className="text-stone-400 text-[11px] font-medium uppercase tracking-wide">Payment details</span>
                <div className="flex-1 h-px bg-stone-100" />
              </div>

              {/* Email */}
              <div className="mb-2.5">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 text-stone-900 placeholder-stone-400 text-[13.5px] focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition-shadow"
                />
              </div>

              {/* Card element (Stripe placeholder) */}
              <div className="mb-2.5 border border-stone-200 rounded-xl overflow-hidden transition-shadow focus-within:ring-2 focus-within:ring-brand-400 focus-within:border-transparent">
                <div className="flex items-center gap-2.5 px-4 py-3 border-b border-stone-100">
                  <CreditCard size={14} className="text-stone-400 flex-shrink-0" strokeWidth={1.75} />
                  <input
                    type="text"
                    placeholder="Card number"
                    maxLength={19}
                    className="flex-1 text-stone-900 placeholder-stone-400 text-[13.5px] focus:outline-none bg-transparent"
                  />
                </div>
                <div className="flex divide-x divide-stone-100">
                  <input
                    type="text"
                    placeholder="MM / YY"
                    maxLength={7}
                    className="flex-1 px-4 py-3 text-stone-900 placeholder-stone-400 text-[13.5px] focus:outline-none bg-transparent"
                  />
                  <input
                    type="text"
                    placeholder="CVC"
                    maxLength={4}
                    className="w-24 px-4 py-3 text-stone-900 placeholder-stone-400 text-[13.5px] focus:outline-none bg-transparent"
                  />
                </div>
              </div>

              {/* Payment method icons */}
              <div className="flex items-center gap-2 mb-5 flex-wrap">
                <span className="inline-flex items-center bg-black text-white text-[10px] font-semibold px-2.5 py-1.5 rounded-md whitespace-nowrap">
                  Apple Pay
                </span>
                <span className="inline-flex items-center border border-stone-200 text-stone-600 text-[10px] font-semibold px-2.5 py-1.5 rounded-md whitespace-nowrap">
                  G Pay
                </span>
                <span className="inline-flex items-center bg-[#1a1f71] text-white text-[10px] font-bold italic px-2.5 py-1.5 rounded-md tracking-wider">
                  VISA
                </span>
                {/* Mastercard overlapping circles */}
                <span className="relative inline-flex items-center justify-center w-9 h-6">
                  <span className="absolute left-0 w-5 h-5 rounded-full bg-[#eb001b] opacity-90" />
                  <span className="absolute left-[10px] w-5 h-5 rounded-full bg-[#f79e1b] opacity-90" />
                </span>
              </div>

              {/* Submit */}
              <button
                type="button"
                disabled={amount <= 0}
                className="w-full bg-brand-500 hover:bg-brand-600 active:bg-brand-700 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold py-3.5 rounded-xl transition-colors duration-150 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-2 text-[14.5px] tracking-wide shadow-sm"
              >
                {btnLabel}
              </button>

              {/* Trust note */}
              <div className="mt-4 flex items-start gap-2 justify-center">
                <Lock size={11} className="text-stone-400 flex-shrink-0 mt-[1px]" strokeWidth={2} />
                <p className="text-stone-400 text-[11px] leading-relaxed text-center">
                  G.I.F.T.Ed is a legally recognized non-profit organization.
                  Your donation is secure and tax-deductible.
                </p>
              </div>

            </div>
          </div>

        </div>
      </main>

    </div>
  )
}
