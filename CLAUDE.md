# CLAUDE.md — G.I.F.T.Ed Project Rules
### Every Claude Code session must read this file before doing anything.

---

## WHAT THIS PROJECT IS

A single-page nonprofit website for **G.I.F.T.Ed** (Global Initiative For Thorough Education) — founded by two New Jersey high school juniors, Sean Locurcio and Ruvi Khanin, raising funds to provide school supplies to students in the Philippines.

**Live repo:** https://github.com/lukaaugustin23-blip/GIFTED

---

## GOLDEN RULES — NEVER BREAK THESE

1. **Never rebuild from scratch** — this site already exists and looks beautiful. Always add or edit surgically.
2. **Never remove anything already working** — if it's not broken don't touch it.
3. **Every animation must reverse on scroll up** — use GSAP ScrollTrigger with `scrub: 1.5` on everything. If the user scrolls back up, every animation rewinds perfectly like a film.
4. **Zero harsh color transitions** — never switch colors with a raw CSS background change. Every color transition must be animated smoothly.
5. **Never use Inter, Roboto, Arial, or system-ui** — fonts are Cormorant Garamond, DM Sans, DM Mono only.
6. **Always run `npm run build` after changes** — verify zero TypeScript errors before committing.
7. **Always create a new branch** — never commit directly to main.
8. **Always read all files before writing any code.**

---

## DESIGN SYSTEM

### Colors
```css
--white: #FFFFFF
--off-white: #F7F5F2
--warm-gray: #E8E4DF
--ink: #1A1A1A
--mid-gray: #6B6B6B
--accent: #C8832A        /* amber/gold */
--accent-hover: #D4943A
--accent-light: rgba(200, 131, 42, 0.12)
```

### Fonts
- **Display/headings:** Cormorant Garamond (weights 300, 400, 500)
- **Body:** DM Sans (weights 400, 500)
- **Labels/caps:** DM Mono (weight 400)

### Motion
- Default easing: `cubic-bezier(0.16, 1, 0.3, 1)` (expo out)
- All scroll animations: GSAP ScrollTrigger with `scrub: 1.5`
- Entrance animations: elements start `opacity: 0, y: 24px` → natural position
- Durations: 600ms–900ms for entrances, 300ms for hover
- **Every animation must reverse perfectly on scroll up**

### Section Transitions
- White → dark: smooth animated transition (ink bleed or opacity fade over at least 600ms)
- Dark → white: same in reverse
- Never a hard CSS cut between sections
- Between white/off-white sections: subtle gradient divider `height: 60px`

---

## TECH STACK

- Vanilla HTML + TypeScript (`src/main.ts`)
- Vite as build tool
- Tailwind CSS (configured but largely custom CSS in `src/styles.css`)
- Three.js, GSAP + ScrollTrigger, VanillaTilt — loaded from CDN
- Supabase installed but not yet wired up (planned for form/donation submissions)

---

## SITE STRUCTURE (9 sections — all exist, preserve all)

1. **Hero** — Three.js particles, G.I.F.T.Ed title, Donate Now + Learn More buttons
2. **Mission** — parallax layers, "Education is a right. Not a privilege."
3. **Impact** — 3 stat cards with VanillaTilt
4. **Founders** — Sean Locurcio + Ruvi Khanin cards with 3D scroll rotation
5. **How It Works** — sticky sidebar + 4 scrolling steps
6. **Events** — Drive-In Movie, 5K Run, Restaurant Collabs
7. **Donate** — dark section, "A pencil can change a life"
8. **Contact** — form + direct contact info
9. **Footer**

---

## FOUNDER DETAILS (use exactly as written)

**Sean Locurcio**
- Role: Co-Founder
- Phone: 201-414-2288
- Email: sean.locurcio2@gmail.com
- Background: Junior at Tenafly Public High School. Initiative is personally meaningful due to his Filipino heritage.

**Ruvi Khanin**
- Role: Co-Founder
- Phone: 551-370-4003
- Email: ruvikhanin99@gmail.com
- Background: Junior at Tenafly Public High School. Leads event planning and fundraising strategy.

---

## ANIMATION RULES (DETAILED)

### Scroll behavior
- Hero section: `height: 500vh`, sticky content
- Single GSAP timeline per section, `scrub: 1.5`
- `ScrollTrigger.normalizeScroll(true)` — prevents scroll getting stuck
- `invalidateOnRefresh: true` on all ScrollTriggers
- Always unpin sections cleanly after their sequence ends

### Button behavior
- All buttons: hover = `translateY(-2px)` + color shift + shadow
- Active/click: `scale(0.97)` + shadow collapse
- Transition: `all 300ms cubic-bezier(0.16, 1, 0.3, 1)`
- Primary "Donate Now": shimmer sweep `::after` on hover
- Always `cursor: pointer`

### Three.js particles (hero)
- ~180 particles desktop, ~80 mobile
- Particles attracted to cursor but NEVER touch it — repel at close range
- `pixelRatio: Math.min(devicePixelRatio, 2)`
- `antialias: false` on mobile

---

## WHAT NEEDS TO BE DONE (backlog)

- [ ] Fix "Education is a right. Not a privilege." — should be two centered lines
- [ ] Add founder photos to founder cards
- [ ] Smooth white → dark transition before donate section
- [ ] Built-in donation system (Stripe or similar)
- [ ] Loading screen
- [ ] Scroll progress bar (amber, 2px, fixed top)
- [ ] Active nav link highlighting
- [ ] Fix scroll getting stuck at top of hero

---

## WHAT NOT TO DO

- Do NOT add the 3D pencil animation yet — this is planned for later
- Do NOT use any AI video embeds yet
- Do NOT change fonts
- Do NOT change the color palette
- Do NOT touch the Three.js particle system unless specifically asked
- Do NOT use localStorage or sessionStorage
- Do NOT commit directly to main

---

## PERFORMANCE RULES

- Lazy load all sections below the fold
- `will-change: transform` only during animation, clear after
- Preload Cormorant Garamond and DM Sans fonts
- No content layout shift — set explicit dimensions on placeholders

---

*This file was created for G.I.F.T.Ed — Sean Locurcio & Ruvi Khanin — Tenafly, New Jersey*
