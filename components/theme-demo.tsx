"use client"

import { useTheme } from "next-themes"

export function ThemeDemo() {
  const { resolvedTheme } = useTheme()

  return (
    <div className="mt-4">
      <p className="text-xs text-muted-foreground mb-2">
        Current theme: <span className="font-medium">{resolvedTheme}</span>
      </p>
      <div className="rounded-lg border p-4 transition-colors bg-white/60 dark:bg-zinc-900/60 backdrop-blur supports-[backdrop-filter]:bg-white/50 dark:supports-[backdrop-filter]:bg-zinc-900/50">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-medium">Dark mode preview</p>
            <p className="text-xs text-muted-foreground">
              Background, border, and text colors adapt with the theme.
            </p>
          </div>
          <div className="h-8 w-8 rounded-md bg-emerald-600/20 dark:bg-emerald-400/30 ring-1 ring-emerald-600/30 dark:ring-emerald-400/30" />
        </div>
      </div>
    </div>
  )
}
