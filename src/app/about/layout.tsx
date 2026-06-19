import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Property Care Paint & Electrics",
  description:
    "Meet Property Care Paint & Electrics — a Sunderland-based team of certified painters, electricians and property specialists delivering every project through one accountable team.",
  openGraph: {
    title: "About Us | Property Care Paint & Electrics",
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
