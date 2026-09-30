import type { MetadataRoute } from "next";
import { siteContent, siteUrl } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes = ["/", ...siteContent.navigation.map((item) => item.href), "/inquire"];

  return routes.map((href) => ({
    url: new URL(href, siteUrl).toString(),
    lastModified,
    changeFrequency: "monthly",
    priority: href === "/" ? 1 : 0.8,
  }));
}
