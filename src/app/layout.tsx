import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { serviceAreasStructured } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300","400","500","600","700","800","900"],
  variable: "--font-inter",
  display: "swap",
});

// FIX 13 — serif display face for headings (paired with Inter for body).
// CONFIRM WITH CLIENT: Playfair Display is a first-pass choice for review.
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500","600","700","800","900"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Property Care Paint & Electrics | Sunderland's Trusted Property Specialists",
  description:
    "Sunderland's premium painting, decorating, electrical and property maintenance specialists. Residential & commercial. Fully insured. Free quotations. NICEIC certified.",
  keywords:
    "Painter and Decorator Sunderland, Electrician Sunderland, Media Wall Sunderland, Property Maintenance Sunderland, North East",
  openGraph: {
    title: "Property Care Paint & Electrics | Premium Property Services",
    description:
      "One certified team for painting, electrical, media walls and maintenance across Sunderland and the surrounding areas.",
    type: "website",
    locale: "en_GB",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Property Care Paint & Electrics",
              description:
                "Premium painting, decorating, electrical and property maintenance in Sunderland and the surrounding areas.",
              telephone: "+447922909982",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Sunderland",
                addressRegion: "Tyne and Wear",
                addressCountry: "GB",
              },
              areaServed: serviceAreasStructured,
              openingHours: "Mo-Fr 07:00-18:00",
              priceRange: "££",
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
