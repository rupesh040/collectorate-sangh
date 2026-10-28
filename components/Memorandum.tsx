"use client";

import { useContent } from "./LanguageProvider";
import SectionHeading from "./SectionHeading";
import Icon from "./Icon";
import { styles } from "./UI";

export default function Memorandum() {
  const { memorandum, ui } = useContent();
  const { heading, items } = memorandum;

  return (
    <section className={`${styles.section}`} id="memorandum">
      <div className={styles.wrap}>
        <SectionHeading heading={heading} id="memorandum-heading" />
        <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-[24px]">
          {items.map((card) => (
            <a
              key={card.title}
              href={card.pdfHref}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.card} ${styles.cardHover} group flex flex-col gap-[16px] p-[24px] no-underline transition-all`}
            >
              {/* Icon & Badge row */}
              <div className="flex items-start justify-between">
                <div className="flex size-[52px] items-center justify-center rounded-[10px] bg-navy/10 text-navy transition-colors group-hover:bg-navy group-hover:text-white">
                  <Icon name="document" className="size-[26px]" />
                </div>
                <span className="inline-flex items-center gap-[4px] rounded-full bg-red/10 px-[10px] py-[3px] text-[.75rem] font-semibold text-red">
                  {card.badge ?? "PDF"}
                </span>
              </div>

              {/* Title */}
              <h3 className="m-0 font-serif text-[1.1rem] leading-[1.4] font-bold text-navy-900 group-hover:text-navy">
                {card.title}
              </h3>

              {/* Date */}
              <div className="flex items-center gap-[6px] text-[.85rem] text-muted">
                <Icon name="calendar" className="size-[16px] shrink-0" />
                <span>
                  {ui.date} {card.date}
                </span>
              </div>

              {/* CTA */}
              <div className="mt-auto flex items-center gap-[6px] text-[.9rem] font-semibold text-navy group-hover:text-red">
                <Icon name="eye" className="size-[18px]" />
                <span>{ui.pdfView}</span>
                <Icon
                  name="external"
                  className="size-[16px] ml-auto opacity-50 transition-opacity group-hover:opacity-100"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
