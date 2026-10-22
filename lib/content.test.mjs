import { test } from "node:test"
import assert from "node:assert/strict"
import { readFileSync } from "node:fs"

// Copy that existed before the restyle and must survive it (spec: "keep all existing content").
const page = readFileSync(new URL("../app/page.tsx", import.meta.url), "utf8")

const preserved = [
  "Open to freelance projects",
]

test("About no longer has the name line or Based/Focus/Currently facts", () => {
  assert.ok(!page.includes("<dl"), "the facts list should be gone")
  assert.ok(!page.includes("Building Docny and Law Angels"))
  assert.ok(!page.includes("AI and full stack engineer"))
})

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

test("header nav has no Code link", () => {
  assert.ok(!header.includes('"/#code"'), "site-header.tsx should not link to /#code")
})

// Hero is deliberately minimal: avatar, "Hi, I'm Posi.", a short description, one button.
const hero = page.slice(page.indexOf('id="top"'), page.indexOf("{/* Stack */}"))

test("hero greets with 'Hi, I’m Posi.'", () => {
  assert.ok(hero.includes("Hi, I’m"), "hero h1 should start with Hi, I’m")
  assert.match(hero, /<em[^>]*>\s*Posi\s*<\/em>/, "hero h1 should italicise the name Posi")
})

test("hero has exactly two buttons: Contact me and Resume", () => {
  assert.ok(hero.includes("Contact me"))
  assert.equal((hero.match(/<a\b/g) || []).length, 2, "hero should contain exactly two links")
})

test("Resume button downloads the PDF that ships with the site", () => {
  assert.match(hero, /href="\/Adeleke_Olamiposi_Resume\.pdf"\s+download/)
  readFileSync(new URL("../public/Adeleke_Olamiposi_Resume.pdf", import.meta.url))
})

// AI-engineer positioning, backed by facts from the resume.
test("site presents AI engineering work", () => {
  const flat = page.replace(/\s+/g, " ")
  assert.ok(flat.includes("builds AI products"), "hero should lead with AI products")
  assert.ok(hero.includes("AWS Certified Solutions Architect"), "hero should mention the AWS certification")
  assert.ok(page.includes("AI features and agents"), "services should offer AI features and agents")
  assert.ok(flat.includes("cut average resolution time by 40%"), "about should cite the i4nnova result")
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

test("hero intro is plain sentences, not the old fragment", () => {
  const flat = hero.replace(/\s+/g, " ") // JSX wraps long sentences across source lines
  assert.ok(!flat.includes("decide whether a product survives"), "old confusing wording is still in the hero")
  assert.ok(flat.includes("from a blank repo to real users"), "hero intro should say what Posi does in plain words")
})

test("desktop header has no social icons or freelance badge", () => {
  for (const text of ["github.com", "linkedin.com", "mailto:"])
    assert.ok(!header.includes(text), `header should not contain ${text}`)
  assert.ok(!header.slice(0, header.indexOf("open && (")).includes("Open to freelance projects"))
})

test("contact section and footer link to LinkedIn", () => {
  const footer = read("../components/site-footer.tsx")
  const url = "https://www.linkedin.com/in/adeleke-olamiposi"
  assert.ok(page.slice(page.indexOf('id="contact"')).includes(url), "contact section has no LinkedIn link")
  assert.ok(footer.includes(url), "footer has no LinkedIn link")
})

// Clients row: logo + company name, linking out. Replaces the old tools row.
const clients = (() => { try { return read("./clients.ts") } catch { return "" } })()
const logoRow = (() => { try { return read("../components/client-logos.tsx") } catch { return "" } })()

test("home page has the Companies I’ve built with row", () => {
  assert.ok(page.includes("Companies I’ve built with"))
  assert.ok(page.includes("ClientLogos"))
})

test("the old tools row is gone", () => {
  assert.ok(!page.includes("StackRow"))
  assert.ok(!page.includes("Tools I build with"))
  assert.throws(() => read("../components/stack-row.tsx"))
})

for (const [name, url, file] of [
  ["Law Angels UK", "https://lawangelsuk.com", "lawangels"],
  ["Docny", "https://docny.io", "docny"],
  ["Axis by Digenty", "https://www.axisbydigenty.com", "axis"],
  ["DondaX", "https://www.dondaxlimited.com", "dondax"],
  ["The Hague Industries", "https://www.thehagueindustries.com", "hague"],
]) {
  test(`clients.ts lists ${name} with url and logo file`, () => {
    assert.ok(clients.includes(`"${name}"`))
    assert.ok(clients.includes(url))
    assert.ok(clients.includes(`/logos/${file}.png`))
    readFileSync(new URL(`../public/logos/${file}.png`, import.meta.url))
  })
}

test("each client shows its name next to the logo", () => {
  assert.ok(logoRow.includes("client.name"), "component must render the company name")
  assert.ok(logoRow.includes('rel="noreferrer"'))
})
