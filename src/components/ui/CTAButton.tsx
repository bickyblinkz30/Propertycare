import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "ghost" | "whatsapp";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-[var(--font-heading)] font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2";

const sizes = {
  md: "px-6 py-3 text-[0.95rem]",
  lg: "px-7 py-3.5 text-base",
};

const variants: Record<Variant, string> = {
  // Green owns action
  primary:
    "bg-primary text-white hover:bg-primary-hover focus-visible:outline-primary-hover",
  whatsapp:
    "bg-primary text-white hover:bg-primary-hover focus-visible:outline-primary-hover",
  // Quiet, outlined — never the metallic on a fill
  ghost:
    "border border-white/20 text-fg hover:border-accent hover:text-accent bg-transparent",
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  size = "md",
  external,
  className = "",
  ariaLabel,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: keyof typeof sizes;
  external?: boolean;
  className?: string;
  ariaLabel?: string;
}) {
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;
  const isHashOrTel = href.startsWith("#") || href.startsWith("tel:") || href.startsWith("sms:");

  if (external || href.startsWith("http") || isHashOrTel) {
    return (
      <a
        href={href}
        className={cls}
        aria-label={ariaLabel}
        {...(external || href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
