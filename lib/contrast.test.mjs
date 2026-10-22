import { test } from "node:test"
import assert from "node:assert/strict"
import { readFileSync } from "node:fs"

const css = readFileSync(new URL("../app/globals.css", import.meta.url), "utf8")

// Collect `--name: #hex` pairs from every top-level block that starts with the selector.
function tokens(selector) {
  const out = {}
  const re = new RegExp(`(?:^|\\n)\\s*${selector.replace(".", "\\.")}\\s*\\{([^}]*)\\}`, "g")
  for (const m of css.matchAll(re)) {
    for (const d of m[1].matchAll(/--([\w-]+)\s*:\s*(#[0-9a-fA-F]{3,6})\s*;/g)) out[d[1]] = d[2]
  }
  return out
}

function channel(v) {
  const s = v / 255
  return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4
}

function luminance(hex) {
  let h = hex.slice(1)
  if (h.length === 3) h = [...h].map((c) => c + c).join("")
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16))
  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b)
}

function ratio(a, b) {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x)
  return (hi + 0.05) / (lo + 0.05)
}

const themes = { light: tokens(":root"), dark: tokens(".dark") }

const pairs = [
  ["fg", "canvas", 4.5],
  ["fg-muted", "canvas", 4.5],
  ["fg-muted", "surface", 4.5],
  ["fg-muted", "showcase", 4.5],
  ["brand", "canvas", 4.5],
  ["brand", "brand-soft", 4.5],
  ["logo", "canvas", 3],
]

for (const [theme, t] of Object.entries(themes)) {
  for (const [fg, bg, min] of pairs) {
    test(`${theme}: ${fg} on ${bg} >= ${min}`, () => {
      assert.ok(t[fg], `${theme} token --${fg} is defined`)
      assert.ok(t[bg], `${theme} token --${bg} is defined`)
      const r = ratio(t[fg], t[bg])
      assert.ok(r >= min, `${fg} on ${bg} is ${r.toFixed(2)}, needs ${min}`)
    })
  }
}
