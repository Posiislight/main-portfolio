import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"

const heading = Space_Grotesk({ subsets: ['latin'], variable: '--font-heading' })
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  title: 'Noble Okorie Chibueze | Full Stack Developer',
  description: 'Full stack developer building digital products at the intersection of commerce, technology, and scale.',
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
      className={`${GeistSans.variable} ${heading.variable} ${mono.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var a=localStorage.getItem('noble-accent');if(a)document.documentElement.setAttribute('data-accent',a)}catch(e){}",
          }}
        />
      </head>
      <body className="min-h-dvh bg-background font-sans text-foreground antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          storageKey="noble-theme"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
