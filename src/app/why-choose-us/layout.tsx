import type { Metadata } from "next";
import { brand } from "@/lib/site";

export const metadata: Metadata = {
  title: `Why Choose Us | ${brand.full}`,
  description: `Discover why homeowners, landlords and businesses choose ${brand.full} for reliable property services and quality workmanship.`,
  openGraph: {
    title: `Why Choose Us | ${brand.full}`,
    description: `Discover why homeowners, landlords and businesses choose ${brand.full} for reliable property services and quality workmanship.`,
  },
};

export default function WhyChooseUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
