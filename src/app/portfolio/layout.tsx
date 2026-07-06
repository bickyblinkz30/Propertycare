import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | PropertyCare Paint and Electrics Ltd",
  description:
    "View recent painting, decorating, electrical and property maintenance projects completed by PropertyCare Paint and Electrics Ltd.",
  openGraph: {
    title: "Portfolio | PropertyCare Paint and Electrics Ltd",
    description:
      "View recent painting, decorating, electrical and property maintenance projects completed by PropertyCare Paint and Electrics Ltd.",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
