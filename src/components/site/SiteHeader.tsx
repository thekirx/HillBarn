"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { siteContent } from "@/content/site";
import { MobileMenu } from "./MobileMenu";

/**
 * Routes whose first screen is the cream ground. The header is transparent until it
 * scrolls, so on these it has to switch to ink type — cream on cream is invisible.
 * Add any new light-opening route here.
 */
const LIGHT_GROUND_ROUTES = new Set(["/about", "/visit", "/inquire"]);

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const closeMenu = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLink = (item: { label: string; href: string }) => (
    <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined}>
      {item.label}
    </Link>
  );

  return (
    <>
      <header className="site-header" data-scrolled={scrolled} data-ground={LIGHT_GROUND_ROUTES.has(pathname) ? "light" : "dark"}>
        <nav className="site-header__nav" aria-label="Primary navigation">
          <div className="site-header__side site-header__side--left">
            {siteContent.navigation.slice(0, 2).map(navLink)}
          </div>
          <Link href="/" className="wordmark" aria-label="Hillbarn home">
            <strong>Hillbarn</strong>
            <span>Café · Events · Tagaytay</span>
          </Link>
          <div className="site-header__side site-header__side--right">
            {siteContent.navigation.slice(2).map(navLink)}
            <Link className="header-inquire" href="/inquire" aria-current={pathname === "/inquire" ? "page" : undefined}>Inquire</Link>
          </div>
          <button type="button" className="menu-trigger" id="menu-trigger" aria-label="Open menu" aria-controls="mobile-menu" aria-expanded={open} onClick={() => setOpen(true)}>
            <span>Menu</span><i /><i />
          </button>
        </nav>
      </header>
      <MobileMenu open={open} onClose={closeMenu} />
    </>
  );
}
