import { Button } from "@/components/ui/Button";
import { DisplayHeading, Kicker } from "@/components/ui/Typography";

const steps = [
  ["01", "Ask for availability and rates", "Tell Hillbarn what you are planning and the date you have in mind."],
  ["02", "Come and see the grounds", "Arrange a viewing before you decide."],
  ["03", "Choose from accredited caterers", "Large events are served through Hillbarn’s caterer partners."],
] as const;

export function EventProcess() {
  return (
    <section className="event-process">
      <div className="process-heading"><Kicker>How an event works</Kicker><DisplayHeading>One place.<br />A clear next step.</DisplayHeading></div>
      <div className="process-steps">
        {steps.map(([number, title, body]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>)}
      </div>
      <Button href="/events" variant="light">Explore events</Button>
    </section>
  );
}
