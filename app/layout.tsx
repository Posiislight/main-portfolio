import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Instrument_Serif, Sora, Fraunces, Work_Sans } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const serif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-serif',
})

// Company-name typefaces for the clients row, taken from each company's own site.
const sora = Sora({ subsets: ['latin'], weight: '800', variable: '--font-sora' })
const fraunces = Fraunces({ subsets: ['latin'], weight: '600', variable: '--font-fraunces' })
const workSans = Work_Sans({ subsets: ['latin'], weight: '500', variable: '--font-work-sans' })

const title = 'Adeleke Olamiposi Samuel | AI and Full Stack Engineer'
const description = 'Software engineer building AI products: assistants that answer from your own documents, retrieval pipelines and agent workflows, with the backend, cloud and React interface around them.'

export const metadata: Metadata = {
  // Resolves the og:image URL; Vercel provides the production host at build time.
  metadataBase: new URL(
    process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : 'http://localhost:3100',
  ),
  title,
  description,
  openGraph: { title, description, type: 'website', siteName: 'Adeleke Olamiposi Samuel' },
  twitter: { card: 'summary_large_image', title, description },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable} ${serif.variable} ${sora.variable} ${fraunces.variable} ${workSans.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="min-h-dvh bg-canvas font-sans text-fg antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
