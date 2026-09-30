import type { Metadata } from "next";
import { BrandImage } from "@/components/media/BrandImage";
import { Button } from "@/components/ui/Button";
import { DisplayHeading, Kicker } from "@/components/ui/Typography";
import { siteContent } from "@/content/site";

export const metadata: Metadata = {
  title: "Visit",
  description:
    "How to find Hillbarn: Daang Luma Road, Barangay Kaybagal North, Tagaytay City — directions, parking, and what to check before you drive.",
  alternates: { canonical: "/visit" },
  openGraph: { title: "Visit | Hillbarn", description: "Find the windmill on Daang Luma Road, Tagaytay City — directions and parking.", url: "/visit" },
};

const details = [
  ["Address", siteContent.location.address],
  ["Coordinates", siteContent.location.coordinates],
  ["Hours", siteContent.visit.hours],
  ["Monthly closure", siteContent.visit.closure],
  ["Parking", siteContent.location.parking],
  ["Accessibility", siteContent.visit.accessibility],
] as const;

export default function VisitPage() {
  return (
    <main id="main-content" className="visit-page">
      <section className="visit-hero">
        <div><Kicker>Daang Luma Road · Tagaytay City</Kicker><DisplayHeading as="h1" size="xl">Find the<br />windmill.</DisplayHeading><p>Hillbarn is in Barangay Kaybagal North, with parking in front of the property and across the road.</p><div className="button-row"><Button href={siteContent.location.directionsHref} variant="primary">Get directions</Button><Button href={siteContent.phone.href} variant="secondary">Call ahead</Button></div></div>
        <div><BrandImage src="/brand/exterior/hero-aerial-windmill-golden-hour-2048x824.jpg" alt="Hillbarn grounds and windmill at golden hour" fill loading="eager" fetchPriority="high" sizes="(max-width: 900px) 100vw, 55vw" style={{ objectPosition: "70% center" }} /></div>
      </section>
      <section className="visit-details"><div><Kicker>Before you come</Kicker><DisplayHeading>Plan the drive.</DisplayHeading></div><dl>{details.map(([term, description]) => <div key={term}><dt>{term}</dt><dd>{description}</dd></div>)}</dl></section>
      <section className="visit-contact"><div className="visit-contact__image"><BrandImage src="/brand/venue/entrance-signage-windmill-mark-640x426.jpg" alt="Hillbarn Tagaytay entrance" fill sizes="(max-width: 800px) 100vw, 50vw" /></div><div><Kicker>Questions before you leave</Kicker><DisplayHeading>Call the café.</DisplayHeading><p>The only publicly verified contact currently serves the café and restaurant.</p><a className="visit-phone" href={siteContent.phone.href}>{siteContent.phone.display}</a><a href={siteContent.email.href}>{siteContent.email.display}</a></div></section>
    </main>
  );
}
