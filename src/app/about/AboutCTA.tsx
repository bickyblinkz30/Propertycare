"use client";

import { Reveal } from "@/components/ui/Reveal";
import { CTAButton } from "@/components/ui/CTAButton";
import { WhatsAppIcon, ArrowIcon } from "@/components/icons";
import { contact } from "@/lib/site";

export function AboutCTA() {
  return (
    <section className="bg-bg py-24 md:py-32">
      <div className="container-px">
        <Reveal className="flex flex-col items-center text-center">
          <p className="eyebrow mb-3 flex items-center gap-2">
            <span className="h-px w-7 bg-accent/60" />
            Let&rsquo;s work together
          </p>
          <h2
            className="max-w-[14ch] font-[var(--font-display)] font-bold leading-[1.08] tracking-[-0.02em] text-fg"
            style={{ fontSize: "var(--text-h2)" }}
          >
            Ready to transform your property?
          </h2>
          <p
            className="mt-4 max-w-[48ch] text-muted"
            style={{ fontSize: "var(--text-body-lg)" }}
          >
            One team, one point of contact, one guarantee. Book a free,
            no-obligation survey and let&rsquo;s discuss your project.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <CTAButton href="/#contact" variant="primary" size="lg">
              Book a free survey <ArrowIcon className="h-4 w-4" />
            </CTAButton>
            <CTAButton href={contact.whatsapp} variant="ghost" size="lg" external>
              <WhatsAppIcon className="h-5 w-5" /> WhatsApp us
            </CTAButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
