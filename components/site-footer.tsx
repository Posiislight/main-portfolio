export function SiteFooter() {
  return (
    <footer className="border-t border-rule text-sm text-ink-muted">
      <div className="mx-auto flex max-w-[1440px] flex-col-reverse gap-3 px-5 pb-8 pt-6 md:h-24 md:flex-row md:items-center md:justify-between md:px-10 md:py-0 lg:px-20">
        <span>© {new Date().getFullYear()} Adeleke Olamiposi Samuel</span>
        <div className="flex gap-6 md:gap-8">
          <a
            href="https://github.com/Posiislight"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center transition-colors hover:text-moss"
          >
            GitHub
          </a>
          <a
            href="mailto:adelekeolamiposi@gmail.com"
            className="inline-flex min-h-11 items-center transition-colors hover:text-moss"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
