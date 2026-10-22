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

// Open source section: three featured public repos, real URLs only.
const read = (p) => readFileSync(new URL(p, import.meta.url), "utf8")
const repos = (() => { try { return read("./repos.ts") } catch { return "" } })()
const header = read("../components/site-header.tsx")

const featured = [
  ["bedrock-rag-platform", "https://github.com/Posiislight/bedrock-rag-platform"],
  ["agent-workspace", "https://github.com/Posiislight/agent-workspace"],
  ["lagos-racer", "https://github.com/Posiislight/lagos-racer"],
]

for (const [name, url] of featured) {
  test(`repos.ts features ${name} with its GitHub URL`, () => {
    assert.ok(repos.includes(`"${name}"`), `lib/repos.ts has no entry named ${name}`)
    assert.ok(repos.includes(url), `lib/repos.ts is missing ${url}`)
  })
}

test("lagos-racer links to its live demo", () => {
  assert.ok(repos.includes("https://lagos-racer.vercel.app"))
})

test("home page renders an Open source section anchored at #code", () => {
  assert.ok(page.includes('id="code"'), 'app/page.tsx has no id="code" section')
  assert.ok(page.includes("Open source"), "app/page.tsx has no Open source heading")
})

test("header nav links to #code", () => {
  assert.ok(header.includes('"/#code"'), 'site-header.tsx has no "/#code" link')
})
