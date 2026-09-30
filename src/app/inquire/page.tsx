import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { DisplayHeading, Kicker } from "@/components/ui/Typography";
import { siteContent } from "@/content/site";
import { InquiryForm } from "@/features/inquiry/InquiryForm";

export const metadata: Metadata = {
  title: "Inquire",
  description:
    "Ask Hillbarn about availability, rates, and viewings for weddings, birthdays, debuts, and private functions in Tagaytay City.",
  alternates: { canonical: "/inquire" },
  openGraph: {
    title: "Inquire | Hillbarn",
    description: "Ask Hillbarn about availability, rates, and viewings for your event in Tagaytay City.",
    url: "/inquire",
  },
};

const copy = {
  viewing: {
    kicker: "Book a viewing",
    title: "Come and see\nthe grounds.",
    intro: "Ask to walk the property before you decide. Tell Hillbarn when you would like to visit and what you are planning.",
  },
  default: {
    kicker: "Events, weddings & groups",
    title: "Tell us about\nthe day.",
    intro: "Share the occasion, a date and a rough guest count. Hillbarn will come back with availability and rates.",
  },
} as const;

export default async function InquirePage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const viewing = (await searchParams).intent === "viewing";
  const { kicker, title, intro } = viewing ? copy.viewing : copy.default;
  const [titleTop, titleBottom] = title.split("\n");

  return (
    <main id="main-content" className="inquire-page">
      <header className="inquire-heading">
        <Kicker>{kicker}</Kicker>
        <DisplayHeading as="h1" size="xl">{titleTop}<br />{titleBottom}</DisplayHeading>
        <p>{intro}</p>
      </header>
      <div className="inquire-layout">
        <InquiryForm viewing={viewing} />
        <aside className="inquiry-aside">
          <Kicker>Prefer to talk?</Kicker>
          <a className="inquiry-phone" href={siteContent.phone.href}>{siteContent.phone.display}</a>
          <div className="aside-process"><span>What happens next</span><ol><li>Ask for availability and rates.</li><li>Arrange a viewing of the grounds.</li><li>Choose from accredited caterers.</li></ol></div>
          <div className="button-row"><Button href={siteContent.messenger.href} variant="primary">Message on Messenger</Button><Button href={siteContent.email.href} variant="light">Email Hillbarn</Button></div>
        </aside>
      </div>
    </main>
  );
}
