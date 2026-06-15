import { contact } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";
import { CTAButton } from "@/components/ui/CTAButton";
import { WhatsAppIcon, SmsIcon, PhoneIcon, ArrowIcon } from "@/components/icons";

/*
  Final, frictionless conversion. WhatsApp → SMS → Call are primary;
  the form is the optional secondary path.
*/
export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-surface py-20 md:py-28">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[40vh] w-[40vh] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(29,143,90,0.14),transparent_65%)] blur-2xl" />
      </div>

      <div className="container-px">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-3 justify-center">Start your transformation</p>
          <h2
            className="font-[var(--font-heading)] font-bold leading-[1.1] tracking-[-0.02em] text-fg"
            style={{ fontSize: "var(--text-h2)" }}
          >
            Tell us about your space.
          </h2>
          <p className="mx-auto mt-4 max-w-[46ch] text-muted" style={{ fontSize: "var(--text-body-lg)" }}>
            The fastest way to a free, no-obligation quote is a quick message.
            Tap WhatsApp and we&apos;ll reply with next steps.
          </p>
        </Reveal>

        <Reveal className="mx-auto mt-10 flex max-w-xl flex-col gap-3" delay={0.1}>
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-4 rounded-2xl bg-primary px-6 py-5 text-white transition-colors hover:bg-primary-hover"
          >
            <span className="flex items-center gap-3">
              <WhatsAppIcon className="h-7 w-7" />
              <span className="text-left">
                <span className="block font-[var(--font-heading)] font-semibold">WhatsApp us</span>
                <span className="block text-sm text-white/80">Fastest reply · pre-filled message</span>
              </span>
            </span>
            <ArrowIcon className="h-5 w-5" />
          </a>

          <div className="grid gap-3 sm:grid-cols-2">
            <a
              href={contact.sms}
              className="flex items-center gap-3 rounded-2xl border border-border bg-card px-6 py-5 text-fg transition-colors hover:border-accent/50"
            >
              <SmsIcon className="h-6 w-6 text-accent" />
              <span className="text-left">
                <span className="block font-[var(--font-heading)] font-semibold">Text us</span>
                <span className="block text-sm text-muted">{contact.display}</span>
              </span>
            </a>
            <a
              href={contact.tel}
              className="flex items-center gap-3 rounded-2xl border border-border bg-card px-6 py-5 text-fg transition-colors hover:border-accent/50"
            >
              <PhoneIcon className="h-6 w-6 text-accent" />
              <span className="text-left">
                <span className="block font-[var(--font-heading)] font-semibold">Call us</span>
                <span className="block text-sm text-muted">{contact.display}</span>
              </span>
            </a>
          </div>

          <p className="mt-2 text-center text-sm text-muted/80">
            Takes 2 minutes · No obligation · Free, no-pressure quote
          </p>
        </Reveal>

        {/* Optional secondary path: enquiry form */}
        <Reveal className="mx-auto mt-12 max-w-xl" delay={0.15}>
          <div className="hairline mb-8" />
          <p className="mb-6 text-center text-sm uppercase tracking-[0.16em] text-muted">
            Prefer to send details? Use the form
          </p>
          <form
            className="grid gap-4"
            // Progressive enhancement note: wire to a real handler/route on launch.
            action="#"
            method="post"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" autoComplete="name" required />
              <Field label="Phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" required />
            </div>
            <Field label="Email" name="email" type="email" autoComplete="email" inputMode="email" />
            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-sm text-muted">
                Tell us about your space
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="rounded-lg border border-border bg-card px-4 py-3 text-fg placeholder:text-muted/60 focus-visible:border-primary"
                placeholder="e.g. full repaint + a media wall with electric fire in the living room"
              />
            </div>
            <label className="flex items-start gap-3 text-sm text-muted">
              <input type="checkbox" name="consent" required className="mt-1 accent-primary" />
              <span>I agree to be contacted about my enquiry. We never share your details.</span>
            </label>
            <div>
              <CTAButton href="#contact" variant="primary" size="lg" className="w-full sm:w-auto">
                Request my free quote <ArrowIcon className="h-4 w-4" />
              </CTAButton>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  ...rest
}: {
  label: string;
  name: string;
  type?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm text-muted">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="rounded-lg border border-border bg-card px-4 py-3 text-fg placeholder:text-muted/60 focus-visible:border-primary"
        {...rest}
      />
    </div>
  );
}
