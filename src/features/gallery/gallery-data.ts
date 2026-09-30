export type GalleryCategory = "The Grounds" | "Dining" | "Celebrations";

export const galleryItems = [
  { src: "/brand/exterior/hero-aerial-windmill-golden-hour-2048x824.jpg", alt: "Hillbarn windmill at golden hour", category: "The Grounds", ratio: "wide" },
  { src: "/brand/venue/entrance-signage-windmill-mark-640x426.jpg", alt: "Hillbarn entrance signage", category: "The Grounds", ratio: "wide" },
  { src: "/brand/exterior/barn-buildings-driveway-361x640.jpg", alt: "Hillbarn barn buildings and driveway", category: "The Grounds", ratio: "portrait" },
  { src: "/brand/social-reference/ig-cafe-05.jpg", alt: "Visitor facing the Hillbarn windmill", category: "The Grounds", ratio: "portrait" },
  { src: "/brand/food/porkchop-darkwood-poster-960x1200.jpg", alt: "The Hillbarn Pork Chop", category: "Dining", ratio: "portrait" },
  { src: "/brand/food/classic-burger-414.jpg", alt: "Hillbarn Classic Burger poster", category: "Dining", ratio: "square" },
  { src: "/brand/social-reference/ig-cafe-02.jpg", alt: "Hillbarn Steak Fries poster", category: "Dining", ratio: "portrait" },
  { src: "/brand/social-reference/ig-cafe-06.jpg", alt: "Hillbarn Dalgona Coffee Brownie poster", category: "Dining", ratio: "portrait" },
  { src: "/brand/weddings/reception-hall-florals-festoon-513x640.jpg", alt: "Reception hall dressed for a celebration", category: "Celebrations", ratio: "portrait" },
  { src: "/brand/venue/tasting-room-teal-graphic-512x640.jpg", alt: "The Tasting Room event poster", category: "Celebrations", ratio: "portrait" },
] as const;
