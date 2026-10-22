const tools = [
  "Next.js",
  "React",
  "TypeScript",
  "Python",
  "Django",
  "Java",
  "Spring Boot",
  "AWS",
  "Stripe",
  "PostgreSQL",
]

export function StackRow() {
  return (
    <div className="flex flex-col gap-5">
      <p className="text-sm text-fg-muted">Tools I build with</p>
      <ul className="flex flex-wrap gap-x-8 gap-y-3">
        {tools.map((t) => (
          <li
            key={t}
            className="font-serif text-2xl leading-none text-logo transition-colors duration-200 hover:text-fg md:text-[28px]"
          >
            {t}
          </li>
        ))}
      </ul>
    </div>
  )
}
