import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "@/app/page";

describe("homepage", () => {
  it("establishes the landmark and routes visitors to dining and events", () => {
    render(<Home />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("The windmill on Daang Luma.");
    expect(screen.getAllByRole("link", { name: "See the menu" })[0]).toHaveAttribute("href", "/dining");
    expect(screen.getAllByRole("link", { name: /Enquire about your event/ }).length).toBeGreaterThan(0);
  });

  it("uses Hillbarn's verified signature-dish proof", () => {
    render(<Home />);
    expect(screen.getByText("Best seller")).toBeInTheDocument();
    expect(screen.getByText("Since May 2022")).toBeInTheDocument();
  });

  it("uses plan-your-visit language instead of reservations", () => {
    render(<Home />);
    expect(screen.getAllByRole("link", { name: "Plan your visit" }).every((link) => link.getAttribute("href") === "/visit")).toBe(true);
    expect(screen.queryByText(/reserve a table/i)).not.toBeInTheDocument();
  });
});
