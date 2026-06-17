import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Property Care Paint & Electrics",
  description:
    "Contact Property Care Paint & Electrics for painting, decorating, electrical and property maintenance services. Free quotations available across Sunderland and surrounding areas.",
  openGraph: {
    title: "Contact Us | Property Care Paint & Electrics",
    description:
      "Contact Property Care Paint & Electrics for painting, decorating, electrical and property maintenance services. Free quotations available across Sunderland and surrounding areas.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
