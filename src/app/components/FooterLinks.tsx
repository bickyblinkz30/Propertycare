"use client";
import { serviceAreas } from "@/lib/site";

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
    // Sourced from the canonical service-area list in src/lib/site.ts so it
    // can never drift from the homepage / contact / FAQ lists again.
    items: serviceAreas.map((area) => [area, "#areas"] as [string, string]),
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
            color: "#C9A227",
            marginBottom: 22,
            fontWeight: 700,
          }}>
            {h}
          </div>
          <ul style={{ listStyle: "none" }}>
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
