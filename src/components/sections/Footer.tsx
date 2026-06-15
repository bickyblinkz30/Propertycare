import { contact, brand, services, serviceAreas } from "@/lib/site";
import { WhatsAppIcon, PhoneIcon } from "@/components/icons";

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg">
      <div className="container-px py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-[var(--font-heading)] text-xl font-bold text-fg">
                {brand.name}
              </span>
              <span className="text-[0.65rem] uppercase tracking-[0.18em] text-accent">
                Paints &amp; Electrics
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted">
              {brand.positioning} Serving Sunderland &amp; the North East.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
              >
                <WhatsAppIcon className="h-4 w-4" /> WhatsApp
              </a>
              <a
                href={contact.tel}
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm font-semibold text-fg transition-colors hover:border-accent/50"
              >
                <PhoneIcon className="h-4 w-4 text-accent" /> {contact.display}
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.16em] text-accent">Services</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              {services.map((s) => (
                <li key={s.key}>
                  <a href="#services" className="transition-colors hover:text-fg">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.16em] text-accent">Areas</h3>
            <ul className="mt-4 grid grid-cols-1 gap-2.5 text-sm text-muted sm:grid-cols-2">
              {serviceAreas.slice(0, 8).map((a) => (
                <li key={a}>
                  <a href="#areas" className="transition-colors hover:text-fg">
                    {a}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {brand.full}. Fully insured · NICEIC / Part P · Written workmanship guarantee.
          </p>
          <p className="text-muted/70">Premium property transformations across the North East.</p>
        </div>
      </div>
    </footer>
  );
}
