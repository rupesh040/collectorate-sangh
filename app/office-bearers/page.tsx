import type { Metadata } from "next";
import { pages, metadata as siteMetadata } from "@/data";
import OfficeBearers from "@/components/OfficeBearers";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: `${pages["office-bearers"].title} | ${siteMetadata.title}`,
};

export default function OfficeBearersPage() {
  return (
    <>
      <PageHeader pageKey="office-bearers" />
      <OfficeBearers full />
    </>
  );
}
