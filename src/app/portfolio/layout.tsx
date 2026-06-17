import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Property Care Paint & Electrics",
  description:
    "View recent painting, decorating, electrical and property maintenance projects completed by Property Care Paint & Electrics.",
  openGraph: {
    title: "Portfolio | Property Care Paint & Electrics",
    description:
      "View recent painting, decorating, electrical and property maintenance projects completed by Property Care Paint & Electrics.",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
