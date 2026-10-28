import type { Metadata } from "next";
import { pages, metadata as siteMetadata } from "@/data";
import Memorandum from "@/components/Memorandum";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: `${pages.memorandum.title} | ${siteMetadata.title}`,
};

export default function MemorandumPage() {
  return (
    <>
      <PageHeader pageKey="memorandum" />
      <Memorandum />
    </>
  );
}

