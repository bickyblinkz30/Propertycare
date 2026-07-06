import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | PropertyCare Paint and Electrics Ltd",
  description:
    "Contact PropertyCare Paint and Electrics Ltd for painting, decorating, electrical and property maintenance services. Free quotations available across Sunderland and the surrounding areas.",
  openGraph: {
    title: "Contact Us | PropertyCare Paint and Electrics Ltd",
    description:
      "Contact PropertyCare Paint and Electrics Ltd for painting, decorating, electrical and property maintenance services. Free quotations available across Sunderland and the surrounding areas.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
