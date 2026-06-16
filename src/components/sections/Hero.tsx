"use client";

import { motion, useReducedMotion } from "framer-motion";
import { contact, brand } from "@/lib/site";
import { CTAButton } from "@/components/ui/CTAButton";
import { WhatsAppIcon, SmsIcon, StarIcon, ArrowIcon } from "@/components/icons";

/*
  Cinematic hero. Until real ambient finished-room video / photography exists,
  a layered dark gradient + soft brass glow stands in as a PREMIUM PLACEHOLDER.
  Replace `.hero-visual` background with <video>/optimised <Image> on shoot.
*/
export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-end overflow-hidden pb-14 pt-32 md:items-center md:pb-0 md:pt-40"
    >
      {/* Cinematic backdrop (placeholder for video/photography) */}
      <div aria-hidden className="hero-visual absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_70%_15%,#1c241f_0%,#0d0f0d_45%,#0a0a0a_100%)]" />
        <div className="absolute right-[-10%] top-[-10%] h-[60vh] w-[60vh] rounded-full bg-[radial-gradient(circle,rgba(201,168,106,0.18),transparent_65%)] blur-2xl" />
        <div className="absolute bottom-[-15%] left-[-5%] h-[50vh] w-[50vh] rounded-full bg-[radial-gradient(circle,rgba(29,143,90,0.16),transparent_65%)] blur-2xl" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" />
      </div>

      <div className="container-px">
        <motion.p
          className="eyebrow mb-5 flex items-center gap-2"
          initial={{ opacity: 0, y: reduce ? 0 : 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="h-px w-8 bg-accent/60" />
          Premium Property Transformation · Sunderland &amp; the North East
        </motion.p>

        <motion.h1
          className="max-w-[16ch] font-[var(--font-display)] font-bold leading-[1.04] tracking-[-0.02em] text-fg"
          style={{ fontSize: "var(--text-display)" }}
          initial={{ opacity: 0, y: reduce ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08 }}
        >
          Transforming homes with precision, craft&nbsp;&amp;&nbsp;care.
        </motion.h1>

        <motion.p
          className="mt-6 max-w-[52ch] text-muted"
          style={{ fontSize: "var(--text-body-lg)" }}
          initial={{ opacity: 0, y: reduce ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.16 }}
        >
          {brand.positioning} Painting &amp; decorating, electrical &amp;
          lighting, bespoke media walls and property maintenance — delivered by
          one accountable, certified team.
        </motion.p>

        <motion.div
          className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
          initial={{ opacity: 0, y: reduce ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24 }}
        >
          <CTAButton href="#contact" variant="primary" size="lg">
            Book a free survey <ArrowIcon className="h-4 w-4" />
          </CTAButton>
          <CTAButton href={contact.whatsapp} variant="ghost" size="lg" external>
            <WhatsAppIcon className="h-5 w-5" /> WhatsApp us
          </CTAButton>
          <CTAButton href={contact.sms} variant="ghost" size="lg">
            <SmsIcon className="h-5 w-5" /> Text us
          </CTAButton>
        </motion.div>

        <motion.p
          className="mt-4 text-sm text-muted/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.32 }}
        >
          Takes 2 minutes · No obligation · Free, no-pressure quote
        </motion.p>

        {/* Inline mini trust */}
        <motion.div
          className="mt-10 flex items-center gap-3 text-sm text-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <span className="flex text-accent" aria-hidden>
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} className="h-4 w-4" />
            ))}
          </span>
          <span>Trusted across the North East · Fully insured &amp; guaranteed</span>
        </motion.div>
      </div>
    </section>
  );
}
