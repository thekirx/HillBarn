import { Button } from "@/components/ui/Button";
import { DisplayHeading } from "@/components/ui/Typography";

export function TrackSplit() {
  return (
    <section className="track-split" aria-label="Choose your Hillbarn experience">
      <article>
        <DisplayHeading as="h2" size="medium">Come for lunch</DisplayHeading>
        <p>A Dutch barn-themed café and restaurant in the heart of Tagaytay City.</p>
        <Button href="/dining" variant="text">Explore dining</Button>
      </article>
      <article>
        <DisplayHeading as="h2" size="medium">Celebrate here</DisplayHeading>
        <p>A barn-themed events and wedding venue, on the same grounds.</p>
        <Button href="/events" variant="text">Explore events</Button>
      </article>
    </section>
  );
}
