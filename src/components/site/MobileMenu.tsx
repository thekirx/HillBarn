"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { siteContent } from "@/content/site";

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKeyDown);
      document.getElementById("menu-trigger")?.focus();
    };
  }, [open, onClose]);

  return (
    <div className="mobile-menu" id="mobile-menu" data-open={open} aria-hidden={!open} inert={!open}>
      <div className="mobile-menu__top">
        <span className="wordmark wordmark--dark">Hillbarn</span>
        <button type="button" ref={closeRef} className="menu-close" aria-label="Close menu" onClick={onClose}>Close</button>
      </div>
      <nav aria-label="Mobile navigation" className="mobile-menu__nav">
        {siteContent.navigation.map((item) => (
          <Link key={item.href} href={item.href} onClick={onClose}>{item.label}</Link>
        ))}
        <Link href="/inquire" onClick={onClose}>Inquire</Link>
      </nav>
      <div className="mobile-menu__contact">
        <a href={siteContent.phone.href}>{siteContent.phone.display}</a>
        <a href={siteContent.location.directionsHref}>Get directions</a>
      </div>
    </div>
  );
}
