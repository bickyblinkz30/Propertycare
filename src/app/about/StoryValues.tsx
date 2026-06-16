import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealStagger, StaggerItem } from "@/components/ui/Reveal";
import { whyChooseUs } from "@/lib/site";

/*
  TODO: Replace placeholder biography with real CEO / company story.
*/
const storyParagraphs = [
  "Propertycare was founded on a simple belief: property transformations should be seamless. No juggling trades, no communication breakdowns, no finger-pointing when something goes wrong. One team, one point of contact, one guarantee.",
  "We combine premium painting & decorating with certified electrical work, bespoke media walls and comprehensive property maintenance. Every member of our team shares the same commitment to craftsmanship, tidiness and clear communication.",
  "Based in Sunderland and serving the North East, we take on a limited number of transformations each year so every project receives the time, attention and quality it deserves.",
];

export function StoryValues() {
  return (
    <>
      {/* Our Story */}
      <section className="bg-surface py-20 md:py-28">
        <div className="container-px">
          <SectionHeading
            eyebrow="Our story"
            title="Built to be different."
            intro="How Propertycare became the North East's trusted single-team transformation specialist."
          />
          <RevealStagger className="mt-12 grid gap-6 md:grid-cols-3">
            {storyParagraphs.map((p, i) => (
              <StaggerItem key={i}>
                <p className="text-muted leading-relaxed" style={{ fontSize: "var(--text-body-lg)" }}>
                  {p}
                </p>
              </StaggerItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-bg py-20 md:py-28">
        <div className="container-px">
          <SectionHeading
            eyebrow="Our values"
            title="What we stand for."
            intro="Six principles that guide every project, every decision and every relationship."
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
    </>
  );
}
