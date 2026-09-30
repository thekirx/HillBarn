import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { InquiryForm } from "./InquiryForm";

function fillContactDetails() {
  fireEvent.change(screen.getByLabelText("Name"), { target: { value: "Maria Santos" } });
  fireEvent.change(screen.getByLabelText("Mobile"), { target: { value: "09171234567" } });
  fireEvent.change(screen.getByLabelText("Email"), { target: { value: "maria@example.com" } });
}

describe("inquiry form", () => {
  it("requires name, mobile, and email before preparing an inquiry", () => {
    render(<InquiryForm />);
    fireEvent.click(screen.getByRole("button", { name: "Prepare inquiry" }));
    expect(screen.getByText("Please enter your name.")).toBeVisible();
    expect(screen.getByText("Please enter your mobile number.")).toBeVisible();
    expect(screen.getByText("Please enter a valid email address.")).toBeVisible();
  });

  it("states that nothing has been sent, and hands over a prefilled email", () => {
    render(<InquiryForm />);
    fillContactDetails();
    fireEvent.click(screen.getByRole("button", { name: "Prepare inquiry" }));

    expect(screen.getByRole("status")).toHaveTextContent("Nothing has been sent yet.");
    const href = screen.getByRole("link", { name: "Open the prepared email" }).getAttribute("href") ?? "";
    expect(href).toMatch(/^mailto:hillbarncaferestaurant@gmail\.com\?/);
    const body = decodeURIComponent(new URL(href).searchParams.get("body") ?? "");
    expect(body).toContain("Event type: Wedding");
    expect(body).toContain("Name: Maria Santos");
    expect(body).toContain("Mobile: 09171234567");
  });

  it("carries the viewing intent from /inquire?intent=viewing into the request", () => {
    render(<InquiryForm viewing />);
    expect(screen.getByText(/book a viewing/i)).toBeVisible();

    fillContactDetails();
    fireEvent.click(screen.getByRole("button", { name: "Prepare viewing request" }));

    const href = screen.getByRole("link", { name: "Open the prepared email" }).getAttribute("href") ?? "";
    const params = new URL(href).searchParams;
    expect(params.get("subject")).toBe("Viewing request — Wedding");
    expect(decodeURIComponent(params.get("body") ?? "")).toContain("Requesting a viewing of the grounds: yes");
  });
});
