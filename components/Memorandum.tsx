"use client";

import { useLanguage } from "./LanguageProvider";
import SectionHeading from "./SectionHeading";
import Icon from "./Icon";
import { styles } from "./UI";

const memorandumCards = {
  hi: [
    {
      title: "मांग पत्र राजस्व परिषद दिनांक 22-10-2026",
      date: "22-10-2026",
      pdfHref: "/assets/Memorandum.pdf",
    },
  ],
  en: [
    {
      title: "Demand Letter Revenue Council dated 22-10-2026",
      date: "22-10-2026",
      pdfHref: "/assets/Memorandum.pdf",
    },
  ],
};

const heading = {
  hi: {
    eyebrow: "Memorandum / Correspondence",
    title: "ज्ञापन / पत्राचार",
    lead: "संघ द्वारा प्रेषित महत्वपूर्ण ज्ञापन एवं पत्राचार।",
  },
  en: {
    eyebrow: "Memorandum / Correspondence",
    title: "Memorandum / Correspondence",
    lead: "Important memorandums and correspondence sent by the Sangh.",
  },
};

export default function Memorandum() {
  const { language } = useLanguage();
  const cards = memorandumCards[language];
  const sectionHeading = heading[language];

  return (
    <section className={`${styles.section}`} id="memorandum">
      <div className={styles.wrap}>
        <SectionHeading heading={sectionHeading} id="memorandum-heading" />
        <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-[24px]">
          {cards.map((card) => (
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
                  PDF
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
                  {language === "hi" ? "दिनांक" : "Date"}: {card.date}
                </span>
              </div>

              {/* CTA */}
              <div className="mt-auto flex items-center gap-[6px] text-[.9rem] font-semibold text-navy group-hover:text-red">
                <Icon name="eye" className="size-[18px]" />
                <span>
                  {language === "hi" ? "PDF देखें" : "View PDF"}
                </span>
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

