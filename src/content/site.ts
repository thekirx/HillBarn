// Hillbarn has no live domain yet (see README). The placeholder below only shapes
// canonical URLs, OG tags, robots.txt and the sitemap — set NEXT_PUBLIC_SITE_URL to the
// real domain before launch.
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://hillbarn.ph";

export const siteContent = {
  brand: {
    name: "Hillbarn",
    cafeDescriptor: "Café & Restaurant",
    eventsDescriptor: "Tagaytay · Events",
    established: "Since 2022",
    tagline: "A Dutch barn café, restaurant, and events place on Daang Luma Road in Tagaytay City.",
  },
  shareImage: {
    src: "/brand/exterior/hero-aerial-windmill-golden-hour-2048x824.jpg",
    width: 2048,
    height: 824,
    alt: "Hillbarn's windmill and grounds on Daang Luma Road, Tagaytay, at golden hour",
  },
  navigation: [
    { label: "Dining", href: "/dining" },
    { label: "Events", href: "/events" },
    { label: "Gallery", href: "/gallery" },
    { label: "About", href: "/about" },
    { label: "Visit", href: "/visit" },
  ],
  phone: {
    display: "0917 162 1254",
    href: "tel:+639171621254",
  },
  // m.me handle is the café's Facebook page username (facebook.com/hillbarncaferestaurant).
  messenger: {
    display: "Message us",
    href: "https://m.me/hillbarncaferestaurant",
  },
  email: {
    display: "hillbarncaferestaurant@gmail.com",
    href: "mailto:hillbarncaferestaurant@gmail.com",
  },
  location: {
    address: "Daang Luma Rd, Kaybagal North, Tagaytay City, Philippines",
    shortAddress: "Daang Luma Road, Kaybagal North, Tagaytay City",
    coordinates: "14.120137 N, 120.936327 E",
    directionsHref: "https://www.google.com/maps/dir/?api=1&destination=14.120137,120.936327",
    parking: "Large gravel parking areas sit in front of the property and across the road.",
  },
  visit: {
    hours: "Please call ahead — 0917 162 1254.",
    closure: "Closed every 1st Tuesday of the month for general cleaning.",
    accessibility: "Second-floor dining is accessed by stairs.",
  },
  social: {
    facebook: "https://www.facebook.com/hillbarncaferestaurant",
    cafeInstagram: "https://www.instagram.com/hillbarncaferestaurant/",
    eventsInstagram: "https://www.instagram.com/hillbarn_tagaytay/",
    tiktok: "https://www.tiktok.com/@hillbarncaferestaurant",
  },
  menuItems: [
    "The Hillbarn Pork Chop",
    "Steak Fries",
    "Steak Sandwich",
    "BLT Sandwich",
    "Chicken Drummets & Wings",
    "Dalgona Coffee Brownie",
    "Ultimate Chicken Fingers",
    "S’mores",
    "Hillbarn Sky Latte",
  ],
  // Every figure here is verified in docs/brand-research — nothing estimated.
  proof: [
    { value: "114K", label: "Follow Hillbarn on Facebook" },
    { value: "Since 2022", label: "The Pork Chop, still the best seller" },
    { value: "One address", label: "Café and events place, side by side" },
    { value: "1.5–2 hrs", label: "From Manila via SLEX" },
  ],
  caterers: ["Laurentino’s Catering & Events", "Juan Carlo", "Town’s Delight"],
  eventFaq: [
    {
      q: "Does Hillbarn cater events itself?",
      a: "Hillbarn provides the venue. Food for large events is served by accredited caterer partners, so you choose the menu and package that suits your day.",
    },
    {
      q: "How many guests can the venue hold?",
      a: "Capacity depends on the layout you choose. Ask for availability and Hillbarn will confirm what works for your guest count.",
    },
    {
      q: "Can we see the grounds before booking?",
      a: "Yes — book a viewing. Because the café shares the property, you can have lunch and walk the venue in a single trip.",
    },
    {
      q: "Can the ceremony and reception both be held here?",
      a: "Tell Hillbarn your plans in the inquiry form (on-site, off-site or undecided) and they will advise on the options for your date.",
    },
    {
      q: "Is there parking for guests?",
      a: "Large gravel parking areas sit in front of the property and across the road.",
    },
  ],
  inquiryTypes: ["Wedding", "Birthday / Debut", "Other"],
} as const;

export type SiteContent = typeof siteContent;
