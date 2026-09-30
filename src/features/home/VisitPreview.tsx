import { BrandImage } from "@/components/media/BrandImage";
import { Button } from "@/components/ui/Button";
import { DisplayHeading, Kicker } from "@/components/ui/Typography";
import { siteContent } from "@/content/site";

export function VisitPreview() {
  return (
    <section className="visit-preview">
      <div className="visit-preview__copy">
        <Kicker>Find the windmill</Kicker>
        <DisplayHeading>Come up<br />to Tagaytay.</DisplayHeading>
        <dl>
          <div><dt>Address</dt><dd>{siteContent.location.shortAddress}</dd></div>
          <div><dt>Coordinates</dt><dd>{siteContent.location.coordinates}</dd></div>
          <div><dt>Before you drive</dt><dd>{siteContent.visit.hours}</dd></div>
        </dl>
        <div className="button-row"><Button href={siteContent.location.directionsHref} variant="primary">Get directions</Button><Button href="/visit" variant="text">Plan your visit</Button></div>
      </div>
      <div className="visit-preview__image"><BrandImage src="/brand/social-reference/ig-cafe-05.jpg" alt="A visitor walking up to the Hillbarn windmill" fill sizes="(max-width: 800px) 100vw, 50vw" /></div>
    </section>
  );
}
