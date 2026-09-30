import { DiningPreview } from "@/features/home/DiningPreview";
import { EventProcess } from "@/features/home/EventProcess";
import { EventsPreview } from "@/features/home/EventsPreview";
import { FinalConversion } from "@/features/home/FinalConversion";
import { GalleryRail } from "@/features/home/GalleryRail";
import { Hero } from "@/features/home/Hero";
import { Introduction } from "@/features/home/Introduction";
import { SignatureDish } from "@/features/home/SignatureDish";
import { TrackSplit } from "@/features/home/TrackSplit";
import { VisitPreview } from "@/features/home/VisitPreview";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <TrackSplit />
      <Introduction />
      <SignatureDish />
      <DiningPreview />
      <EventsPreview />
      <EventProcess />
      <GalleryRail />
      <VisitPreview />
      <FinalConversion />
    </main>
  );
}
