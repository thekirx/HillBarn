# Hillbarn Visual Fidelity Inventory

**Status:** Pending visual-direction approval  
**Purpose:** Implementation reference only. Generated concepts are not production assets and must never replace supplied Hillbarn photography or logos.

## Reference set

### 1. Homepage opening and editorial

- Concept: `/Users/kiro/.codex/generated_images/01a0714d-a390-7fc0-a6fe-29a0f93eeee0/exec-6d748230-36a8-49a5-a9f3-264aa3b79975.png`
- Native size: portrait desktop board, 1024 × 2048.
- Registers: photo hero → Paper → Night.
- Preserve: quiet centered wordmark stand-in; windmill-right hero; large left-aligned serif headline; dual underlined actions; open two-column split; cream paper margins; sparse copper rules; asymmetric pork-chop editorial pairing.
- Production assets: aerial hero, pork-chop editorial poster, darkwood poster.
- Hero image treatment: no colour overlay; crop preserves the windmill; text sits on naturally darker image space.
- Permitted opening copy: `TAGAYTAY CITY · SINCE 2022`, `The windmill on Daang Luma.`, `A Dutch barn café in Tagaytay — and the place where the day happens.`, `See the menu`, `Enquire about your event`, `Come for lunch`, `Celebrate here`.
- Rejected concept copy: `Thoughtful plates, honest flavors...`, `Built quietly on a hill...`, and all other generated prose not present in the approved written specification.

### 2. Events and inquiry

- Concept: `/Users/kiro/.codex/generated_images/01a0714d-a390-7fc0-a6fe-29a0f93eeee0/exec-8235106f-42f3-4e68-a018-d9a1a19cc636.png`
- Native size: paired landscape board, 2048 × 1365.
- Registers: Grounds event page; Paper + Slate inquiry page.
- Preserve: wide reception image; deep teal event field; cream/copper type; large serif event heading; paired squared CTAs; open two-track columns; numbered process with vertical rules; structured single-screen inquiry form; right-side reassurance band.
- Production assets: reception hall, entrance signage, Tasting Room poster. Do not use the concept's generated windmill or generated lockup.
- Permitted copy: `Say it under the windmill.`, `Request a quotation`, `Book a viewing`, `Weddings`, `Celebrations & Functions`, `Ask for availability and rates`, `Come and see the grounds`, `Choose from accredited caterers`, `Available on request`, `Prepare inquiry`, `0917 162 1254`, and the demonstration disclaimer from the approved specification.
- Rejected concept copy: claims about intimate/private spaces, gardens, parking access, response confidence, or any service not explicitly verified.

### 3. Supporting route layout board

- Concept: `/Users/kiro/.codex/generated_images/01a0714d-a390-7fc0-a6fe-29a0f93eeee0/exec-17ad3723-9b60-4ab9-83ca-52274d2e9e47.png`
- Native size: 2048 × 1365.
- Registers: Night Dining/Gallery; Paper About/Visit; Slate information plate.
- Preserve: split Night food hero and cream editorial menu; dark masonry gallery; About editorial image pair; Visit information rows paired with a slate information field.
- Production assets: supplied pork chop, signage, driveway, food graphics, and reception only.
- Rejected imagery: generated dining interiors, tablescapes, flowers, drinks, map illustration, building variations, and any image not present under `public/brand/`.
- Rejected copy: the generated founding narrative in the About quadrant. The implementation may discuss only the place, architecture, two-brand property, and verified time anchor.
- Icons: small monochrome line icons may be code-native SVG only for location, phone, directions, menu, and gallery arrows. Do not create a windmill illustration or new seal/logo.

### 4. Mobile rhythm

- Concept: `/Users/kiro/.codex/generated_images/01a0714d-a390-7fc0-a6fe-29a0f93eeee0/exec-1019ce30-3764-4755-84f8-0522d63b943e.png`
- Native size: 753 × 2087.
- Preserve: compact cream header; 4:5-ish windmill hero; stacked editorial tracks; alternating text/image halves; three-step process; horizontal gallery rail; final split conversion; fixed three-action mobile bar.
- Production assets: original aerial, pork-chop, reception, signage, and approved supporting graphics only.
- Rejected imagery: generated line-art windmills, seals, venue drawings, meals, and event photographs.
- Rejected copy: `Good food. No rush.`, `Your event. Our place.`, `The pork chop that started it.`, `We’ll help you bring it to life.`, `We’ll take care of the rest.`, `Easy to reach. Hard to leave.`, and other unapproved lines.

## Locked implementation system

- Backgrounds: exact Cream `#F3EFE4`, Ink `#221E15`, Slate `#293742`, or Teal `#2A5657`; no gradients.
- Type: Playfair Display for display/italic editorial type, Inter for UI/body, browser controls explicitly styled.
- Geometry: 2px maximum radius, flat fields, 1px hairlines, no shadows or floating cards.
- Containers: 1280px maximum with deliberately large outer gutters; inset plates on Paper; full-bleed only for hero and principal event image.
- Buttons: copper filled, ink/cream outline, or underlined text; uppercase tracked labels; visible focus ring.
- Imagery: `object-fit: cover` with documented focal positions; no stretching; no colour wash; all compressed public assets marked `data-placeholder="true"`.
- Motion: 600ms rise/fade, 800ms cream image-mask lift, subtle hero scale, 150ms colour state, reduced-motion fallback.

## Above-the-fold copy lock

The homepage first viewport may contain only:

- `HILLBARN`
- `CAFÉ & RESTAURANT`
- `Dining`
- `Events`
- `Gallery`
- `About`
- `Visit`
- `Inquire`
- `TAGAYTAY CITY · SINCE 2022`
- `The windmill on Daang Luma.`
- `A Dutch barn café in Tagaytay — and the place where the day happens.`
- `See the menu`
- `Enquire about your event`

The first Paper section may add only `Come for lunch`, `Celebrate here`, and concise verified descriptions approved in the written specification.
