import { transformations } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BeforeAfter } from "@/components/ui/BeforeAfter";
import { Reveal } from "@/components/ui/Reveal";
import { CTAButton } from "@/components/ui/CTAButton";
import { ArrowIcon } from "@/components/icons";

/*
  Before/After showcase — the conversion engine. Leads with the signature
  drag-wipe slider on a featured transformation.
*/
export function Showcase() {
  const featured = transformations[0];
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="See the difference"
          title="Drag to reveal a real transformation."
          intro="The clearest proof of our work — slide to compare before and after. Every project is documented, named and dated."
        />

        <Reveal className="mt-12 grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
          <BeforeAfter
            before={featured.tone}
            after={featured.toneAfter}
            beforeImg={featured.placeholderBefore}
            afterImg={featured.placeholderAfter}
            caption={`${featured.title} — ${featured.location}`}
          />
          <div>
            <p className="eyebrow mb-3">
              {featured.location} · {featured.year}
            </p>
            <h3
              className="font-[var(--font-heading)] font-semibold text-fg"
              style={{ fontSize: "var(--text-h3)" }}
            >
              {featured.title}
            </h3>
            <p className="mt-4 text-muted">{featured.intro}</p>
            <dl className="mt-6 space-y-3 border-t border-border pt-6 text-sm">
              <div className="flex gap-3">
                <dt className="w-24 shrink-0 uppercase tracking-[0.12em] text-accent/90">Scope</dt>
                <dd className="text-fg/90">{featured.scope}</dd>
              </div>
              <div className="flex gap-3">
                <dt className="w-24 shrink-0 uppercase tracking-[0.12em] text-accent/90">Property</dt>
                <dd className="text-fg/90">{featured.type}</dd>
              </div>
            </dl>
            <div className="mt-8">
              <CTAButton href="#contact" variant="primary">
                Request a similar transformation <ArrowIcon className="h-4 w-4" />
              </CTAButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
