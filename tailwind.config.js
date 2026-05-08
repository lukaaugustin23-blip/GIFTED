/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Amber/Orange — mission energy, primary CTAs, accents
        brand: {
          50:  '#FFF8F0',
          100: '#FFECD6',
          200: '#FFD5A8',  // soft text on dark backgrounds
          300: '#FFB86A',  // accent on dark overlays
          400: '#FFA500',  // lighter hover
          500: '#FF8C42',  // main CTA, energy
          600: '#E67E22',  // deeper accent, depth
          700: '#C96A12',  // darkest orange
        },
        // Warm Cream/Off-White — human, breathing room
        cream: {
          50:  '#FFFFFF',
          100: '#FAF8F3',  // main page background
          200: '#F5F1E8',  // subtle section alternation
          300: '#E8E0D0',  // borders, dividers
        },
        // Deep Charcoal — grounded, readable
        charcoal: {
          400: '#4A4A4A',  // secondary text, metadata
          600: '#2C2C2C',  // body text
          800: '#1A1A1A',  // headlines, dark section backgrounds
        },
        // Warm Gold — achievement, impact, section labels
        gold: {
          50:  '#FDF6EE',
          200: '#F0D9BC',
          300: '#E2C49A',  // on dark overlays
          400: '#D4A574',  // section tags, testimonials, badges
          500: '#C99A6E',  // hover/depth
        },
        // Soft Sage Green — growth, life, impact stories
        sage: {
          400: '#A8B88C',  // lighter variant
          500: '#8B9D6F',  // impact accents
        },
        // Warm Clay/Rust — authentic, earthy, founder heritage
        clay: {
          400: '#C17A6B',  // founder cards, heritage feel
          500: '#A0644D',  // darker variant
        },
        // Danger — rejection criteria and alerts only
        danger: {
          50:  '#FFF1F2',
          100: '#FFE4E6',
          400: '#F87171',
          500: '#EF4444',
          600: '#DC2626',
          700: '#B91C1C',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'marquee': 'marquee 26s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
