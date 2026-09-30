import { Button } from "@/components/ui/Button";
import { DisplayHeading, Kicker } from "@/components/ui/Typography";

export function FinalConversion() {
  return (
    <section className="final-conversion">
      <div><Kicker>The café</Kicker><DisplayHeading as="h2" size="medium">Come for the table.</DisplayHeading><Button href="/visit" variant="light">Plan your visit</Button></div>
      <div><Kicker>The events place</Kicker><DisplayHeading as="h2" size="medium">Come for the day.</DisplayHeading><Button href="/inquire" variant="primary">Enquire about your event</Button></div>
    </section>
  );
}
