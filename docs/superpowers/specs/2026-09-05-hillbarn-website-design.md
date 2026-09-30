# Hillbarn Website Design Specification

**Date:** 5 September 2026  
**Status:** Approved direction, pending written-spec review  
**Source of truth:** `docs/brand-research/BRAND-BOOK.md`, `BRAND-ASSETS.md`, `WEBSITE-DIRECTION.md`, and `RESEARCH-SOURCES.md`

## 1. Purpose and success criteria

Build a production-quality speculative website that makes Hillbarn Café & Restaurant and Hillbarn Tagaytay Events Place feel like two expressions of one property. The site must feel recognisably Hillbarn, improve the path from discovery to action, and never publish an invented business claim.

The site succeeds when:

1. The windmill establishes the property immediately.
2. Dining and events are both discoverable within the first screen of scrolling.
3. Event quotation and venue-viewing inquiries are the strongest conversion paths.
4. The visual language feels like Hillbarn's cream editorial poster translated to the web.
5. Every unknown fact remains omitted or is presented as “Available on request” or “Please call ahead.”
6. The experience is polished at desktop, tablet, and approximately 390px mobile without horizontal overflow.

## 2. Product scope

The mock will include seven routes:

- `/` — Home
- `/dining` — Dining and menu preview
- `/events` — Events and weddings
- `/gallery` — Filterable editorial gallery
- `/about` — The place and its architecture
- `/visit` — Directions, parking, accessibility, and call-ahead guidance
- `/inquire` — Unified event/group inquiry

The implementation will use Next.js App Router with TypeScript. Styling will use a shared token system and reusable components. Motion will be CSS-first where practical and restrained to editorial reveals and state transitions.

No CRM, payment, reservation engine, account system, live-chat system, or real email delivery is in scope for the speculative mock. The inquiry form will provide a complete client-side experience and clearly indicate that submission is a demonstration unless a verified server destination already exists.

## 3. Creative direction

### Governing concept: “Printed matter, on a hill.”

The website extends Hillbarn's existing poster grammar rather than introducing a new aesthetic. Cream is the page ground. Warm ink carries copy. Copper provides action and editorial punctuation. Slate and teal distinguish events while remaining rooted in the building and existing events material.

Full-bleed photography is reserved for the homepage hero and the strongest events moment. Most photography appears as an inset plate with generous cream margins. Section changes should feel like turning pages rather than moving through stacked template modules.

The site avoids rounded SaaS cards, glass effects, decorative gradients, generic icon rows, excessive pills, invented badges, and blush-toned wedding styling. Surfaces stay rectilinear with hairline rules and a maximum 2px radius.

### Typography

- Display/headlines: Playfair Display, 500–600, including italic editorial accents.
- Body/UI: Inter, 400–600.
- Script: omitted from the core interface. Existing script remains visible only where it is burned into authentic supplied artwork.
- Headings use sentence case; kickers and metadata use widely tracked uppercase.
- The header uses the approved typographic stand-in for `HILLBARN` and its café/events descriptor. It is not presented as a replacement logo.

### Colour tokens

- Cream: `#F3EFE4`
- Deep cream: `#E7E1D2`
- Warm cream: `#FAF7F0`
- Ink: `#221E15`
- Soft ink: `#4A4437`
- Muted ink: `#7A7264`
- Copper: `#895A3C`
- Lifted copper: `#A8734E`
- Deep copper: `#6B4530`
- Slate: `#293742`
- Teal: `#2A5657`
- Hairline: `#D8D0BE`

## 4. Global experience

### Header

The desktop header begins transparent over the aerial hero and becomes a compact cream bar after scrolling. The typographic Hillbarn stand-in sits at the centre, with dining/visit navigation on one side and events/gallery/about on the other. “Inquire” is the single emphasized action.

Mobile uses a compact cream header with the stand-in wordmark, a menu trigger, and an accessible full-screen navigation sheet. The menu exposes all seven routes, phone, and directions.

### Footer

The footer uses the Night register. It includes the typographic stand-in, the verified address, phone, email, navigation, official social links, and Hillbarn's published coordinates `14.120137 N, 120.936327 E`. It does not publish hours.

### Mobile action bar

After the user has meaningfully scrolled, mobile shows a fixed action bar with `Call`, `Directions`, and `Enquire`. Each action has a minimum 48px target. The bar respects safe-area insets and never covers form controls or footer content.

### Motion

- Section entry: opacity plus 16px rise, 600ms.
- Image reveal: cream mask lift, approximately 800ms.
- Hero: subtle 8-second image scale from 1.0 to 1.06.
- Gallery hover: 1.03 scale and slight brightness lift.
- Buttons: colour transitions only, 150ms.
- Reduced-motion mode removes scaling and limits transitions to opacity at 200ms or less.

## 5. Homepage composition

1. **Hero — Photo register.** The supplied golden-hour aerial runs as a wide cinematic image with careful right-side windmill preservation. The headline occupies the darker upper-left/left negative space. Visible copy is limited to `TAGAYTAY CITY · SINCE 2022`, `The windmill on Daang Luma.`, one short supporting sentence, `See the menu`, and `Enquire about your event`.
2. **Two-track split — Paper.** Two open editorial columns route users to `Come for lunch` and `Celebrate here`. They are separated by a hairline rather than rendered as cards.
3. **Introduction — Paper.** `A Dutch barn on Daang Luma.` sits beside an inset architectural plate using the entrance signage or facade detail.
4. **Signature dish — Night.** The Hillbarn Pork Chop receives a full editorial moment using the darkwood or overhead poster. A code-native circular seal repeats only the verified `Best seller · Since May 2022` claim.
5. **Dining — Paper.** A compact description of the ground-floor café, second-floor dining area, and all-day breakfast leads to `/dining`. No missing interior photograph is simulated.
6. **Venue — Grounds.** The reception photograph becomes the emotional transition into events. The section avoids a capacity headline because capacity is not verified by Hillbarn.
7. **Weddings — Grounds.** An editorial text-and-image pairing uses the reception or signage asset and the line `Say it under the windmill.` with an inquiry CTA.
8. **How events work — Grounds.** Three numbered open columns explain venue availability/rates, viewing, and accredited caterer selection. No unverified response time or caterer list is shown.
9. **Gallery rail — Night.** A horizontal editorial strip mixes food, architecture, signage, and reception frames at varied ratios. It does not use social-reference files as prominent photography when their burned-in layouts would become unreadable.
10. **Visit — Paper.** The verified address, coordinates, parking description, call-ahead message, and directions action are arranged as an editorial information plate. Driving time is omitted because it varies and comes from a third party.
11. **Final conversion — Night.** The final split offers `Plan your visit` and `Enquire about your event`. It does not claim table reservations are available.

## 6. Route specifications

### Dining

Lead with `Made from scratch. Served all day.` and the Hillbarn Pork Chop. Present only menu items visibly supported by supplied Hillbarn graphics. Prices are excluded because no Hillbarn-verified current price list exists. The page explains the two dining levels using text, while clearly avoiding imagery that pretends to show the missing interior. The conversion is `Plan your visit`.

### Events

Use the slate/teal Grounds register and the reception image as the principal visual. Provide two editorial tracks: Weddings and Celebrations & Functions. Describe the venue-and-accredited-caterer model, show the verified Tasting Room format, and list capacity/rates as `Available on request`. Corporate events are not promoted as a distinct service because they are not verified. Primary CTA: `Request a quotation`; secondary CTA: `Book a viewing`.

### Gallery

Use an editorial masonry layout with filters for `The Grounds`, `Dining`, and `Celebrations`. Filters update locally and remain keyboard accessible. Images retain their natural ratios and intentional focal positions. Burned-in social graphics are used sparingly and at readable sizes.

### About

Tell the story of the place—the Dutch-barn architecture, windmill, shared café/venue grounds, and physical signage—without inventing founders or heritage. Hillbarn's missing founding story remains an internal content dependency and is not exposed as marketing copy.

### Visit

Show the verified address, phone, email, coordinates, parking information, first-Tuesday cleaning closure, and stairs-only second-floor dining accessibility note. Opening hours are replaced with `Please call ahead — 0917 162 1254.` Directions use a maps URL generated from the verified coordinates.

### Inquire

Use one single-screen form with three groups: event type, event details, and contact details. Event types are Wedding, Birthday/Debut, and Other; Corporate is excluded because it is unverified. Date flexibility and on-site ceremony preference are optional. Guest count uses ranges and includes `Not sure yet`. The reassurance column explains only the verified process: ask for availability/rates, arrange a viewing, then select from accredited caterers. Phone contact remains prominent. Successful submission produces an in-page demonstration confirmation and does not imply the message was delivered to Hillbarn.

## 7. Asset plan

### Prominent use

- `exterior/hero-aerial-windmill-golden-hour-2048x824.jpg` — homepage hero at its native wide proportion.
- `weddings/reception-hall-florals-festoon-513x640.jpg` — events and wedding editorial placements, never stretched.
- `food/porkchop-darkwood-poster-960x1200.jpg` and `food/porkchop-overhead-wordmark-960x1200.jpg` — signature dish sections.
- `venue/entrance-signage-windmill-mark-640x426.jpg` — about/visit and architectural details.
- `exterior/barn-buildings-driveway-361x640.jpg` — mobile-friendly grounds/editorial placement.

### Supporting use

- Burger and social-reference graphics appear only where their embedded typography remains readable and contextually relevant.
- `venue/tasting-room-teal-graphic-512x640.jpg` supports the documented Tasting Room section.
- Raster logo/avatar files remain references or small contextual assets; the header uses the documented typographic stand-in.

All social-compressed or otherwise non-production imagery receives `data-placeholder="true"` for launch auditing. No supplied image is stretched, recoloured, or passed off as launch-ready. No stock or generated replacement photography is used.

## 8. Component architecture

- `SiteHeader`, `MobileMenu`, `MobileActionBar`, `SiteFooter`
- `Button` with primary, secondary, and text variants
- `Kicker`, `DisplayHeading`, `EditorialQuote`, `SealBadge`
- `Section` with Paper, Night, and Grounds registers
- `InsetPlate`, `EditorialPair`, `ImageRail`
- `TrackSplit`, `ProcessSteps`, `VisitDetails`
- `GalleryFilter`, `GalleryMasonry`
- `InquiryForm` and reusable form controls
- Shared route and verified-content data modules

Components own repeated semantics, focus styles, responsive behaviour, and motion. Page files remain composition-focused rather than duplicating markup or tokens.

## 9. Accessibility, performance, and error handling

- WCAG AA contrast using the documented combinations.
- Visible focus rings, logical heading order, skip link, labelled controls, keyboard-operable menu and gallery filters.
- Informative alt text for documentary images; decorative images use empty alt text.
- Responsive image `sizes`, lazy loading below the fold, and no forced upscaling beyond intentional mock placeholders.
- Fonts use `display: swap`; the application remains legible before font load.
- Forms validate required fields inline, preserve entered values, and expose errors through accessible descriptions.
- Missing images fall back to a branded cream/slate panel with non-marketing diagnostic text rather than a generic broken-image icon.
- No horizontal overflow at supported viewport widths.

## 10. Verification plan

1. Run type checking, linting, tests, and production build if scripts exist.
2. Start the application and verify `/`, `/dining`, `/events`, `/gallery`, `/about`, `/visit`, and `/inquire`.
3. Check desktop, tablet, and 390px mobile layouts.
4. Inspect browser console warnings/errors and framework overlays.
5. Exercise desktop and mobile navigation, all CTA destinations, gallery filters, telephone/maps/email links, and inquiry validation/success state.
6. Confirm all images load, retain aspect ratio, and use intentional focal positions.
7. Confirm typography, focus indicators, reduced motion, and absence of horizontal overflow.
8. Compare implementation screenshots directly against the approved concepts and record a fidelity ledger covering copy, hierarchy, palette, typography, crop, spacing, responsive behaviour, and motion.

## 11. Launch dependencies and assumptions

The mock deliberately depends on later confirmation for:

- vector logo files;
- current opening hours;
- venue capacity, current rates, and package inclusions;
- whether table reservations are accepted;
- a dedicated events contact and normal response time;
- the current accredited caterer list;
- production-resolution photography, especially dining interiors, ceremony setup, and undressed event spaces;
- on-site accommodation availability;
- Hillbarn's founding story.

Publicly collected assets are used for internal mock-up purposes only. Written usage permission and original-resolution files are required before public launch.
