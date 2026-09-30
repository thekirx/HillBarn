import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import AboutPage from "@/app/about/page";
import DiningPage from "@/app/dining/page";
import EventsPage from "@/app/events/page";
import VisitPage from "@/app/visit/page";

describe("information routes", () => {
  it("routes diners toward a visit without implying reservations", () => {
    render(<DiningPage />);
    expect(screen.getByRole("link", { name: "Plan your visit" })).toHaveAttribute("href", "/visit");
    expect(screen.queryByText(/reserve a table/i)).not.toBeInTheDocument();
  });

  it("shows honest availability language for events", () => {
    render(<EventsPage />);
    expect(screen.getAllByText("Available on request").length).toBeGreaterThanOrEqual(2);
    expect(screen.getByRole("link", { name: "Request a quotation" })).toHaveAttribute("href", "/inquire");
  });

  it("uses call-ahead guidance and the documented closure", () => {
    render(<VisitPage />);
    expect(screen.getByText("Please call ahead — 0917 162 1254.")).toBeInTheDocument();
    expect(screen.getByText(/Closed every 1st Tuesday/)).toBeInTheDocument();
  });

  it("describes the place without inventing a founder", () => {
    render(<AboutPage />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("The place behind the windmill.");
    expect(screen.queryByText(/founded by/i)).not.toBeInTheDocument();
  });
});
