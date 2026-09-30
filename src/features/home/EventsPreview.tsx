import { BrandImage } from "@/components/media/BrandImage";
import { Button } from "@/components/ui/Button";
import { DisplayHeading, Kicker } from "@/components/ui/Typography";

export function EventsPreview() {
  return (
    <>
      <section className="venue-band">
        <BrandImage src="/brand/weddings/reception-hall-florals-festoon-513x640.jpg" alt="Hillbarn reception hall dressed with suspended florals and festoon lights" fill sizes="100vw" />
        <div className="venue-band__label"><Kicker>Events at Hillbarn</Kicker><DisplayHeading>A barn set<br />for the day.</DisplayHeading></div>
      </section>
      <section className="weddings-pair">
        <div className="weddings-image"><BrandImage src="/brand/exterior/barn-buildings-driveway-361x640.jpg" alt="Hillbarn's barn buildings and cobblestone driveway" fill sizes="(max-width: 800px) 100vw, 42vw" /></div>
        <div className="weddings-copy">
          <Kicker>Weddings & celebrations</Kicker>
          <DisplayHeading>Say it under<br />the windmill.</DisplayHeading>
          <p>Hillbarn’s events place and café share the same grounds on Daang Luma Road. Come to see the setting, then ask about availability and rates.</p>
          <div className="button-row"><Button href="/inquire" variant="light">Request a quotation</Button><Button href="/inquire?intent=viewing" variant="text">Book a viewing</Button></div>
        </div>
      </section>
    </>
  );
}
