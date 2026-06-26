"use client";
import { serviceAreas } from "@/lib/site";

// Footer shows the primary area + closest towns, then a non-numeric "more
// areas" closer — sourced from the canonical serviceAreas list (no separate
// hardcoded list) so it never drifts, while keeping the footer column compact.
const FOOTER_AREA_COUNT = 7;
const footerAreaItems: [string, string][] = serviceAreas
  .slice(0, FOOTER_AREA_COUNT)
  .map((area) => [area, "#areas"] as [string, string]);
if (serviceAreas.length > FOOTER_AREA_COUNT) {
  footerAreaItems.push(["& many more areas", "#areas"]);
}

const COLS: { h: string; items: [string, string][] }[] = [
  {
    h: "Services",
    items: [
      ["Painting & Decorating", "#services"],
      ["Electrical Services", "#services"],
      ["TV Media Wall Installation", "#services"],
      ["Property Maintenance", "#services"],
    ],
  },
  {
    h: "Areas Covered",
    items: footerAreaItems,
  },
  {
    h: "Quick Links",
    items: [
      ["WhatsApp Us", "https://wa.me/447922909982"],
      ["Text Message", "sms:+447922909982"],
      ["07922 909982", "tel:+447922909982"],
      ["Get a Free Quote", "/contact"],
    ],
  },
];

export default function FooterLinks() {
  return (
    <>
      {COLS.map(({ h, items }) => (
        <div key={h}>
          <div style={{
            fontSize: 11,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--color-accent)",
            marginBottom: 22,
            fontWeight: 700,
          }}>
            {h}
          </div>
          <ul style={{
            listStyle: "none",
            // "Areas Covered" → two columns of four (column-major fill: down
            // column 1, then column 2). Other footer columns stay single.
            ...(h === "Areas Covered" ? {
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gridTemplateRows: "repeat(4, auto)",
              gridAutoFlow: "column",
              columnGap: 24,
            } : {}),
          }}>
            {items.map(([label, href]) => (
              <li key={label} style={{ marginBottom: 13 }}>
                <a
                  href={href}
                  className="footer-link"
                  style={{
                    fontSize: 14,
                    color: "#C9C0B4",
                    textDecoration: "none",
                    fontWeight: 500,
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
