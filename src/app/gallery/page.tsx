import type { Metadata } from "next";
import { DisplayHeading, Kicker } from "@/components/ui/Typography";
import { GalleryFilter } from "@/features/gallery/GalleryFilter";

export const metadata: Metadata = {
  title: "Gallery",
  description: "The grounds, the dining room, and celebrations at Hillbarn in Tagaytay City, in Hillbarn's own published photography.",
  alternates: { canonical: "/gallery" },
  openGraph: { title: "Gallery | Hillbarn", description: "One hill, many reasons to come — Hillbarn Tagaytay in pictures.", url: "/gallery" },
};

export default function GalleryPage() {
  return (
    <main id="main-content" className="gallery-page">
      <header className="gallery-header"><Kicker>The grounds · Dining · Celebrations</Kicker><DisplayHeading as="h1" size="xl">The place<br />in pictures.</DisplayHeading><p>Only Hillbarn’s own published imagery appears here.</p></header>
      <GalleryFilter />
    </main>
  );
}
