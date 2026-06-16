"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CTAButton } from "@/components/ui/CTAButton";
import { ArrowIcon } from "@/components/icons";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative flex min-h-[80svh] items-center overflow-hidden pt-32 md:pt-40">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_30%_20%,#1c241f_0%,#0d0f0d_45%,#0a0a0a_100%)]" />
        <div className="absolute left-[-5%] top-[-5%] h-[55vh] w-[55vh] rounded-full bg-[radial-gradient(circle,rgba(201,168,106,0.15),transparent_65%)] blur-2xl" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent" />
      </div>

      <div className="container-px">
        <motion.p
          className="eyebrow mb-5 flex items-center gap-2"
          initial={{ opacity: 0, y: reduce ? 0 : 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="h-px w-8 bg-accent/60" />
          About Propertycare
        </motion.p>

        <motion.h1
          className="max-w-[14ch] font-[var(--font-display)] font-bold leading-[1.04] tracking-[-0.02em] text-fg"
          style={{ fontSize: "var(--text-display)" }}
          initial={{ opacity: 0, y: reduce ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08 }}
        >
          One team, one standard: yours.
        </motion.h1>

        <motion.p
          className="mt-6 max-w-[52ch] text-muted"
          style={{ fontSize: "var(--text-body-lg)" }}
          initial={{ opacity: 0, y: reduce ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.16 }}
        >
          We are Propertycare — a Sunderland-based team of certified painters,
          electricians and property specialists. Unlike the industry standard of
          subcontracted trades, every project is delivered by one accountable
          team from start to finish.
        </motion.p>

        <motion.div
          className="mt-9"
          initial={{ opacity: 0, y: reduce ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24 }}
        >
          <CTAButton href="/#services" variant="primary" size="lg">
            Explore our services <ArrowIcon className="h-4 w-4" />
          </CTAButton>
        </motion.div>
      </div>
    </section>
  );
}
