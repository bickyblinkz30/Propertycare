import { testimonials } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealStagger, StaggerItem } from "@/components/ui/Reveal";
import { StarIcon } from "@/components/icons";

/*
  Named, attributed testimonials. On the full site this sits beside an embedded
  live Google/Checkatrade widget (verifiable proof) — placeholder reviews for now.
*/
export function Testimonials() {
  return (
    <section className="bg-bg py-20 md:py-28">
      <div className="container-px">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Client stories"
            title="Trusted by North East homeowners."
          />
          <div className="flex items-center gap-2 text-sm text-muted">
            <span className="flex text-accent" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-4 w-4" />
              ))}
            </span>
            <span>Rated 5.0 · verified reviews</span>
          </div>
        </div>

        <RevealStagger className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <figure className="flex h-full flex-col rounded-xl border border-border bg-card p-7">
                <span className="flex text-accent" aria-hidden>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4" />
                  ))}
                </span>
                <blockquote
                  className="mt-5 flex-1 font-[var(--font-display)] italic leading-relaxed text-fg/90"
                  style={{ fontSize: "1.05rem" }}
                >
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4 text-sm">
                  <span className="font-semibold text-fg">{t.name}</span>
                  <span className="text-muted"> · {t.detail}</span>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
