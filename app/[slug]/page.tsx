import type { Metadata } from "next";
import type { RoutePageProps } from "@/data/type";
import { notFound } from "next/navigation";
import { pages, metadata } from "@/data";
import PageHeader from "@/components/PageHeader";
import About from "@/components/About";
import OfficeBearers from "@/components/OfficeBearers";
import Constitution from "@/components/Constitution";
import Events from "@/components/Events";
import EmployeeInformation from "@/components/EmployeeInformation";
import Contact from "@/components/Contact";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(pages)
    .filter((slug) => slug !== "index")
    .map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: RoutePageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = pages[slug];
  return { title: page ? `${page.title} | ${metadata.title}` : metadata.title };
}

export default async function ContentPage({ params }: RoutePageProps) {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) notFound();
  const sections = {
    about: <About full />,
    "office-bearers": <OfficeBearers full />,
    samvidhan: <Constitution full />,
    events: <Events full />,
    "employee-information": <EmployeeInformation full />,
    contact: <Contact full />,
  };
  const section = sections[slug as keyof typeof sections];
  if (!section) notFound();
  return (
    <>
      <PageHeader page={page} />
      {section}
    </>
  );
}
