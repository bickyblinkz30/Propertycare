"use client";

const COLS = [
  {
    h: "Services",
    items: [
      ["Painting & Decorating", "#services"],
      ["Electrical & Lighting", "#services"],
      ["Bespoke Media Walls", "#services"],
      ["Property Maintenance", "#services"],
    ],
  },
  {
    h: "Areas",
    items: [
      ["Sunderland", "#areas"],
      ["Washington", "#areas"],
      ["Seaham", "#areas"],
      ["South Shields", "#areas"],
      ["Gateshead", "#areas"],
      ["Newcastle", "#areas"],
      ["Durham", "#areas"],
    ],
  },
  {
    h: "Contact",
    items: [
      ["WhatsApp Us", "https://wa.me/447922909983"],
      ["Text Message", "sms:+447922909983"],
      ["07922 909983", "tel:+447922909983"],
    ],
  },
];

export default function FooterLinks() {
  return (
    <>
      {COLS.map(({ h, items }) => (
        <div key={h}>
          <div
            style={{
              fontSize: 9,
              letterSpacing: "0.26em",
              textTransform: "uppercase",
              color: "#B8935A",
              marginBottom: 20,
              fontWeight: 500,
            }}
          >
            {h}
          </div>
          <ul style={{ listStyle: "none" }}>
            {items.map(([label, href]) => (
              <li key={label} style={{ marginBottom: 11 }}>
                <a
                  href={href}
                  className="footer-link"
                  style={{
                    fontSize: 13,
                    color: "#9E9488",
                    textDecoration: "none",
                    fontWeight: 300,
                    transition: "color 0.25s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color = "#F8F5F0")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color = "#9E9488")
                  }
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
