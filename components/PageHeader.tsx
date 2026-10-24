import Link from "next/link";
import { siteContent } from "@/data";
import type { PageHeaderProps } from "@/data/type";

export default function PageHeader({ page }: PageHeaderProps) {
  return (
    <div className="scope-page-header contents">
      <div className="page-header">
        <div className="wrap">
          <nav aria-label={siteContent.ui.breadcrumb}>
            <ol className="crumbs">
              <li>
                <Link href="/">{siteContent.header.nav[0].label}</Link>
              </li>
              <li aria-current="page">{page.breadcrumb}</li>
            </ol>
          </nav>
          <h1>{page.title}</h1>
          <p className="en" lang="en">
            {page.englishTitle}
          </p>
        </div>
      </div>
    </div>
  );
}
