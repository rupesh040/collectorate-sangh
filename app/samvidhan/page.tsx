import type { Metadata } from "next";
import { pages, metadata as siteMetadata } from "@/data";
import Constitution from "@/components/Constitution";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: `${pages.samvidhan.title} | ${siteMetadata.title}`,
};

export default function SamvidhanPage() {
  return (
    <>
      <PageHeader pageKey="samvidhan" />
      <Constitution full />
    </>
  );
}
