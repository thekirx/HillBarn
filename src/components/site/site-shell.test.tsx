import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

const { pathname } = vi.hoisted(() => ({ pathname: { value: "/" } }));
vi.mock("next/navigation", () => ({ usePathname: () => pathname.value }));

describe("site shell", () => {
  it("keeps inquiry as the emphasized navigation action", () => {
    render(<SiteHeader />);
    expect(screen.getAllByRole("link", { name: "Inquire" })[0]).toHaveAttribute("href", "/inquire");
  });

  it("marks the current section for assistive technology", () => {
    pathname.value = "/events";
    render(<SiteHeader />);
    expect(screen.getAllByRole("link", { name: "Events" })[0]).toHaveAttribute("aria-current", "page");
    expect(screen.getAllByRole("link", { name: "Dining" })[0]).not.toHaveAttribute("aria-current");
    pathname.value = "/";
  });

  it.each([
    ["/", "dark"],
    ["/gallery", "dark"],
    ["/about", "light"],
    ["/visit", "light"],
    ["/inquire", "light"],
  ])("gives the transparent header a readable ground on %s", (route, ground) => {
    pathname.value = route;
    const { container } = render(<SiteHeader />);
    expect(container.querySelector(".site-header")).toHaveAttribute("data-ground", ground);
    pathname.value = "/";
  });

  it("keeps the closed mobile menu out of the keyboard order and closes on Escape", () => {
    render(<SiteHeader />);
    const menu = document.getElementById("mobile-menu");
    expect(menu).toHaveAttribute("inert");

    const trigger = screen.getByRole("button", { name: "Open menu" });
    expect(trigger).toHaveAttribute("aria-controls", "mobile-menu");
    fireEvent.click(trigger);
    expect(menu).not.toHaveAttribute("inert");
    expect(screen.getByRole("button", { name: "Close menu" })).toHaveFocus();

    fireEvent.keyDown(document, { key: "Escape" });
    expect(menu).toHaveAttribute("inert");
    expect(trigger).toHaveFocus();
  });

  it("publishes verified coordinates and phone action", () => {
    render(<SiteFooter />);
    expect(screen.getByText("14.120137 N, 120.936327 E")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /0917 162 1254/ })).toHaveAttribute("href", "tel:+639171621254");
  });
});
