import { processSteps } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealStagger, StaggerItem } from "@/components/ui/Reveal";

export function Process() {
  return (
    <section className="bg-bg py-20 md:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="How it works"
          title="A calm, considered process."
          intro="From first conversation to aftercare — one team, one point of contact, no surprises."
        />

        <RevealStagger className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-5">
          {processSteps.map((step) => (
            <StaggerItem key={step.n}>
              <div className="flex h-full flex-col bg-card p-6">
                <span className="font-[var(--font-display)] text-3xl font-bold text-accent">
                  {step.n}
                </span>
                <h3 className="mt-4 font-[var(--font-heading)] text-base font-semibold text-fg">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{step.body}</p>
              </div>
            </StaggerItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
