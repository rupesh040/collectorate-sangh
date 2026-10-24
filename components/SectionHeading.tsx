import Link from "next/link";
import type { SectionHeadingProps } from "@/data/type";
import Icon from "./Icon";

export default function SectionHeading({ heading, id }: SectionHeadingProps) {
  return (
    <div className="scope-section-heading contents">
      <div className="sh">
        <div className="sh__text">
          {heading.eyebrow && (
            <span className="eyebrow" lang="en">
              {heading.eyebrow}
            </span>
          )}
          <h2 className="sh__title" id={id}>
            {heading.title}
          </h2>
          {heading.lead && <p className="sh__lead">{heading.lead}</p>}
        </div>
        {heading.link && (
          <Link className="sh__link" href={heading.link.href}>
            {heading.link.label}
            <Icon name="arrow" />
          </Link>
        )}
      </div>
    </div>
  );
}
