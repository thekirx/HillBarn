import type { Metadata } from "next";
import { BrandImage } from "@/components/media/BrandImage";
import { Button } from "@/components/ui/Button";
import { DisplayHeading, EditorialQuote, Kicker } from "@/components/ui/Typography";
import { siteContent } from "@/content/site";
import { PageHero } from "@/features/routes/PageHero";

export const metadata: Metadata = {
  title: "Dining",
  description:
    "Hillbarn Café & Restaurant in Tagaytay — made from scratch and served all day, with the main dining room inside the windmill.",
  alternates: { canonical: "/dining" },
  openGraph: { title: "Dining | Hillbarn", description: "Made from scratch. Served all day. The café and dining room inside Hillbarn's windmill.", url: "/dining" },
};

export default function DiningPage() {
  return (
    <main id="main-content">
      <PageHero kicker="Hillbarn Café & Restaurant" title="Made from scratch. Served all day." intro="The café begins on the ground floor. The main dining room sits above, inside the windmill structure." image="/brand/food/porkchop-overhead-wordmark-960x1200.jpg" alt="Overhead Hillbarn Pork Chop poster" tone="night" imagePosition="center 55%" />
      <section className="menu-section">
        <div className="menu-heading"><Kicker>A taste of Hillbarn</Kicker><DisplayHeading>From the table.</DisplayHeading><EditorialQuote>Made from scratch. No fillers added.</EditorialQuote></div>
        <div className="menu-list" aria-label="Menu highlights">
          {siteContent.menuItems.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, "0")}</span><h2>{item}</h2></div>)}
          <p>Items shown are drawn from Hillbarn’s published material. Please confirm current availability on arrival.</p>
        </div>
      </section>
      <section className="dining-story">
        <div className="dining-story__image"><BrandImage src="/brand/social-reference/ig-cafe-03.jpg" alt="Hillbarn Steak Sandwich poster" fill sizes="(max-width: 800px) 100vw, 42vw" /></div>
        <div><Kicker>Two floors · One windmill</Kicker><DisplayHeading>Stay a while.</DisplayHeading><p>Hillbarn’s ground floor houses the café. The second-floor dining room follows the sloping walls of the windmill building. Outdoor seating is also available at the rear and side.</p><Button href="/visit" variant="primary">Plan your visit</Button></div>
      </section>
    </main>
  );
}
