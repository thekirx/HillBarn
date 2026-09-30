import { BrandImage } from "@/components/media/BrandImage";
import { Button } from "@/components/ui/Button";
import { SealBadge } from "@/components/ui/SealBadge";
import { DisplayHeading, EditorialQuote, Kicker } from "@/components/ui/Typography";

export function SignatureDish() {
  return (
    <section className="signature-section">
      <div className="signature-image">
        <BrandImage src="/brand/food/porkchop-darkwood-poster-960x1200.jpg" alt="Hillbarn's published poster for The Hillbarn Pork Chop" fill sizes="(max-width: 800px) 100vw, 48vw" />
      </div>
      <div className="signature-copy">
        <Kicker>The signature</Kicker>
        <DisplayHeading>The Hillbarn<br />Pork Chop.</DisplayHeading>
        <SealBadge top="Best seller" middle="4 yrs" bottom="Since May 2022" />
        <EditorialQuote>Bought by the regulars, four years and counting.</EditorialQuote>
        <Button href="/dining" variant="light">See dining</Button>
      </div>
    </section>
  );
}
