export type Client = {
  name: string
  url: string
  /** One-colour mask in /public/logos; painted with the theme's logo colour. */
  logo: string
  /** Width / height of the mask, so the logo keeps its shape. */
  aspect: number
  /** Name typography, matching the brand text in the company's own navbar. */
  nameStyle: { fontFamily: string; fontWeight: number; textTransform?: "uppercase"; letterSpacing?: string }
}

// Order here is the order on the site.
export const clients: Client[] = [
  {
    name: "Law Angels UK",
    url: "https://lawangelsuk.com",
    logo: "/logos/lawangels.png",
    aspect: 1.16,
    nameStyle: { fontFamily: "var(--font-work-sans)", fontWeight: 500 },
  },
  {
    name: "Docny",
    url: "https://docny.io",
    logo: "/logos/docny.png",
    aspect: 0.8,
    nameStyle: { fontFamily: "var(--font-geist-sans)", fontWeight: 600 },
  },
  {
    name: "Axis by Digenty",
    url: "https://www.axisbydigenty.com",
    logo: "/logos/axis.png",
    aspect: 2.4,
    nameStyle: { fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif', fontWeight: 500 },
  },
  {
    name: "DondaX",
    url: "https://www.dondaxlimited.com",
    logo: "/logos/dondax.png",
    aspect: 1,
    nameStyle: { fontFamily: "var(--font-sora)", fontWeight: 800, letterSpacing: "0.5px" },
  },
  {
    name: "The Hague Industries",
    url: "https://www.thehagueindustries.com",
    logo: "/logos/hague.png",
    aspect: 0.97,
    nameStyle: { fontFamily: "var(--font-fraunces)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em" },
  },
]
