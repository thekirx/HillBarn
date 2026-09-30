"use client";

import { useState } from "react";
import { BrandImage } from "@/components/media/BrandImage";
import { galleryItems, type GalleryCategory } from "./gallery-data";

const categories = ["All", "The Grounds", "Dining", "Celebrations"] as const;

export function GalleryFilter() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const visible = active === "All" ? galleryItems : galleryItems.filter((item) => item.category === active);

  return (
    <div className="gallery-filter">
      <div className="gallery-tabs" role="group" aria-label="Gallery filters">
        {categories.map((category) => <button type="button" key={category} aria-pressed={active === category} onClick={() => setActive(category as "All" | GalleryCategory)}>{category}</button>)}
      </div>
      <div className="gallery-masonry" aria-live="polite">
        {visible.map((item) => <figure key={item.src} className={`gallery-item gallery-item--${item.ratio}`}><BrandImage src={item.src} alt={item.alt} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" /><figcaption>{item.category}</figcaption></figure>)}
      </div>
    </div>
  );
}
