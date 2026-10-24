import Link from "next/link";
import { siteContent } from "@/data";
import type { PageHeaderProps } from "@/data/type";
import { styles } from "./UI";

export default function PageHeader({ page }: PageHeaderProps) {
  return (
    <div className="py-[clamp(28px,5vw,48px)] text-white [background:radial-gradient(600px_240px_at_90%_0%,#d99a0b2e,transparent_70%),linear-gradient(135deg,#131d55,#1b2a6e)]">
      <div className={styles.wrap}>
        <nav aria-label={siteContent.ui.breadcrumb}>
          <ol className="m-0 flex flex-wrap list-none p-0 text-[.875rem] text-[#ffffffbf]">
            <li>
              <Link
                className="text-white underline underline-offset-[3px]"
                href="/"
              >
                {siteContent.header.nav[0].label}
              </Link>
            </li>
            <li
              className="before:mx-[.5em] before:text-gold-soft before:content-['›']"
              aria-current="page"
            >
              {page.breadcrumb}
            </li>
          </ol>
        </nav>
        <h1 className="mt-[.25em] mb-[.1em] font-serif text-[clamp(1.6rem,4vw,2.4rem)] leading-[1.35] font-bold text-white">
          {page.title}
        </h1>
        <p
          className="m-0 text-[.95rem] tracking-[.03em] text-gold-soft"
          lang="en"
        >
          {page.englishTitle}
        </p>
      </div>
    </div>
  );
}
