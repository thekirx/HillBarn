import { BrandImage } from "@/components/media/BrandImage";
import { Button } from "@/components/ui/Button";
import { DisplayHeading, Kicker } from "@/components/ui/Typography";

const frames = [
  ["/brand/social-reference/ig-cafe-02.jpg", "Hillbarn Steak Fries poster"],
  ["/brand/social-reference/ig-cafe-03.jpg", "Hillbarn Steak Sandwich poster"],
  ["/brand/social-reference/ig-cafe-06.jpg", "Hillbarn Dalgona Coffee Brownie poster"],
] as const;

export function DiningPreview() {
  return (
    <section className="dining-preview">
      <div className="dining-preview__heading">
        <div><Kicker>Dining at Hillbarn</Kicker><DisplayHeading>Made from scratch.<br />Served all day.</DisplayHeading></div>
        <div><p>The café sits on the ground floor, with the main dining room above inside the windmill structure.</p><Button href="/dining" variant="text">See the menu</Button></div>
      </div>
      <div className="dining-frames">
        {frames.map(([src, alt]) => <div className="dining-frame" key={src}><BrandImage src={src} alt={alt} fill sizes="(max-width: 700px) 72vw, 30vw" /></div>)}
      </div>
    </section>
  );
}
