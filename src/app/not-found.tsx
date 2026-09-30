import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { DisplayHeading, Kicker } from "@/components/ui/Typography";
import { siteContent } from "@/content/site";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main id="main-content" className="not-found">
      <div className="not-found__inner">
        <Kicker>Error 404</Kicker>
        <DisplayHeading as="h1" size="xl">Nothing<br />on this road.</DisplayHeading>
        <p>The page you were looking for is not here. The windmill, however, has not moved.</p>
        <div className="button-row">
          <Button href="/" variant="light">Back to Hillbarn</Button>
          <Button href="/visit" variant="light">Plan your visit</Button>
        </div>
        <nav className="not-found__links" aria-label="Site sections">
          {siteContent.navigation.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>
      </div>
    </main>
  );
}
