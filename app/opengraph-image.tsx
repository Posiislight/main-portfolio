import { ImageResponse } from "next/og"
import { readFile } from "node:fs/promises"
import { join } from "node:path"

export const alt = "Adeleke Olamiposi Samuel, AI and full stack engineer"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

// Same warm-dark palette as the site's dark theme.
const canvas = "#121211"
const fg = "#f2efe8"
const muted = "#a29e95"
const brand = "#d2909f"
const line = "#3a3834"

export default async function Image() {
  const fonts = join(process.cwd(), "node_modules/geist/dist/fonts/geist-sans")
  const [semibold, regular, avatar] = await Promise.all([
    readFile(join(fonts, "Geist-SemiBold.ttf")),
    readFile(join(fonts, "Geist-Regular.ttf")),
    readFile(join(process.cwd(), "public/self-avatar.jpg")),
  ])
  const avatarSrc = `data:image/jpeg;base64,${avatar.toString("base64")}`

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: `radial-gradient(900px 520px at 85% 15%, #2a1d21 0%, ${canvas} 70%)`,
          color: fg,
          fontFamily: "Geist",
        }}
      >
        <div style={{ display: "flex", fontSize: 40, fontWeight: 600, letterSpacing: -1 }}>
          Posi<span style={{ color: brand }}>.</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", flexDirection: "column", maxWidth: 720 }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: 74,
                fontWeight: 600,
                lineHeight: 1.05,
                letterSpacing: -2.5,
              }}
            >
              <span>I build AI products</span>
              <span style={{ color: brand }}>for real users.</span>
            </div>
            <div style={{ display: "flex", marginTop: 30, fontSize: 30, color: muted, lineHeight: 1.35 }}>
              Assistants, retrieval and agent workflows, plus the backend and cloud behind them.
            </div>
          </div>

          <img
            src={avatarSrc}
            width={260}
            height={260}
            style={{ borderRadius: 130, border: `3px solid ${line}`, objectFit: "cover" }}
          />
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 32, fontWeight: 600 }}>Adeleke Olamiposi Samuel</span>
            <span style={{ fontSize: 26, color: muted, marginTop: 4 }}>AI and full stack engineer</span>
          </div>
          <div
            style={{
              display: "flex",
              whiteSpace: "nowrap",
              fontSize: 24,
              color: brand,
              border: `2px solid ${brand}`,
              borderRadius: 999,
              padding: "10px 24px",
            }}
          >
            AWS Certified Solutions Architect
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Geist", data: semibold, weight: 600, style: "normal" },
        { name: "Geist", data: regular, weight: 400, style: "normal" },
      ],
    },
  )
}
