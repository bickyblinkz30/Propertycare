import { trustItems, accreditations } from "@/lib/site";
import { CheckIcon } from "@/components/icons";
import { Reveal } from "@/components/ui/Reveal";

export function TrustBar() {
  return (
    <section aria-label="Trust and accreditations" className="border-y border-border bg-surface">
      <div className="container-px py-7">
        <Reveal>
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-fg/90">
            {trustItems.map((t) => (
              <li key={t} className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 text-primary" />
                {t}
              </li>
            ))}
          </ul>
          <div className="mx-auto mt-6 hairline max-w-3xl" />
          <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs uppercase tracking-[0.14em] text-muted">
            {accreditations.map((a) => (
              <li key={a} className="rounded-full border border-border px-3 py-1.5">
                {a}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
