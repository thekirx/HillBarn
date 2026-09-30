import { BrandImage } from "@/components/media/BrandImage";
import { Button } from "@/components/ui/Button";
import { DisplayHeading, Kicker } from "@/components/ui/Typography";

const images = [
  ["/brand/social-reference/ig-cafe-11.jpg", "Hillbarn Sky Latte"],
  ["/brand/venue/entrance-signage-windmill-mark-640x426.jpg", "Hillbarn entrance signage"],
  ["/brand/food/porkchop-editorial-cream-poster-960x1200.jpg", "Hillbarn Pork Chop editorial poster"],
  ["/brand/weddings/reception-hall-florals-festoon-513x640.jpg", "Reception hall prepared for a celebration"],
  ["/brand/social-reference/ig-cafe-09.jpg", "Hillbarn S’mores"],
  ["/brand/social-reference/ig-cafe-07.jpg", "Hillbarn Chicken Drummets & Wings"],
] as const;

export function GalleryRail() {
  return (
    <section className="gallery-preview">
      <div className="gallery-preview__top"><div><Kicker>The place in pictures</Kicker><DisplayHeading>One hill.<br />Many reasons to come.</DisplayHeading></div><Button href="/gallery" variant="light">View gallery</Button></div>
      <div className="image-rail">{images.map(([src, alt], index) => <div className={`rail-frame rail-frame--${index % 3}`} key={src}><BrandImage src={src} alt={alt} fill sizes="(max-width: 700px) 70vw, 28vw" /></div>)}</div>
    </section>
  );
}
