import { siteContent } from "@/data";
import { styles } from "./UI";

export default function EditionGrid() {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,300px),1fr))] gap-[18px]">
      {siteContent.constitution.editions.map((edition) => (
        <article
          className={`${styles.card} ${styles.reveal} relative flex flex-col overflow-hidden border-t-4 px-[20px] pt-[20px] pb-[18px] shadow-none! ${edition.latest ? "border-t-gold [background:linear-gradient(#fffaf0,#fff_55%)]" : "border-t-line-strong"}`}
          key={edition.number}
        >
          <div className="mb-[10px] flex items-center justify-between gap-[10px]">
            <span
              className="grid size-[44px] place-items-center rounded-full border-2 border-line-strong bg-[#f6f3ea] font-serif text-[1.3rem] font-bold text-muted"
              aria-hidden="true"
            >
              {edition.number}
            </span>
            <div className="flex flex-wrap justify-end gap-[6px]">
              {edition.badges.map((badge, index) => (
                <span
                  className={`rounded-full px-[10px] py-[1px] text-[.75rem] font-bold whitespace-nowrap ${edition.latest && index === 0 ? "bg-gold text-navy-950" : "bg-[#f1ede2] text-muted"}`}
                  key={badge}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
          <h3 className={`${styles.heading} text-[1.3rem]`}>{edition.title}</h3>
          <p className="mb-[8px] text-[.85rem] text-muted" lang="en">
            {edition.en}
          </p>
          <p className="mb-[1em] text-[.93rem] leading-[1.65] text-muted">
            {edition.description}
          </p>
          <div className="mt-auto flex flex-wrap gap-[8px]">
            <span
              className={`${styles.button} cursor-not-allowed! border-transparent bg-[#f1ede2] text-[#8a8778] hover:[transform:none]!`}
              aria-disabled="true"
            >
              {edition.actionLabel}
            </span>
          </div>
        </article>
      ))}
    </div>
  );
}
