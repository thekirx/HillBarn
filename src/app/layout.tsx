import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import type { ReactNode } from "react";
import { MobileActionBar } from "@/components/site/MobileActionBar";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { StructuredData } from "@/components/site/StructuredData";
import { siteContent, siteUrl } from "@/content/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });

const shareImage = {
  url: siteContent.shareImage.src,
  width: siteContent.shareImage.width,
  height: siteContent.shareImage.height,
  alt: siteContent.shareImage.alt,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Hillbarn | Café & Events in Tagaytay", template: "%s | Hillbarn" },
  description: siteContent.brand.tagline,
  applicationName: siteContent.brand.name,
  keywords: [
    "Hillbarn",
    "Hillbarn Tagaytay",
    "Tagaytay café",
    "Tagaytay restaurant",
    "Tagaytay events place",
    "Tagaytay wedding venue",
    "Daang Luma Road",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: siteContent.brand.name,
    title: "Hillbarn | Café & Events in Tagaytay",
    description: siteContent.brand.tagline,
    url: "/",
    locale: "en_PH",
    images: [shareImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hillbarn | Café & Events in Tagaytay",
    description: siteContent.brand.tagline,
    images: [shareImage.url],
  },
  robots: { index: true, follow: true },
  formatDetection: { telephone: true, address: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3efe4" },
    { media: "(prefers-color-scheme: dark)", color: "#221e15" },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <MobileActionBar />
        <StructuredData />
        <ScrollReveal />
      </body>
    </html>
  );
}
