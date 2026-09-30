import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { GalleryFilter } from "./GalleryFilter";

describe("gallery filtering", () => {
  it("shows only celebration assets when that filter is selected", () => {
    render(<GalleryFilter />);
    fireEvent.click(screen.getByRole("button", { name: "Celebrations" }));
    expect(screen.getByRole("img", { name: "Reception hall dressed for a celebration" })).toBeVisible();
    expect(screen.queryByRole("img", { name: "The Hillbarn Pork Chop" })).not.toBeInTheDocument();
  });
});
