import { siteContent, siteUrl } from "@/content/site";

/**
 * Restaurant + EventVenue markup so the two arms of the property resolve to one
 * business in local search. Only facts verified in docs/brand-research are emitted —
 * hours, capacity and pricing stay out until Hillbarn confirms them.
 */
const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Restaurant",
      "@id": `${siteUrl}/#restaurant`,
      name: `${siteContent.brand.name} Café & Restaurant`,
      description: siteContent.brand.tagline,
      url: siteUrl,
      image: `${siteUrl}${siteContent.shareImage.src}`,
      telephone: "+639171621254",
      email: siteContent.email.display,
      servesCuisine: "Filipino, American",
      address: { "@id": `${siteUrl}/#address` },
      geo: { "@type": "GeoCoordinates", latitude: 14.120137, longitude: 120.936327 },
      hasMap: siteContent.location.directionsHref,
      sameAs: [
        siteContent.social.facebook,
        siteContent.social.cafeInstagram,
        siteContent.social.tiktok,
      ],
    },
    {
      "@type": "EventVenue",
      "@id": `${siteUrl}/#events`,
      name: `${siteContent.brand.name} Tagaytay Events Place`,
      description: "A barn-themed setting for weddings, birthdays, debuts, and private functions in Tagaytay City.",
      url: `${siteUrl}/events`,
      telephone: "+639171621254",
      address: { "@id": `${siteUrl}/#address` },
      geo: { "@type": "GeoCoordinates", latitude: 14.120137, longitude: 120.936327 },
      sameAs: [siteContent.social.eventsInstagram],
    },
    {
      "@type": "PostalAddress",
      "@id": `${siteUrl}/#address`,
      streetAddress: "Daang Luma Road",
      addressLocality: "Tagaytay City",
      addressRegion: "Cavite",
      addressCountry: "PH",
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: siteContent.brand.name,
      url: siteUrl,
      inLanguage: "en",
      publisher: { "@id": `${siteUrl}/#restaurant` },
    },
  ],
};

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
