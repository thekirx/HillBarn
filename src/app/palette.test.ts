import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

const css = readFileSync(join(process.cwd(), "src/app/globals.css"), "utf8");

function token(name: string) {
  const match = css.match(new RegExp(`--${name}:\\s*(#[0-9a-f]{6})`, "i"));
  if (!match) throw new Error(`Missing palette token --${name}`);
  return match[1];
}

function luminance(hex: string) {
  const channels = [1, 3, 5]
    .map((i) => parseInt(hex.slice(i, i + 2), 16) / 255)
    .map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
}

function contrast(a: string, b: string) {
  const [light, dark] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (light + 0.05) / (dark + 0.05);
}

/**
 * The sampled brand accent (--hb-copper) only clears WCAG AA on the cream ground.
 * On the ink, slate and teal registers it drops as low as 1.4:1, so kickers and small
 * labels there use --hb-sand instead. Guard both halves of that split.
 */
describe("palette contrast", () => {
  const cream = token("hb-cream");
  const darkGrounds = { ink: token("hb-ink"), slate: token("hb-slate"), teal: token("hb-teal") };

  it.each([
    ["hb-ink", 4.5],
    ["hb-ink-soft", 4.5],
    ["hb-ink-mute", 4.5],
    ["hb-copper", 4.5],
    ["hb-copper-deep", 4.5],
  ])("%s meets AA body-text contrast on the cream ground", (name, minimum) => {
    expect(contrast(token(name), cream)).toBeGreaterThanOrEqual(minimum);
  });

  it.each(Object.entries(darkGrounds))("hb-sand meets AA contrast on the %s register", (_name, ground) => {
    expect(contrast(token("hb-sand"), ground)).toBeGreaterThanOrEqual(4.5);
  });

  it("keeps kickers on dark registers off the low-contrast copper accent", () => {
    for (const ground of Object.values(darkGrounds)) {
      expect(contrast(token("hb-copper"), ground)).toBeLessThan(4.5);
    }
    expect(css).toMatch(/\.section\[data-register="teal"\] \.kicker[\s\S]*?color: var\(--hb-sand\)/);
  });
});
