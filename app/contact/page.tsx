import type { Metadata } from "next";
import { pages, metadata as siteMetadata } from "@/data";
import Contact from "@/components/Contact";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: `${pages.contact.title} | ${siteMetadata.title}`,
};

export default function ContactPage() {
  return (
    <>
      <PageHeader pageKey="contact" />
      <Contact full />
    </>
  );
}
