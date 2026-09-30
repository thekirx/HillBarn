import { BrandImage } from "@/components/media/BrandImage";
import { DisplayHeading, EditorialQuote, Kicker } from "@/components/ui/Typography";

export function Introduction() {
  return (
    <section className="editorial-pair introduction">
      <div className="editorial-copy">
        <Kicker>One property · Two ways to arrive</Kicker>
        <DisplayHeading>A Dutch barn on Daang Luma.</DisplayHeading>
        <p>Hillbarn is a café and restaurant, and an events place, sharing one unmistakable Tagaytay address.</p>
        <EditorialQuote>The well-kept country house that knows it looks good, and still asks if you’ve eaten.</EditorialQuote>
      </div>
      <div className="editorial-image editorial-image--landscape">
        <BrandImage src="/brand/venue/entrance-signage-windmill-mark-640x426.jpg" alt="Hillbarn Tagaytay entrance signage with its windmill mark" fill sizes="(max-width: 800px) 100vw, 55vw" />
      </div>
    </section>
  );
}
