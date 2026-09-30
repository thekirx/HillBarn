import { BrandImage } from "@/components/media/BrandImage";
import { Button } from "@/components/ui/Button";
import { DisplayHeading, Kicker } from "@/components/ui/Typography";
import { siteContent } from "@/content/site";

export function Hero() {
  return (
    <section className="home-hero">
      {/* The aerial carries Hillbarn's own script title, so it is shown whole rather than
          covered by a text panel; the headline sits in the ink band beneath it. */}
      <div className="home-hero__frame">
        <BrandImage src="/brand/exterior/hero-aerial-windmill-golden-hour-2048x824.jpg" alt="Aerial view of Hillbarn's windmill at golden hour" fill loading="eager" fetchPriority="high" sizes="100vw" className="home-hero__image" />
      </div>
      <div className="home-hero__content">
        <div className="home-hero__lead">
          <Kicker>Tagaytay City · Since 2022</Kicker>
          <DisplayHeading as="h1" size="xl">
            <span className="line"><span>The windmill</span></span>{" "}
            <span className="line"><span>on Daang Luma.</span></span>
          </DisplayHeading>
        </div>
        <div className="home-hero__aside">
          <p>A Dutch barn café in Tagaytay — and the place where the day happens.</p>
          <div className="hero-actions">
            <Button href="/dining" variant="light">See the menu</Button>
            <Button href="/inquire" variant="primary">Enquire about your event</Button>
          </div>
        </div>
      </div>
      <ul className="proof-strip" aria-label="Hillbarn at a glance">
        {siteContent.proof.map((item) => (
          <li key={item.label}><strong>{item.value}</strong><span>{item.label}</span></li>
        ))}
      </ul>
    </section>
  );
}
