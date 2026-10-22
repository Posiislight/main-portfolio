export type Client = {
  name: string
  url: string
  /** One-colour mask in /public/logos; painted with the theme's logo colour. */
  logo: string
  /** Width / height of the mask, so the logo keeps its shape. */
  aspect: number
}

// Order here is the order on the site.
export const clients: Client[] = [
  { name: "Law Angels UK", url: "https://lawangelsuk.com", logo: "/logos/lawangels.png", aspect: 1.16 },
  { name: "Docny", url: "https://docny.io", logo: "/logos/docny.png", aspect: 0.8 },
  { name: "Axis by Digenty", url: "https://www.axisbydigenty.com", logo: "/logos/axis.png", aspect: 2.4 },
  { name: "DondaX", url: "https://www.dondaxlimited.com", logo: "/logos/dondax.png", aspect: 1 },
  { name: "The Hague Industries", url: "https://www.thehagueindustries.com", logo: "/logos/hague.png", aspect: 0.97 },
]
