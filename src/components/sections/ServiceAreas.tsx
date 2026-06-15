import { serviceAreas } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealStagger, StaggerItem } from "@/components/ui/Reveal";

/*
  Service areas. On the full site each links to a content-rich location page
  (built later). Here they are presented as the local-coverage proof.
*/
export function ServiceAreas() {
  return (
    <section id="areas" className="bg-surface py-20 md:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="Areas we cover"
          title="Proudly serving Sunderland & the North East."
          intro="Local, established and genuinely on your doorstep — with dedicated coverage across the region."
        />

        <RevealStagger className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {serviceAreas.map((area) => (
            <StaggerItem key={area}>
              <div className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3.5 text-sm text-fg/90 transition-colors hover:border-accent/50">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {area}
              </div>
            </StaggerItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
