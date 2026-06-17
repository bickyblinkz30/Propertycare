import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Choose Us | Property Care Paint & Electrics",
  description:
    "Discover why homeowners, landlords and businesses choose Property Care Paint & Electrics for reliable property services and quality workmanship.",
  openGraph: {
    title: "Why Choose Us | Property Care Paint & Electrics",
    description:
      "Discover why homeowners, landlords and businesses choose Property Care Paint & Electrics for reliable property services and quality workmanship.",
  },
};

export default function WhyChooseUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
