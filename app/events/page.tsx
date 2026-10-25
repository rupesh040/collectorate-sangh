import type { Metadata } from "next";
import { pages, metadata as siteMetadata } from "@/data";
import Events from "@/components/Events";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: `${pages.events.title} | ${siteMetadata.title}`,
};

export default function EventsPage() {
  return (
    <>
      <PageHeader pageKey="events" />
      <Events full />
    </>
  );
}
