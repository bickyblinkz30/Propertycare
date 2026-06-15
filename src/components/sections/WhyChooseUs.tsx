import { whyChooseUs } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealStagger, StaggerItem } from "@/components/ui/Reveal";

export function WhyChooseUs() {
  return (
    <section id="why" className="bg-surface py-20 md:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="Why Propertycare"
          title="Reasons to trust us with your home."
          intro="Everything below answers one question: why should you trust this company with a £20,000+ transformation?"
        />

        <RevealStagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((w, i) => (
            <StaggerItem key={w.title}>
              <div className="flex h-full flex-col rounded-xl border border-border bg-card p-7">
                <span className="font-[var(--font-display)] text-2xl font-semibold text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-[var(--font-heading)] text-lg font-semibold text-fg">
                  {w.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{w.body}</p>
              </div>
            </StaggerItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
