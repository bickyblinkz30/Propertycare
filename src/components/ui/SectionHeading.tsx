import { Reveal } from "@/components/ui/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
}) {
  const alignCls = align === "center" ? "mx-auto text-center items-center" : "";
  return (
    <Reveal className={`flex max-w-2xl flex-col ${alignCls}`}>
      <p className="eyebrow mb-3 flex items-center gap-2">
        <span className="h-px w-7 bg-accent/60" />
        {eyebrow}
      </p>
      <h2
        className="font-[var(--font-heading)] font-bold leading-[1.08] tracking-[-0.02em] text-fg"
        style={{ fontSize: "var(--text-h2)" }}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={`mt-4 text-muted ${align === "center" ? "" : "max-w-[52ch]"}`}
          style={{ fontSize: "var(--text-body-lg)" }}
        >
          {intro}
        </p>
      ) : null}
    </Reveal>
  );
}
