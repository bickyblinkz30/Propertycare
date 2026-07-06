import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | PropertyCare Paint and Electrics Ltd",
  description:
    "Professional painting, decorating, electrical and property maintenance services in Sunderland. Free quotations available for residential and commercial clients.",
  openGraph: {
    title: "Services | PropertyCare Paint and Electrics Ltd",
    description:
      "Professional painting, decorating, electrical and property maintenance services in Sunderland and the surrounding areas.",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
