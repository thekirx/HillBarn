# Hillbarn — Website Strategy, Creative Direction & Implementation Brief

Companion to `BRAND-BOOK.md` · 5 September 2026
**Status: research/direction phase. No implementation has begun.**

---

## 1. The strategic problem

Hillbarn has **114,000 Facebook followers and no website.**

Everything a customer needs sits inside a social feed that buries it within a day. There is no page that says what the venue costs, how many it seats, when it opens, or how to ask about a wedding. The single published phone number and email are **café-branded** — a couple planning a ₱500,000 celebration currently has to message a restaurant's Gmail.

Meanwhile the café and the events place present as two unrelated companies with two different logos.

**Three jobs for this website:**

1. **Unify** the café and the venue into one brand without flattening either.
2. **Convert** — give the events business a real inquiry path it has never had.
3. **Persist** — hold the facts (hours, capacity, location, closures) that the feed cannot.

### The business model, as verified

| Revenue path | Status | Conversion action |
|---|---|---|
| Café / restaurant dining | ✅ Active, self-operated | **Plan a visit** (see §6 on reservations) |
| Weddings | ✅ Active, venue-let with partner caterers | **Request a quotation** / **Book a viewing** |
| Private functions, birthdays, debuts | ✅ Active | **Request a quotation** |
| Corporate events | ⚠️ Plausible, unevidenced | Same inquiry path |
| Catering by Hillbarn | ❌ **No evidence.** Catering is by partners | — |
| Accommodations | ⚠️ Claimed by a caterer, unconfirmed | TBD |
| "The Tasting Room" open house | ✅ Real, recurring format | **Register interest** |

**Highest-value conversion, ranked:** ① Event quotation request ② Venue viewing booking ③ Tasting Room registration ④ Table reservation ⑤ Directions/hours lookup.

⚠️ **Reservations:** no booking platform was found and it is unconfirmed whether Hillbarn takes table reservations at all. Tripadvisor reviews mention **40–50 minute waits**, which suggests walk-in queueing. **Do not build a booking engine on an assumption.** Ship "Plan your visit" (hours, directions, parking, group enquiry) and add reservations only once confirmed.

---

## 2. Competitive positioning

| Venue | Does well | Hillbarn's opening |
|---|---|---|
| **Sonya's Garden** | Dedicated `/weddings` page with structured packages — the benchmark for events UX in Tagaytay | Match the structure; beat it on photography and clarity |
| **Balay Dako** (Antonio's) | Dedicated events email; "book 1 year ahead" sets expectation and signals demand | Adopt both. Hillbarn has neither |
| **Antonio's** | Deep fine-dining authority | Not Hillbarn's fight — Hillbarn is destination-casual |
| **Chateau Hestia** | Garden + European cuisine niche | Hillbarn's architecture is more distinctive |
| **Booky / editorial roundups** | Where couples actually discover venues | Hillbarn needs a linkable URL to be listed at all |

**What Hillbarn uniquely has:**
1. **A windmill.** No competitor has a landmark this photographable.
2. **Café + venue on one property** — a couple can taste the food and see the space in one visit. *No competitor's site sells this combination.*
3. **114K followers** — the largest audience in the set.
4. A **genuinely good existing design language** (§ Brand Book 7) that nobody has put on a screen.

**What competitors communicate better:** capacity numbers, package structure, lead times, a dedicated events contact, downloadable brochures, FAQs.

**What Hillbarn does not have and should not fake:** a Taal Lake view. Sell the architecture instead.

---

## 3. Creative concept

> ## "Printed matter, on a hill."

Hillbarn already designs like a **letterpress print studio** — cream paper, high-contrast serif, letterspaced caps, circular seals, inset photographs with generous margin, italic captions. That grammar (Brand Book §7) is the concept. We are not inventing a look; we are **taking their poster to the browser at full size.**

**The governing move:** where every restaurant template goes edge-to-edge, **Hillbarn's photographs sit inside cream margins** — like plates in a book. Full-bleed is used **once**, for the hero, so it lands.

**Three registers, one system:**

| Register | Ground | Use |
|---|---|---|
| **Paper** | Cream `#F3EFE4` | Default. Dining, about, menu, visit |
| **Night** | Barn Ink `#221E15` | Signature dish, gallery — matches their dark poster template |
| **Grounds** | Slate `#293742` / Teal `#2A5657` | Events and weddings — the venue's own colours |

Scrolling the homepage should feel like **turning pages**, not swiping a feed.

**It must not feel like:** a restaurant template (hero + 3 cards + map), a wedding-venue template (script fonts on blush pink), a SaaS site (gradients, floating dashboards), or a corporate hotel site (blue, stock smiles, booking widget above the fold).

---

## 4. Sitemap

Seven pages. Deliberately fewer than the brief's candidate list — Menu folds into Dining, and Weddings and Private Functions are **one** Events page with two tracks, because Hillbarn's inquiry handling is a single team and splitting them would create two thin pages.

```
/                      Home
/dining                Dining  (includes the menu)
/events                Events & Weddings  (two tracks, one inquiry)
/gallery               Gallery
/about                 About
/visit                 Visit Us  (location, hours, parking)
/inquire               Inquire  (unified form: events, functions, groups)
```

**Cut, with reasons:** `/menu` — folds into Dining; a standalone menu page with unverified prices is a liability. `/weddings` + `/private-functions` — one page, two tracks. `/reservations` — unconfirmed that reservations exist. `/contact` — merged into Visit + Inquire.

### Page specifications

#### `/` — Home
- **Objective:** establish the landmark; route to dining *or* events within one screen of scrolling.
- **Intent:** "What is this place, and can I eat/marry there?"
- **Content:** hero; two-track split; signature dish; venue introduction; events; gallery strip; location; CTA.
- **Assets:** `hero-aerial-windmill-golden-hour`, `porkchop-overhead-wordmark`, `reception-hall-florals-festoon`, `entrance-signage-windmill-mark`.
- **CTA:** dual — *See the menu* / *Enquire about your event*.
- **Layout:** see §5.

#### `/dining` — Dining
- **Objective:** convert a browser into a visitor.
- **Intent:** "Is the food good, what does it cost, when are you open?"
- **Content:** intro; the Hillbarn Pork Chop as hero dish; menu by category with prices ⚠️ **marked provisional until verified**; the two dining rooms (ground café / second-floor windmill room); all-day breakfast note.
- **Assets:** three pork-chop posters; burger cards. ❌ **No interior photography exists** — this section is blocked on a shoot.
- **CTA:** *Plan your visit* → `/visit`.
- **Layout:** Night register for the signature dish; Paper for the menu. Menu as a two-column editorial list with copper leader rules — **not** cards.

#### `/events` — Events & Weddings
- **Objective:** the primary revenue page. Generate qualified inquiries.
- **Intent:** "Can it hold my guests, what does it cost, what's included, can I see it?"
- **Content:** venue hero; two tracks (**Weddings** / **Celebrations & Functions**); the spaces (reception hall, ceremony area, plaza, gardens); capacity ⚠️ TBD; how it works (venue + accredited caterers — a genuine explainer, since this confuses first-time clients); The Tasting Room; FAQ; inquiry form.
- **Assets:** `reception-hall-florals-festoon` (only one — ❌ critically under-served), `entrance-signage`, `barn-buildings-driveway`.
- **CTA:** *Request a quotation* (primary) · *Book a viewing* (secondary).
- **Layout:** Grounds register. Full-width reception photograph, then a structured, honest information block. **Where a number is unknown, print "Available on request" — never a guess.**

#### `/gallery` — Gallery
- **Objective:** the emotional close; the reason to travel.
- **Intent:** "Show me what it actually looks like."
- **Content:** filterable — *The Grounds · Dining · Celebrations*.
- **CTA:** contextual per filter.
- **Layout:** Night register. Editorial masonry at varied ratios, **not** a uniform grid.

#### `/about` — About
- **Objective:** substance behind the photogenic surface.
- **Intent:** "Who is behind this?"
- ⚠️ **Constraint:** there is **no public founding story.** Do not invent one. Write about **the place** — the Dutch barn idea, the windmill, the grounds — and the one verifiable time anchor: *best seller since May 2022*. Leave a clearly-marked placeholder for Hillbarn to supply their story.
- **Assets:** `entrance-signage`, `barn-buildings-driveway`.

#### `/visit` — Visit Us
- **Objective:** remove every friction to arriving.
- **Content:** address; **GPS 14.120137 N, 120.936327 E** (their own device — use it); map; driving time from Manila (~1.5–2 hrs via SLEX, per Top Gear PH); parking (large gravel lots, front and opposite); hours ⚠️ **TBD**; **the 1st-Tuesday-of-the-month cleaning closure** — no directory carries this and it is a genuine service to publish; accessibility note (second-floor dining is **stairs-only** — Top Gear PH; publishing this is honest and useful).
- **CTA:** *Get directions* · *Enquire for groups*.

#### `/inquire` — Inquire
- **Objective:** one qualified pipeline.
- **Layout:** two-column — form left, reassurance right (response time, what happens next, direct phone). See §7.

---

## 5. Homepage flow

Adapted from the brief's framework, with three changes justified by research.

| # | Section | Register | Why |
|---|---|---|---|
| **1** | **Cinematic hero** — aerial windmill, golden hour. Headline lower-left in the negative space. Kicker `TAGAYTAY CITY · SINCE 2022`. Dual CTA. | Photo | The windmill is the whole brand |
| **2** | **The two-track split** ⬅ *moved up* | Paper | **Change 1.** Two side-by-side panels — *Come for lunch* / *Celebrate here*. This is the unification job, and it must happen immediately, not in section 6 |
| **3** | **Brand introduction** — "A Dutch barn on Daang Luma." Short, inset photograph on cream. | Paper | Their signature layout |
| **4** | **The signature dish** — The Hillbarn Pork Chop, with the real circular badge *Best seller since May 2022*. | **Night** | **Change 2.** Their strongest verified proof point deserves its own full section, not a card in a grid |
| **5** | **Dining experience** — the two rooms, all-day breakfast, a three-item menu teaser → `/dining`. | Paper | |
| **6** | **The venue** — full-bleed reception photograph. "Three hundred guests. One barn." ⚠️ capacity TBD. | **Grounds** | The register shift signals a different business |
| **7** | **Weddings** — editorial pair: one image, one short paragraph, one CTA. | Grounds | |
| **8** | **How an event works** ⬅ *added* | Grounds | **Change 3.** Venue + accredited caterers is genuinely confusing to first-timers and **no competitor explains it.** Explaining it plainly is a differentiator and pre-qualifies inquiries |
| **9** | **Gallery strip** — horizontal scroll, 6–8 frames → `/gallery`. | Night | |
| **10** | **Tagaytay & location** — map, coordinates, drive time, parking. | Paper | |
| **11** | **Final CTA** — split: *Reserve a table* ⚠️ pending confirmation / *Enquire about your event*. | **Night** | |

**Dropped: testimonials.** ⚠️ Public review sentiment is genuinely mixed — Tripadvisor 3.9/5 (18 reviews) vs Restaurant Guru 4.5/5 (~360). Top Gear PH scored the food **6/10** and reviews cite slow service at peak. Cherry-picking praise would be dishonest and fragile. Replace with **verifiable proof**: "Best seller since May 2022", the 114K following, named caterer partners. If Hillbarn supplies signed client testimonials, add them then.

---

## 6. Design system

### Spacing — 8px base
```
4 · 8 · 16 · 24 · 32 · 48 · 64 · 96 · 128 · 192
Section padding: 96px mobile / 160px desktop   ← generous; the print logic needs air
Content max-width: 1280px    Text measure: 68ch    Editorial measure: 58ch
```

### Grid
12-column desktop (gutter 24px), 6-column tablet, 4-column mobile. **Signature move:** the "inset plate" — image spans columns 2–11 inside a cream section, never 1–12, except the hero and section 6.

### Image ratios
| Use | Ratio |
|---|---|
| Hero | 21:9 desktop · 4:5 mobile |
| Inset editorial plate | 3:2 |
| Portrait card / dish | 4:5 |
| Gallery | mixed 1:1, 4:5, 3:2 — deliberately uneven |
| Full-bleed venue band | 16:9 |

### Buttons
Squared — **2px radius, not pills.** Pills read SaaS; Hillbarn's world is rectilinear.
- **Primary:** copper `#895A3C` fill, cream text, 14px/0.12em uppercase Inter 500, padding 16/32. Hover → `#A8734E`, 150ms.
- **Secondary:** 1px `#221E15` border, transparent. Hover → ink fill, cream text.
- **Tertiary:** text + 1px copper underline, offset 4px. Hover → underline thickens to 2px.
- **Focus:** 2px `#6B4530` ring, 2px offset. Always visible.

### Cards
Flat. **No shadows, no rounded corners beyond 2px.** Separation by **cream tint shift** (`#F3EFE4` → `#FAF7F0`) and hairline `#D8D0BE` rules. Image on top, kicker, heading, one line of body.

### Badge component
Direct from their artwork: circular, copper or ink fill, cream text, arced or stacked caps. For "Best Seller", "Since May 2022", capacity figures, "No. 1".

### Animations — restrained, photography-serving
| Element | Behaviour |
|---|---|
| Section entry | Fade + 16px rise, 600ms, `cubic-bezier(.16,1,.3,1)`, once |
| Hero | Slow 8s scale 1.0→1.06, **cross-fade only, no parallax jitter** |
| Images | Reveal via cream mask wiping upward, 800ms — like paper being lifted |
| Headlines | Line-by-line rise, 80ms stagger. **Not** letter-by-letter |
| Gallery hover | Scale 1.03 + brightness 1.04, 300ms |
| Buttons | Colour only, 150ms |
| Counters | ❌ None. Animated numbers read SaaS |
| Parallax | ❌ None beyond the hero |

**All of it behind `prefers-reduced-motion: reduce` → opacity-only, ≤200ms.**

### Mobile UX
Mobile-first — Philippine traffic is overwhelmingly mobile, and 114K of it comes from the Facebook app's in-app browser.
- **Sticky bottom bar** after 60% scroll: `Call` · `Directions` · `Enquire`. Tap targets ≥48px.
- Hero 4:5, headline ≥32px.
- Two-track split stacks; both remain above the fold on a 390×844 viewport.
- Menu: accordion by category.
- Gallery: horizontal snap-scroll carousels.
- **Phone number is `tel:` everywhere.** In this market a call is often the preferred contact.
- Budget: **LCP < 2.5s on 4G.** AVIF/WebP, lazy-load below fold, `font-display: swap`, self-hosted subset fonts.

---

## 7. Event inquiry flow — the highest-value build

Currently: a Gmail address on a café's Facebook page. Target: a qualified pipeline.

**Single-screen form** (not a multi-step wizard — it adds friction for a one-off, high-intent action), grouped into three visual blocks:

1. **What are you planning?** — Wedding · Birthday/Debut · Corporate · Other *(chips, not a dropdown)*
2. **The details** — Preferred date (+ "flexible" checkbox) · Estimated guests *(ranges, not a number field — people don't know yet)* · Ceremony on-site? Y/N/undecided
3. **You** — Name · Mobile · Email · Message *(optional)*

**Right column — reassurance, all verifiable:**
- "We reply within 2 working days" ⚠️ *confirm with Hillbarn before publishing*
- "Prefer to talk? **0917 162 1254**" — tap to call
- What happens next: ① we send availability and rates ② you book a viewing ③ you choose from our accredited caterers
- Secondary CTA: **Book a viewing** — a distinct, lower-commitment entry point for couples not ready to ask about money

**Deliberately excluded:** budget field (kills conversion at first contact), file uploads, account creation, live chat.

**Secondary capture:** a Tasting Room interest list. It is a real recurring format and a warm, low-pressure list — genuinely their best lead magnet.

⚠️ **A "Download our package brochure" gate is recommended *only once* Hillbarn supplies a real brochure.** Do not build a gate for a document that does not exist.

---

## 8. Implementation brief

### Stack
Next.js (App Router) + TypeScript · Tailwind with the tokens below · `next/image` with AVIF/WebP · Framer Motion, used sparingly · form posts to a serverless handler + email; no CRM in the mock.

### Tokens
```js
colors: {
  cream:{DEFAULT:'#F3EFE4',deep:'#E7E1D2',warm:'#FAF7F0'},
  ink:{DEFAULT:'#221E15',soft:'#4A4437',mute:'#7A7264'},
  copper:{DEFAULT:'#895A3C',lift:'#A8734E',deep:'#6B4530'},
  slate:'#293742', teal:'#2A5657', line:'#D8D0BE',
}
fontFamily: { display:['Playfair Display',...], sans:['Inter',...] }
```

### Build order
1. Tokens, type scale, `Button`, `Kicker`, `Badge`, `Section`, `InsetPlate`
2. Header (transparent → cream on scroll) + footer with GPS coordinates
3. Homepage sections 1–11
4. `/events` — **the revenue page; give it the most care**
5. `/dining`, `/visit`
6. `/gallery`, `/about`, `/inquire`
7. Motion pass, then reduced-motion pass
8. Accessibility pass — AA contrast, focus rings, keyboard order, alt text
9. Performance pass

### Content rules — non-negotiable
- Every unverified figure renders as **"Available on request"** or a visible `TBD`. **Never a plausible-looking guess.**
- Menu prices carry a footnote: *"Prices indicative — please confirm on arrival."*
- **Hours must not ship** until confirmed. Until then: *"Please call ahead — 0917 162 1254."*
- No invented dishes, packages, prices, capacities, testimonials, awards or history.
- Logo renders as a **typographic stand-in**, labelled as such in the delivery note.
- Every placeholder image carries a `data-placeholder` attribute so they can be audited before launch.

### Definition of done for the mock
✅ Feels like the cream editorial poster became a website · ✅ Café and venue read as one brand · ✅ Events inquiry is the clearest action on the site · ✅ Passes AA · ✅ LCP < 2.5s on 4G · ✅ Every unverified claim is visibly marked · ✅ Nothing fabricated.

---

## 9. Open questions for Hillbarn

**Blocking**
1. Vector logo files for both marks?
2. Confirmed opening hours, including closing times?
3. Venue capacity and current package rates?
4. Do you accept table reservations, and how?

**Important**
5. Who is the events contact — dedicated number/email?
6. Accredited caterer list?
7. Original-resolution photography, or budget for a shoot?
8. Are there on-site accommodations?
9. Typical inquiry response time?
10. Founding story — who built it, and why a Dutch windmill in Tagaytay?

**Preference**
11. Standardise on *Hillbarn* and *Café*?
12. One script font, or drop the script entirely on web?
