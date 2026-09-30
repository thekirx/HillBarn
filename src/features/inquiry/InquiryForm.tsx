"use client";

import { useState, type FormEvent } from "react";
import { siteContent } from "@/content/site";

type Errors = Partial<Record<"name" | "mobile" | "email", string>>;

function buildMailto(data: FormData, viewing: boolean) {
  const value = (key: string) => String(data.get(key) ?? "").trim();
  const eventType = value("eventType");
  const lines = [
    `Event type: ${eventType}`,
    `Preferred date: ${value("date") || "Not decided"}${data.get("flexible") ? " (flexible)" : ""}`,
    `Estimated guests: ${value("guests")}`,
    `Ceremony preference: ${value("ceremony") || "Undecided"}`,
    viewing ? "Requesting a viewing of the grounds: yes" : null,
    "",
    `Name: ${value("name")}`,
    `Mobile: ${value("mobile")}`,
    `Email: ${value("email")}`,
    "",
    value("message") || "(no additional message)",
  ].filter((line) => line !== null);

  const subject = viewing ? `Viewing request — ${eventType}` : `Event inquiry — ${eventType}`;
  return `${siteContent.email.href}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
}

export function InquiryForm({ viewing = false }: { viewing?: boolean }) {
  const [type, setType] = useState("Wedding");
  const [errors, setErrors] = useState<Errors>({});
  const [mailto, setMailto] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const next: Errors = {};
    if (!String(data.get("name") ?? "").trim()) next.name = "Please enter your name.";
    if (!String(data.get("mobile") ?? "").trim()) next.mobile = "Please enter your mobile number.";
    const email = String(data.get("email") ?? "").trim();
    if (!/^\S+@\S+\.\S+$/.test(email)) next.email = "Please enter a valid email address.";
    setErrors(next);
    setMailto(Object.keys(next).length === 0 ? buildMailto(data, viewing) : null);
  }

  return (
    <form className="inquiry-form" noValidate onSubmit={handleSubmit}>
      {viewing ? (
        <p className="form-intent">
          You asked to <strong>book a viewing</strong>. Fill in the details below and your
          request will be prepared as an email to Hillbarn.
        </p>
      ) : null}

      <fieldset>
        <legend>What are you planning?</legend>
        <div className="choice-row">
          {siteContent.inquiryTypes.map((item) => <button key={item} className="choice-button" type="button" aria-pressed={type === item} onClick={() => setType(item)}>{item}</button>)}
        </div>
        <input type="hidden" name="eventType" value={type} />
      </fieldset>

      <fieldset>
        <legend>The details</legend>
        <div className="form-grid">
          <label>Preferred date<input type="date" name="date" /></label>
          <label className="check-label"><input type="checkbox" name="flexible" /> My date is flexible</label>
          <label>Estimated guests<select name="guests" defaultValue="not-sure"><option value="not-sure">Not sure yet</option><option>Under 50</option><option>50–100</option><option>101–200</option><option>More than 200</option></select></label>
          <fieldset className="nested-fieldset"><legend>Ceremony preference</legend><div className="radio-row"><label><input type="radio" name="ceremony" value="on-site" /> On-site</label><label><input type="radio" name="ceremony" value="off-site" /> Off-site</label><label><input type="radio" name="ceremony" value="undecided" defaultChecked /> Undecided</label></div></fieldset>
        </div>
      </fieldset>

      <fieldset>
        <legend>You</legend>
        <div className="form-grid form-grid--contact">
          <label>Name<input name="name" autoComplete="name" aria-describedby={errors.name ? "name-error" : undefined} aria-invalid={Boolean(errors.name)} />{errors.name ? <span id="name-error" className="field-error">{errors.name}</span> : null}</label>
          <label>Mobile<input name="mobile" inputMode="tel" autoComplete="tel" aria-describedby={errors.mobile ? "mobile-error" : undefined} aria-invalid={Boolean(errors.mobile)} />{errors.mobile ? <span id="mobile-error" className="field-error">{errors.mobile}</span> : null}</label>
          <label>Email<input name="email" type="email" autoComplete="email" aria-describedby={errors.email ? "email-error" : undefined} aria-invalid={Boolean(errors.email)} />{errors.email ? <span id="email-error" className="field-error">{errors.email}</span> : null}</label>
          <label className="form-message">Message <span>(optional)</span><textarea name="message" rows={5} /></label>
        </div>
      </fieldset>

      <button className="submit-button" type="submit">{viewing ? "Prepare viewing request" : "Prepare inquiry"}</button>
      <p className="form-disclaimer">Your inquiry opens as a pre-filled email to Hillbarn — nothing is sent until you press send.</p>
      {mailto ? (
        <div className="form-success" role="status">
          <strong>Your details are ready.</strong>
          <span>Opening the link below starts an email to Hillbarn with everything you entered. Nothing has been sent yet.</span>
          <a href={mailto}>Open the prepared email</a>
        </div>
      ) : null}
    </form>
  );
}
