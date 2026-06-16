"use client";

import { Reveal } from "@/components/ui/Reveal";

/*
  TODO: Replace with real team member photos and biographies.
  Current placeholder cards represent the team structure.
*/
const teamMembers = [
  { role: "CEO / Founder", placeholder: true },
  { role: "Lead Painter & Decorator", placeholder: true },
  { role: "Certified Electrician", placeholder: true },
];

export function Team() {
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="container-px">
        <Reveal className="flex max-w-2xl flex-col">
          <p className="eyebrow mb-3 flex items-center gap-2">
            <span className="h-px w-7 bg-accent/60" />
            Meet the team
          </p>
          <h2
            className="font-[var(--font-heading)] font-bold leading-[1.08] tracking-[-0.02em] text-fg"
            style={{ fontSize: "var(--text-h2)" }}
          >
            The people behind the transformations.
          </h2>
          <p
            className="mt-4 max-w-[52ch] text-muted"
            style={{ fontSize: "var(--text-body-lg)" }}
          >
            Information about our team members coming soon.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((m) => (
            <Reveal key={m.role}>
              <div className="flex flex-col items-center text-center">
                <div className="mb-5 aspect-square w-full max-w-[280px] rounded-xl bg-card ring-1 ring-white/10 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-2 text-muted/50">
                    <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                    <span className="text-xs uppercase tracking-[0.12em]">Photo coming soon</span>
                  </div>
                </div>
                <p className="font-[var(--font-heading)] text-base font-semibold text-fg">
                  {m.role}
                </p>
                <p className="mt-1 text-sm text-muted/60">
                  Biography pending
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
