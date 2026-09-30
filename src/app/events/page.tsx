import type { Metadata } from "next";
import { BrandImage } from "@/components/media/BrandImage";
import { Button } from "@/components/ui/Button";
import { DisplayHeading, Kicker } from "@/components/ui/Typography";
import { siteContent } from "@/content/site";
import { PageHero } from "@/features/routes/PageHero";

export const metadata: Metadata = {
  title: "Events & Weddings",
  description:
    "Hillbarn Tagaytay Events Place — a barn-themed setting for weddings, birthdays, debuts, and private functions, with accredited caterer partners.",
  alternates: { canonical: "/events" },
  openGraph: { title: "Events & Weddings | Hillbarn", description: "Say it under the windmill. A barn-themed wedding and events venue in Tagaytay City.", url: "/events" },
};

const eventSteps = [
  ["01", "Ask for availability and rates", "Share the occasion, your preferred date, and an estimated guest range."],
  ["02", "Come and see the grounds", "Arrange a viewing and see how the café and events place sit together."],
  ["03", "Choose from accredited caterers", "Large-event food service is arranged through Hillbarn’s caterer partners."],
] as const;

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: siteContent.eventFaq.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
};

export default function EventsPage() {
  return (
    <main id="main-content">
      <PageHero kicker="Hillbarn Tagaytay Events Place" title="Say it under the windmill." intro="A barn-themed setting for weddings, birthdays, debuts, and private functions in Tagaytay City." image="/brand/weddings/reception-hall-florals-festoon-513x640.jpg" alt="Hillbarn reception hall prepared with florals and festoon lights" tone="grounds" imagePosition="center 35%" />
      <section className="event-tracks">
        <article><Kicker>The day</Kicker><DisplayHeading>Weddings</DisplayHeading><p>The reception hall takes on warm light, timber, flowers, and long tables. Come and see what is already here before planning what comes next.</p></article>
        <article><Kicker>The gathering</Kicker><DisplayHeading>Celebrations &amp; Functions</DisplayHeading><p>Birthdays, debuts, and private functions share the same inquiry path. Tell Hillbarn what you are planning.</p></article>
      </section>
      <section className="availability-band">
        <div><span>Venue capacity</span><strong>Available on request</strong></div>
        <div><span>Rates &amp; packages</span><strong>Available on request</strong></div>
        <div><Button href="/inquire" variant="primary">Request a quotation</Button><Button href="/inquire?intent=viewing" variant="light">Book a viewing</Button></div>
      </section>
      <section className="event-route-process">
        <div><Kicker>A clear process</Kicker><DisplayHeading>Venue first.<br />Then the details.</DisplayHeading></div>
        <div>{eventSteps.map(([number, title, body]) => <article key={number}><span>{number}</span><div><h2>{title}</h2><p>{body}</p></div></article>)}</div>
      </section>
      <section className="caterer-band" aria-label="Accredited caterer partners">
        <Kicker>Accredited caterers who serve Hillbarn</Kicker>
        <ul>{siteContent.caterers.map((name) => <li key={name}>{name}</li>)}</ul>
      </section>
      <section className="tasting-room">
        <div className="tasting-room__image"><BrandImage src="/brand/venue/tasting-room-teal-graphic-512x640.jpg" alt="Hillbarn and Laurentino's published Tasting Room event poster" fill sizes="(max-width: 800px) 100vw, 40vw" /></div>
        <div><Kicker>A real Hillbarn event format</Kicker><DisplayHeading>The Tasting Room.</DisplayHeading><p>Hillbarn has hosted The Tasting Room with an accredited caterer partner—an open-house format for people planning celebrations. Ask about future dates.</p><Button href="/inquire" variant="light">Register interest</Button></div>
      </section>
      <section className="event-faq">
        <div><Kicker>Before you ask</Kicker><DisplayHeading>Questions couples<br />ask first.</DisplayHeading><p>Anything else? Call <a href={siteContent.phone.href}>{siteContent.phone.display}</a> or <a href={siteContent.messenger.href}>send a message</a>.</p></div>
        <div className="faq-list">
          {siteContent.eventFaq.map(({ q, a }, index) => (
            <details key={q} open={index === 0}><summary>{q}</summary><p>{a}</p></details>
          ))}
          <Button href="/inquire" variant="primary">Check your date</Button>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </section>
    </main>
  );
}
