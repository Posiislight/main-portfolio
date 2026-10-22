import { clients } from "@/lib/clients"

export function ClientLogos() {
  return (
    <ul className="flex flex-wrap items-center gap-x-10 gap-y-6 md:gap-x-14">
      {clients.map((client) => (
        <li key={client.name}>
          <a
            href={client.url}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2.5 text-logo transition-colors duration-200 hover:text-brand"
          >
            <span
              aria-hidden="true"
              className="block h-7 bg-current"
              style={{
                aspectRatio: client.aspect,
                WebkitMask: `url(${client.logo}) center / contain no-repeat`,
                mask: `url(${client.logo}) center / contain no-repeat`,
              }}
            />
            <span className="text-sm font-medium">
              {client.name}
              <span className="sr-only"> (opens in a new tab)</span>
            </span>
            <span aria-hidden="true" className="-mt-3 text-xs opacity-70">↗</span>
          </a>
        </li>
      ))}
    </ul>
  )
}
