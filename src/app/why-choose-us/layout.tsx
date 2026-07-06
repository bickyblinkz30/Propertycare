import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Choose Us | PropertyCare Paints & Electrics Ltd",
  description:
    "Discover why homeowners, landlords and businesses choose PropertyCare Paints & Electrics Ltd for reliable property services and quality workmanship.",
  openGraph: {
    title: "Why Choose Us | PropertyCare Paints & Electrics Ltd",
    description:
      "Discover why homeowners, landlords and businesses choose PropertyCare Paints & Electrics Ltd for reliable property services and quality workmanship.",
  },
};

export default function WhyChooseUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
