import { describe, expect, it } from "vitest";
import { siteContent } from "./site";

describe("Hillbarn content contract", () => {
  it("keeps contact, location, and call-ahead guidance aligned", () => {
    expect(siteContent.phone.display).toBe("0917 162 1254");
    expect(siteContent.location.coordinates).toBe("14.120137 N, 120.936327 E");
    expect(siteContent.visit.hours).toBe("Please call ahead — 0917 162 1254.");
  });

  it("does not expose unverified reservation or pricing claims", () => {
    const serialized = JSON.stringify(siteContent).toLowerCase();
    expect(serialized).not.toContain("reserve a table");
    expect(serialized).not.toMatch(/₱|php\s*\d/);
  });
});
