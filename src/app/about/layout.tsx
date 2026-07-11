import type { Metadata } from "next";
import { brand } from "@/lib/site";

export const metadata: Metadata = {
  title: `About Us | ${brand.full}`,
  description: `Meet ${brand.full} — a Sunderland-based team of certified painters, electricians and property specialists delivering every project through one accountable team.`,
  openGraph: {
    title: `About Us | ${brand.full}`,
    description:
      "One Sunderland-based team for painting, decorating, electrical work and property maintenance — one point of contact, one written guarantee on every project.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
