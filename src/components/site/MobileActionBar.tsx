"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { siteContent } from "@/content/site";

export function MobileActionBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="mobile-actions" data-visible={visible} aria-label="Quick actions">
      <a href={siteContent.phone.href}>Call</a>
      <a href={siteContent.messenger.href}>Message</a>
      <a href={siteContent.location.directionsHref}>Directions</a>
      <Link href="/inquire">Inquire</Link>
    </nav>
  );
}
