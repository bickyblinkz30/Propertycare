import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Property Care Paint & Electrics Ltd",
  description:
    "View recent painting, decorating, electrical and property maintenance projects completed by Property Care Paint & Electrics Ltd.",
  openGraph: {
    title: "Portfolio | Property Care Paint & Electrics Ltd",
    description:
      "View recent painting, decorating, electrical and property maintenance projects completed by Property Care Paint & Electrics Ltd.",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
