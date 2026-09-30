import type { Metadata } from "next";
import { BrandImage } from "@/components/media/BrandImage";
import { Button } from "@/components/ui/Button";
import { DisplayHeading, EditorialQuote, Kicker } from "@/components/ui/Typography";
import { PageHero } from "@/features/routes/PageHero";

export const metadata: Metadata = {
  title: "About",
  description:
    "One property on Daang Luma Road, Tagaytay City: a Dutch barn café and restaurant below the windmill, and an events place on the same grounds.",
  alternates: { canonical: "/about" },
  openGraph: { title: "About | Hillbarn", description: "The Dutch barn property behind the windmill on Daang Luma Road, Tagaytay City.", url: "/about" },
};

export default function AboutPage() {
  return (
    <main id="main-content">
      <PageHero kicker="The shared address" title="The place behind the windmill." intro="One property on Daang Luma Road. A café and restaurant below the windmill, and an events place across the same grounds." image="/brand/venue/entrance-signage-windmill-mark-640x426.jpg" alt="Hillbarn's physical entrance signage" imagePosition="62% center" />
      <section className="about-grid">
        <div className="about-copy"><Kicker>Dutch barn · Tagaytay</Kicker><DisplayHeading>Painted and precise.</DisplayHeading><p>Hillbarn’s signature is a full windmill building with cream board siding, slate-coloured roofs, white trim, stone pillars, and gravel and cobblestone drives.</p><p>The café occupies the ground floor, with the main dining room above. The events place and reception hall sit on the same property.</p><EditorialQuote>A destination café by day. A celebration venue by season.</EditorialQuote></div>
        <div className="about-images"><div><BrandImage src="/brand/exterior/barn-buildings-driveway-361x640.jpg" alt="Hillbarn barn buildings and cobblestone drive" fill sizes="(max-width: 800px) 80vw, 30vw" /></div><div><BrandImage src="/brand/exterior/windmill-facade-schedule-graphic-414.jpg" alt="Hillbarn's published windmill facade schedule graphic" fill sizes="(max-width: 800px) 80vw, 30vw" /></div></div>
      </section>
      <section className="about-proof"><Kicker>The record</Kicker><DisplayHeading>Four years.<br />One favourite.</DisplayHeading><p>The Hillbarn Pork Chop has carried the published mark “Best Seller since May 2022.” It is the clearest verified time anchor in Hillbarn’s public material.</p><Button href="/dining" variant="light">See dining</Button></section>
    </main>
  );
}
