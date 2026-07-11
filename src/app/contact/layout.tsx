import type { Metadata } from "next";
import { brand } from "@/lib/site";

export const metadata: Metadata = {
  title: `Contact Us | ${brand.full}`,
  description:
    `Contact ${brand.full} for painting, decorating, electrical and property maintenance services. Free quotations available across Sunderland and the surrounding areas.`,
  openGraph: {
    title: `Contact Us | ${brand.full}`,
    description:
      `Contact ${brand.full} for painting, decorating, electrical and property maintenance services. Free quotations available across Sunderland and the surrounding areas.`,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
