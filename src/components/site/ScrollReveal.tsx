"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Marks each page section as it enters the viewport so CSS can play the "turning pages"
 * entrance (fade + rise, image wipe) once. Content stays fully visible without JS:
 * the hidden starting state only applies under html.has-reveal, which is set here.
 */
export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main section, main > header, .inquire-layout"));
    if (!("IntersectionObserver" in window)) return;
    document.documentElement.classList.add("has-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute("data-inview", "true");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );

    for (const section of sections) {
      if (section.dataset.inview === "true") continue;
      section.setAttribute("data-reveal", "");
      observer.observe(section);
    }
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
