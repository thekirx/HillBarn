import { BrandImage } from "@/components/media/BrandImage";
import { DisplayHeading, Kicker } from "@/components/ui/Typography";

export function PageHero({ kicker, title, intro, image, alt, tone = "paper", imagePosition = "center" }: {
  kicker: string;
  title: string;
  intro: string;
  image: string;
  alt: string;
  tone?: "paper" | "night" | "grounds";
  imagePosition?: string;
}) {
  return (
    <section className="page-hero" data-tone={tone}>
      <div className="page-hero__copy"><Kicker>{kicker}</Kicker><DisplayHeading as="h1" size="xl">{title}</DisplayHeading><p>{intro}</p></div>
      <div className="page-hero__image"><BrandImage src={image} alt={alt} fill loading="eager" fetchPriority="high" sizes="(max-width: 900px) 100vw, 50vw" style={{ objectPosition: imagePosition }} /></div>
    </section>
  );
}
