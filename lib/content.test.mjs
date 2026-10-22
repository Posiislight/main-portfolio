import { test } from "node:test"
import assert from "node:assert/strict"
import { readFileSync } from "node:fs"

// Copy that existed before the restyle and must survive it (spec: "keep all existing content").
const page = readFileSync(new URL("../app/page.tsx", import.meta.url), "utf8")

const preserved = [
  "Adeleke Olamiposi Samuel",
  "Full stack developer",
  "Remote, working worldwide",
  "Backend, cloud, full stack",
  "Building Docny and Law Angels",
  "Open to freelance projects",
]

for (const text of preserved) {
  test(`home page keeps existing copy: "${text}"`, () => {
    assert.ok(page.includes(text), `app/page.tsx no longer contains "${text}"`)
  })
}
