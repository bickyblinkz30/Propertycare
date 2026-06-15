import { transformations } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealStagger, StaggerItem } from "@/components/ui/Reveal";
import { ArrowIcon } from "@/components/icons";

/*
  Featured transformations as named, dated case studies (never "Project 1/2/3").
  Cards use the brass meta-line → title → intro pattern; image = placeholder gradient.
*/
export function Transformations() {
  return (
    <section id="transformations" className="bg-bg py-20 md:py-28">
      <div className="container-px">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Transformations"
            title="A selection of recent work."
            intro="We take on a limited number of transformations so every detail gets our full attention."
          />
        </div>

        <RevealStagger className="mt-12 grid gap-6 md:grid-cols-3">
          {transformations.map((t) => (
            <StaggerItem key={t.title}>
              <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card">
                <div
                  className="relative aspect-[4/3] w-full overflow-hidden"
                  aria-hidden
                >
                  <div
                    className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                    style={{
                      background: `linear-gradient(135deg, ${t.toneAfter.from}, ${t.toneAfter.to})`,
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[0.62rem] uppercase tracking-[0.18em] text-white/35">
                    Sample visual
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="eyebrow mb-2 text-[0.7rem]">
                    {t.location} · {t.year} · {t.type}
                  </p>
                  <h3 className="font-[var(--font-heading)] text-xl font-semibold text-fg">
                    {t.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-muted">{t.intro}</p>
                  <a
                    href="#contact"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-hover"
                  >
                    View this transformation
                    <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </article>
            </StaggerItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
