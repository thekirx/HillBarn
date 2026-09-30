import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Button } from "./Button";
import { Section } from "./Section";
import { BrandImage } from "../media/BrandImage";

describe("brand primitives", () => {
  it("renders an accessible link button with the requested variant", () => {
    render(<Button href="/inquire" variant="primary">Inquire</Button>);
    expect(screen.getByRole("link", { name: "Inquire" })).toHaveAttribute("data-variant", "primary");
  });

  it("exposes the visual register on semantic sections", () => {
    render(<Section register="night">Content</Section>);
    expect(screen.getByText("Content").closest("section")).toHaveAttribute("data-register", "night");
  });

  it("marks social-compressed images for launch auditing", () => {
    render(<BrandImage src="/brand/test.jpg" alt="A test frame" width={100} height={100} placeholderAsset />);
    expect(screen.getByRole("img", { name: "A test frame" })).toHaveAttribute("data-placeholder", "true");
  });
});
