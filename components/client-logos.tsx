import { clients } from "@/lib/clients"

export function ClientLogos() {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
      {clients.map((client) => (
        <li key={client.name}>
          <a
            href={client.url}
            target="_blank"
            rel="noreferrer"
            className="group flex h-full min-h-36 flex-col items-center justify-center gap-4 rounded-2xl border border-line bg-surface px-4 py-6 text-center shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lift"
          >
            <span
              aria-hidden="true"
              className="block h-14 bg-logo transition-colors duration-200 group-hover:bg-fg"
              style={{
                aspectRatio: client.aspect,
                maxWidth: "100%",
                WebkitMask: `url(${client.logo}) center / contain no-repeat`,
                mask: `url(${client.logo}) center / contain no-repeat`,
              }}
            />
            <span className="text-sm font-medium text-fg-muted transition-colors group-hover:text-fg">
              {client.name}
              <span className="sr-only"> (opens in a new tab)</span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  )
}
