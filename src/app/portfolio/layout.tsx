import type { Metadata } from "next";
import { brand } from "@/lib/site";

export const metadata: Metadata = {
  title: `Portfolio | ${brand.full}`,
  description:
    `View recent painting, decorating, electrical and property maintenance projects completed by ${brand.full}.`,
  openGraph: {
    title: `Portfolio | ${brand.full}`,
    description:
      `View recent painting, decorating, electrical and property maintenance projects completed by ${brand.full}.`,
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
