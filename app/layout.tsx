import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"

const heading = Space_Grotesk({ subsets: ['latin'], variable: '--font-heading' })
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  title: 'Adeleke Olamiposi Samuel | Full Stack Developer',
  description: 'Full stack developer building AI-powered products on cloud infrastructure, with a focus on backend architecture and system design.',
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
              "try{var a=localStorage.getItem('posi-accent');if(a)document.documentElement.setAttribute('data-accent',a)}catch(e){}",
          }}
        />
      </head>
      <body className="min-h-dvh bg-background font-sans text-foreground antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          storageKey="posi-theme"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
