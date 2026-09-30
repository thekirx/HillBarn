import Link from "next/link";
import { siteContent } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="footer-brand">
          <Link href="/" className="wordmark wordmark--footer" aria-label="Hillbarn home">
            <strong>Hillbarn</strong>
            <span>Café · Events · Tagaytay</span>
          </Link>
          <p>{siteContent.location.address}</p>
          <p className="coordinates">{siteContent.location.coordinates}</p>
        </div>
        <nav aria-label="Footer navigation" className="footer-nav">
          {siteContent.navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          <Link href="/inquire">Inquire</Link>
        </nav>
        <div className="footer-contact">
          <span>Call ahead</span>
          <a href={siteContent.phone.href}>{siteContent.phone.display}</a>
          <a href={siteContent.email.href}>{siteContent.email.display}</a>
          <a className="footer-messenger" href={siteContent.messenger.href}>Message us on Messenger →</a>
          <div className="footer-socials">
            <a href={siteContent.social.facebook}>Facebook</a>
            <a href={siteContent.social.cafeInstagram}>Café Instagram</a>
            <a href={siteContent.social.eventsInstagram}>Events Instagram</a>
          </div>
        </div>
      </div>
      <p className="site-footer__note">Website preview prepared for Hillbarn. Photography and artwork © Hillbarn, shown with the intent to replace with original files at launch.</p>
    </footer>
  );
}
