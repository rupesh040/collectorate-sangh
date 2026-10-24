import Link from "next/link";
import type { SectionHeadingProps } from "@/data/type";
import Icon from "./Icon";
import { styles } from "./UI";

export default function SectionHeading({ heading, id }: SectionHeadingProps) {
  return (
    <div className="mb-[clamp(24px,3.5vw,36px)] flex flex-wrap items-end justify-between gap-x-[24px] gap-y-[12px]">
      <div className="max-w-[760px]">
        {heading.eyebrow && (
          <span className={styles.eyebrow} lang="en">
            {heading.eyebrow}
          </span>
        )}
        <h2
          className="relative mt-[.1em] mb-0 pb-[12px] font-serif text-[clamp(1.55rem,3.2vw,2.15rem)] leading-[1.35] font-bold text-navy-900 after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[64px] after:rounded-[2px] after:content-[''] after:[background:linear-gradient(90deg,#d99a0b_0_70%,#a8162a_70%_100%)]"
          id={id}
        >
          {heading.title}
        </h2>
        {heading.lead && (
          <p className="mt-[14px] mb-0 text-muted">{heading.lead}</p>
        )}
      </div>
      {heading.link && (
        <Link
          className="group inline-flex items-center gap-[6px] font-semibold whitespace-nowrap text-navy no-underline"
          href={heading.link.href}
        >
          {heading.link.label}
          <Icon
            name="arrow"
            className="size-[18px] transition-transform duration-200 [transition-timing-function:ease] group-hover:translate-x-[3px]"
          />
        </Link>
      )}
    </div>
  );
}
