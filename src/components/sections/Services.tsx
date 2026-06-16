import { services } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealStagger, StaggerItem } from "@/components/ui/Reveal";
import { ArrowIcon } from "@/components/icons";

export function Services() {
  return (
    <section id="services" className="bg-bg py-20 md:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="What we do"
          title="Four disciplines. One accountable team."
          intro="We sell results, not labour — every service is delivered to a premium standard and signed off by the same team."
        />

        <RevealStagger className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {services.map((s) => (
            <StaggerItem key={s.key}>
              <a
                href="#contact"
                className="group flex h-full flex-col justify-between gap-8 bg-card p-7 transition-colors hover:bg-[#1d1d1d] md:p-9"
                aria-label={s.cta}
              >
                <div>
                  <h3
                    className="font-[var(--font-heading)] font-semibold text-fg"
                    style={{ fontSize: "var(--text-h3)" }}
                  >
                    {s.title}
                  </h3>
                  <p className="mt-3 max-w-[42ch] text-muted">{s.outcome}</p>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors group-hover:text-primary-hover">
                  {s.cta}
                  <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            </StaggerItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
