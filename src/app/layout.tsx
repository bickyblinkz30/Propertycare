import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Propertycare Paints & Electrics | Premium Property Transformations — Sunderland",
  description:
    "Sunderland's premium painting & decorating, electrical & lighting, bespoke media walls and property maintenance specialists. One accountable team. Free quotes. Fully insured.",
  keywords:
    "Painter and Decorator Sunderland, Electrician Sunderland, Media Wall Sunderland, Property Maintenance Sunderland",
  openGraph: {
    title: "Propertycare Paints & Electrics | Premium Property Transformations",
    description:
      "One certified team for painting, electrical, media walls and property maintenance across Sunderland and the North East.",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Propertycare Paints & Electrics",
              description: "Premium painting & decorating, electrical, media walls and property maintenance in Sunderland and the North East.",
              telephone: "+447922909983",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Sunderland",
                addressRegion: "Tyne and Wear",
                addressCountry: "GB",
              },
              areaServed: ["Sunderland","Washington","Seaham","South Shields","Gateshead","Newcastle upon Tyne","Durham"],
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
