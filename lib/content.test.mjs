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

// Hero is deliberately minimal: avatar, "Hi, I'm Posi.", a short description, one button.
const hero = page.slice(page.indexOf('id="top"'), page.indexOf("{/* Stack */}"))

test("hero greets with 'Hi, I’m Posi.'", () => {
  assert.ok(hero.includes("Hi, I’m"), "hero h1 should start with Hi, I’m")
  assert.match(hero, /<em[^>]*>\s*Posi\s*<\/em>/, "hero h1 should italicise the name Posi")
})

test("hero has a single Contact me button", () => {
  assert.ok(hero.includes("Contact me"))
  assert.equal((hero.match(/<a\b/g) || []).length, 1, "hero should contain exactly one link")
})

for (const text of [
  "have to hold up",
  "Start a project",
  "See the work",
  "Remote, working worldwide",
  "Open to freelance projects",
  "Full stack developer",
]) {
  test(`hero stays minimal: no "${text}"`, () => {
    assert.ok(!hero.includes(text), `hero should not contain "${text}"`)
  })
}

test("hero stays minimal: no facts list", () => {
  assert.ok(!hero.includes("<dl"), "the Based/Focus/Currently facts belong in About, not the hero")
})
