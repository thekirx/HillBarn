# Hillbarn Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a seven-route, responsive Hillbarn website mock that unifies the café and events venue, uses only documented brand content and supplied assets, and makes event inquiry the primary conversion.

**Architecture:** Create a Next.js App Router application with shared content data, design tokens, global site components, route-level compositions, and isolated client components for navigation, gallery filtering, and the inquiry form. Keep verified content separate from UI so unsupported claims cannot drift into pages. Use responsive `next/image` rendering and CSS-led editorial motion.

**Tech Stack:** Next.js App Router, React, TypeScript, CSS Modules/global CSS, `next/font`, Vitest, React Testing Library, Playwright or the built-in browser for rendered QA.

**Spec:** `docs/superpowers/specs/2026-09-05-hillbarn-website-design.md`

## Global Constraints

- The four brand-research documents and `public/brand/` are the source of truth.
- Use `#F3EFE4`, `#221E15`, `#895A3C`, `#293742`, and `#2A5657` as the verified palette.
- Use Playfair Display for display type and Inter for body/UI as documented substitutes.
- Do not recreate either logo; use the documented typographic stand-in and disclose its status in the final handoff.
- Do not invent hours, capacities, rates, packages, reservations, testimonials, awards, founders, heritage, accommodations, services, or response times.
- Use only supplied Hillbarn imagery; mark compressed mock imagery with `data-placeholder="true"`.
- Use squared controls, hairline rules, editorial inset plates, and a maximum 2px radius.
- Event quotation and viewing requests are the highest-value actions.
- Meet WCAG AA contrast and support reduced motion.
- Verify desktop, tablet, and approximately 390px mobile with no horizontal overflow.
- The folder is not currently a Git repository; omit commit steps unless version control is initialized by the user.

---

### Task 1: Produce and approve the visual reference set

**Files:**
- Read: `docs/brand-research/BRAND-BOOK.md`
- Read: `docs/brand-research/BRAND-ASSETS.md`
- Read: `docs/brand-research/WEBSITE-DIRECTION.md`
- Read: `public/brand/**/*`
- Create outside committed source: concept images for homepage sections, interior routes, desktop overview, and mobile overview

**Interfaces:**
- Consumes: approved written design specification and supplied Hillbarn assets
- Produces: approved visual references with an exact copy inventory, crop notes, and section-to-concept mapping

- [ ] **Step 1: Generate the homepage visual references**

Create coordinated reference images for: hero/two-track opening, Paper introduction, Night signature dish, Grounds events sequence, Night gallery, Visit/final conversion, and 390px mobile continuation. Use real assets as visual inputs and instruct the concept tool not to alter logos, invent claims, or generate replacement photography.

- [ ] **Step 2: Generate route references**

Create readable concepts for Dining, Events/Inquire, Gallery, About, and Visit. Keep route concepts within the same component family and show the actual verified headings and actions.

- [ ] **Step 3: Create the fidelity inventory**

Record for every concept: native size, background register, permitted copy, image source, crop position, overlay treatment, typography hierarchy, component family, container rule, and responsive behavior.

- [ ] **Step 4: Obtain visual approval**

Show the concept set to the user and do not scaffold the application until the visual direction is accepted.

### Task 2: Scaffold the application and prove the content contract

**Files:**
- Create: `package.json`
- Create: `next.config.ts`
- Create: `tsconfig.json`
- Create: `vitest.config.ts`
- Create: `vitest.setup.ts`
- Create: `src/app/layout.tsx`
- Create: `src/app/page.tsx`
- Create: `src/content/site.ts`
- Create: `src/content/site.test.ts`

**Interfaces:**
- Consumes: approved visual references from Task 1
- Produces: `siteContent`, `SiteContent`, route constants, verified contact data, and a bootable App Router shell

- [ ] **Step 1: Write the failing content-contract test**

```ts
import { describe, expect, it } from "vitest";
import { siteContent } from "./site";

describe("Hillbarn content contract", () => {
  it("uses only verified contact and call-ahead details", () => {
    expect(siteContent.phone.display).toBe("0917 162 1254");
    expect(siteContent.location.coordinates).toBe("14.120137 N, 120.936327 E");
    expect(siteContent.visit.hours).toBe("Please call ahead — 0917 162 1254.");
  });

  it("does not expose unverified reservation or pricing claims", () => {
    const serialized = JSON.stringify(siteContent).toLowerCase();
    expect(serialized).not.toContain("reserve a table");
    expect(serialized).not.toMatch(/₱|php\s*\d/);
  });
});
```

- [ ] **Step 2: Run the test and confirm it fails because the module is missing**

Run: `pnpm vitest run src/content/site.test.ts`

- [ ] **Step 3: Create the application and verified data module**

Define typed constants for navigation, phone, email, address, coordinates, social URLs, call-ahead copy, first-Tuesday closure, accessibility note, verified menu-item names, and all CTA labels. Configure Next.js, TypeScript, Vitest, and the root layout without adding unrelated libraries.

- [ ] **Step 4: Run unit tests and application build**

Run: `pnpm vitest run src/content/site.test.ts`  
Run: `pnpm build`

### Task 3: Build the design system and image primitives

**Files:**
- Create: `src/app/globals.css`
- Create: `src/components/ui/Button.tsx`
- Create: `src/components/ui/Typography.tsx`
- Create: `src/components/ui/Section.tsx`
- Create: `src/components/ui/SealBadge.tsx`
- Create: `src/components/media/BrandImage.tsx`
- Create: `src/components/ui/ui.test.tsx`

**Interfaces:**
- Consumes: `siteContent` and accepted visual-reference inventory
- Produces: `Button`, `Kicker`, `DisplayHeading`, `EditorialQuote`, `Section`, `SealBadge`, and `BrandImage`

- [ ] **Step 1: Write failing primitive tests**

```tsx
import { render, screen } from "@testing-library/react";
import { Button } from "./Button";
import { Section } from "./Section";

it("renders a link button with its declared variant", () => {
  render(<Button href="/inquire" variant="primary">Inquire</Button>);
  expect(screen.getByRole("link", { name: "Inquire" })).toHaveAttribute("data-variant", "primary");
});

it("labels section registers for consistent styling", () => {
  render(<Section register="night">Content</Section>);
  expect(screen.getByText("Content").closest("section")).toHaveAttribute("data-register", "night");
});
```

- [ ] **Step 2: Run primitive tests and confirm missing-component failures**

Run: `pnpm vitest run src/components/ui/ui.test.tsx`

- [ ] **Step 3: Implement tokens and primitives**

Define the approved colours, 8px spacing scale, type scale, 1280px container, 58ch editorial measure, 2px radius, focus ring, button states, Paper/Night/Grounds sections, reduced-motion rules, image aspect-ratio helpers, and `data-placeholder` forwarding.

- [ ] **Step 4: Run primitive tests and build**

Run: `pnpm vitest run src/components/ui/ui.test.tsx`  
Run: `pnpm build`

### Task 4: Implement global navigation and conversion surfaces

**Files:**
- Create: `src/components/site/SiteHeader.tsx`
- Create: `src/components/site/MobileMenu.tsx`
- Create: `src/components/site/MobileActionBar.tsx`
- Create: `src/components/site/SiteFooter.tsx`
- Create: `src/components/site/site-shell.test.tsx`
- Modify: `src/app/layout.tsx`

**Interfaces:**
- Consumes: `siteContent`, UI primitives, current route, and browser scroll state
- Produces: accessible global navigation, transparent-to-cream header state, mobile navigation, fixed mobile actions, and verified footer details

- [ ] **Step 1: Write failing shell tests**

```tsx
import { render, screen } from "@testing-library/react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

it("keeps inquiry as the emphasized navigation action", () => {
  render(<SiteHeader />);
  expect(screen.getByRole("link", { name: "Inquire" })).toHaveAttribute("href", "/inquire");
});

it("publishes verified coordinates and call-ahead contact", () => {
  render(<SiteFooter />);
  expect(screen.getByText("14.120137 N, 120.936327 E")).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /0917 162 1254/ })).toHaveAttribute("href", "tel:+639171621254");
});
```

- [ ] **Step 2: Confirm tests fail for missing shell components**

Run: `pnpm vitest run src/components/site/site-shell.test.tsx`

- [ ] **Step 3: Implement the site shell**

Build the centered typographic stand-in, route links, accessible menu dialog with focus handling, scroll-aware header, mobile action bar, skip link, footer, external social links, phone link, mail link, and coordinate-based directions URL.

- [ ] **Step 4: Verify tests and build**

Run: `pnpm vitest run src/components/site/site-shell.test.tsx`  
Run: `pnpm build`

### Task 5: Implement the homepage section sequence

**Files:**
- Create: `src/features/home/Hero.tsx`
- Create: `src/features/home/TrackSplit.tsx`
- Create: `src/features/home/Introduction.tsx`
- Create: `src/features/home/SignatureDish.tsx`
- Create: `src/features/home/DiningPreview.tsx`
- Create: `src/features/home/EventsPreview.tsx`
- Create: `src/features/home/EventProcess.tsx`
- Create: `src/features/home/GalleryRail.tsx`
- Create: `src/features/home/VisitPreview.tsx`
- Create: `src/features/home/FinalConversion.tsx`
- Create: `src/features/home/home.test.tsx`
- Modify: `src/app/page.tsx`

**Interfaces:**
- Consumes: UI/image primitives and verified content
- Produces: the approved 11-part homepage composition and first-viewport conversion split

- [ ] **Step 1: Write the failing homepage content-order test**

```tsx
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

it("routes visitors to dining and events at the opening", () => {
  render(<Home />);
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("The windmill on Daang Luma.");
  expect(screen.getByRole("link", { name: "See the menu" })).toHaveAttribute("href", "/dining");
  expect(screen.getAllByRole("link", { name: /Enquire about your event/ }).length).toBeGreaterThan(0);
});

it("uses the verified signature claim", () => {
  render(<Home />);
  expect(screen.getByText(/Best seller/i)).toBeInTheDocument();
  expect(screen.getByText(/Since May 2022/i)).toBeInTheDocument();
});
```

- [ ] **Step 2: Confirm homepage tests fail**

Run: `pnpm vitest run src/features/home/home.test.tsx`

- [ ] **Step 3: Implement sections in concept-matched slices**

Build hero and opening split first; render at the concept's desktop size and fix composition before adding the remaining Paper, Night, and Grounds sections. Use the exact asset mapping and copy inventory. Avoid unapproved capacity, response-time, reservation, and driving-time claims.

- [ ] **Step 4: Verify homepage tests and production build**

Run: `pnpm vitest run src/features/home/home.test.tsx`  
Run: `pnpm build`

### Task 6: Implement Dining, Events, About, and Visit routes

**Files:**
- Create: `src/app/dining/page.tsx`
- Create: `src/app/events/page.tsx`
- Create: `src/app/about/page.tsx`
- Create: `src/app/visit/page.tsx`
- Create: `src/features/routes/routes.test.tsx`

**Interfaces:**
- Consumes: global shell, primitives, approved route concepts, and `siteContent`
- Produces: four complete static route compositions with correct metadata and CTA destinations

- [ ] **Step 1: Write failing route tests**

```tsx
import { render, screen } from "@testing-library/react";
import DiningPage from "@/app/dining/page";
import EventsPage from "@/app/events/page";
import VisitPage from "@/app/visit/page";

it("does not imply dining reservations", () => {
  render(<DiningPage />);
  expect(screen.getByRole("link", { name: "Plan your visit" })).toHaveAttribute("href", "/visit");
  expect(screen.queryByText(/reserve a table/i)).not.toBeInTheDocument();
});

it("shows honest event availability language", () => {
  render(<EventsPage />);
  expect(screen.getByText("Available on request")).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Request a quotation" })).toHaveAttribute("href", "/inquire");
});

it("uses call-ahead guidance instead of unverified hours", () => {
  render(<VisitPage />);
  expect(screen.getByText("Please call ahead — 0917 162 1254.")).toBeInTheDocument();
});
```

- [ ] **Step 2: Confirm route tests fail**

Run: `pnpm vitest run src/features/routes/routes.test.tsx`

- [ ] **Step 3: Implement all four routes**

Use the accepted concepts and page specifications. Preserve Night/Paper/Grounds rhythm, honest unavailable information, verified menu item names, Tasting Room evidence, physical-access note, and directions conversion.

- [ ] **Step 4: Verify route tests and build**

Run: `pnpm vitest run src/features/routes/routes.test.tsx`  
Run: `pnpm build`

### Task 7: Implement gallery filtering and inquiry interaction

**Files:**
- Create: `src/app/gallery/page.tsx`
- Create: `src/features/gallery/GalleryFilter.tsx`
- Create: `src/features/gallery/gallery-data.ts`
- Create: `src/features/gallery/gallery.test.tsx`
- Create: `src/app/inquire/page.tsx`
- Create: `src/features/inquiry/InquiryForm.tsx`
- Create: `src/features/inquiry/inquiry.test.tsx`

**Interfaces:**
- Consumes: UI/image primitives, supplied asset paths, and verified inquiry choices
- Produces: keyboard-operable local gallery filters and a validated demo inquiry confirmation

- [ ] **Step 1: Write failing interaction tests**

```tsx
import { fireEvent, render, screen } from "@testing-library/react";
import { GalleryFilter } from "./GalleryFilter";
import { InquiryForm } from "../inquiry/InquiryForm";

it("filters gallery items by category", () => {
  render(<GalleryFilter />);
  fireEvent.click(screen.getByRole("button", { name: "Celebrations" }));
  expect(screen.getByText("Reception hall dressed for a celebration")).toBeVisible();
  expect(screen.queryByText("The Hillbarn Pork Chop")).not.toBeInTheDocument();
});

it("requires contact details and labels successful submission as a demo", () => {
  render(<InquiryForm />);
  fireEvent.click(screen.getByRole("button", { name: "Prepare inquiry" }));
  expect(screen.getByText("Please enter your name.")).toBeVisible();
});
```

- [ ] **Step 2: Confirm interaction tests fail**

Run: `pnpm vitest run src/features/gallery/gallery.test.tsx src/features/inquiry/inquiry.test.tsx`

- [ ] **Step 3: Implement local interaction and accessibility**

Implement filter state, active states, focus visibility, and stable masonry geometry. Implement event type, flexible date, guest range, ceremony preference, name, mobile, email, optional message, inline validation, preserved values, and an explicit demonstration confirmation that does not claim delivery.

- [ ] **Step 4: Verify interaction tests and build**

Run: `pnpm vitest run src/features/gallery/gallery.test.tsx src/features/inquiry/inquiry.test.tsx`  
Run: `pnpm build`

### Task 8: Complete visual fidelity, responsive, and functional QA

**Files:**
- Modify: relevant `src/**/*.tsx` and `src/app/globals.css` based on observed mismatches
- Create outside committed source: desktop, tablet, and mobile screenshots plus temporary browser-check artifacts

**Interfaces:**
- Consumes: completed application and accepted visual references
- Produces: verified production build, interaction evidence, and a fidelity ledger with no unresolved fixable defects

- [ ] **Step 1: Run the complete automated suite**

Run: `pnpm vitest run`  
Run: `pnpm lint`  
Run: `pnpm build`

- [ ] **Step 2: Start the application and define the smoke flow**

The flow under test is: homepage loads → dining/events paths are visible → navigation reaches every route → gallery filters update → inquiry validation and demonstration confirmation render → phone and directions links resolve correctly.

- [ ] **Step 3: Run browser checks at three viewport classes**

Inspect desktop near 1440px, tablet near 768px, and mobile at 390px. Confirm page identity, meaningful DOM, no framework overlay, no relevant console error/warning, screenshot evidence, interaction state changes, correct image loading, intentional crops, and no horizontal overflow.

- [ ] **Step 4: Audit fidelity against the concepts**

Use direct image inspection on both the approved concepts and latest implementation captures. Record at least five comparison points spanning first-viewport balance, exact visible copy, palette, typography, crop/focal position, section rhythm, container model, mobile behavior, and motion. Fix every material mismatch that can be fixed from the supplied assets.

- [ ] **Step 5: Audit links and claims**

Check every internal route, `tel:`, `mailto:`, social link, coordinate-based maps link, and form state. Search visible content for unverified hours, prices, capacity, reservations, awards, testimonials, response times, accommodation claims, and fabricated services.

- [ ] **Step 6: Remove temporary artifacts and rerun final evidence commands**

Delete temporary screenshots/scripts outside the repository after visual inspection unless they are needed in the final evidence gallery. Rerun the full test suite, lint, and production build immediately before claiming completion.
