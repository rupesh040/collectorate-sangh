import type { Metadata } from "next";
import { pages, metadata as siteMetadata } from "@/data";
import EmployeeInformation from "@/components/EmployeeInformation";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: `${pages["employee-information"].title} | ${siteMetadata.title}`,
};

export default function EmployeeInformationPage() {
  return (
    <>
      <PageHeader pageKey="employee-information" />
      <EmployeeInformation full />
    </>
  );
}
