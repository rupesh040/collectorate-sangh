import type { Metadata } from "next";
import { pages, metadata as siteMetadata } from "@/data";
import About from "@/components/About";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: `${pages.about.title} | ${siteMetadata.title}`,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader pageKey="about" />
      <About full />
    </>
  );
}
