import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Choose Us | PropertyCare Paint and Electrics Ltd",
  description:
    "Discover why homeowners, landlords and businesses choose PropertyCare Paint and Electrics Ltd for reliable property services and quality workmanship.",
  openGraph: {
    title: "Why Choose Us | PropertyCare Paint and Electrics Ltd",
    description:
      "Discover why homeowners, landlords and businesses choose PropertyCare Paint and Electrics Ltd for reliable property services and quality workmanship.",
  },
};

export default function WhyChooseUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
