import { siteContent } from "@/data";
import type { DocumentCardProps } from "@/data/type";
import Icon from "./Icon";
import { styles } from "./UI";

export default function DocumentCard({ document }: DocumentCardProps) {
  return (
    <article
      className={`${styles.card} ${styles.cardHover} ${styles.reveal} group/document grid grid-cols-[170px_1fr] overflow-hidden [@media(width<=520px)]:grid-cols-1`}
    >
      <div
        className="grid place-items-center border-r border-line px-[16px] py-[20px] [background:repeating-linear-gradient(45deg,#1b2a6e0a_0_10px,#0000_10px_20px),#eef2f9] [@media(width<=520px)]:border-r-0 [@media(width<=520px)]:border-b"
        aria-hidden="true"
      >
        <div className="relative flex aspect-[1/1.414] w-[124px] flex-col items-center border border-[#d9dcea] border-t-4 border-t-navy bg-white px-[8px] py-[10px] text-center shadow-[4px_5px_0_-1px_#dfe4f0,0_1px_2px_#131d550f,0_6px_20px_#131d5512] [transition:transform_.3s] group-hover/document:[transform:rotate(-2deg)_translateY(-2px)]">
          <img
            className="w-[34px] rounded-full"
            src={document.logo.src}
            alt=""
            width={document.logo.width}
            height={document.logo.height}
            loading="lazy"
            decoding="async"
          />
          <p className="mt-[4px] text-[.5rem] leading-[1.3] text-muted">
            {document.organization}
          </p>
          <p className="my-[6px] font-serif text-[.72rem] font-bold leading-[1.3] text-navy-900">
            {document.title}
          </p>
          <span className="w-4/5 flex-1 [background:repeating-linear-gradient(#e6e8f0_0_2px,#0000_2px_7px)]" />
          <span className="absolute right-[-8px] bottom-[12px] rounded-[3px] bg-red px-[6px] py-[1px] text-[.62rem] font-bold tracking-[.05em] text-white">
            {document.badge}
          </span>
        </div>
      </div>
      <div className="flex flex-col px-[24px] py-[22px]">
        <span className={styles.eyebrow} lang="en">
          {document.eyebrow}
        </span>
        <h3 className={`${styles.heading} mt-[.15em] mb-[.3em] text-[1.35rem]`}>
          {document.title}
        </h3>
        <p className="mb-[1em] text-[.97rem] text-muted">
          {document.description}
        </p>
        <div className="mt-auto flex flex-wrap gap-[10px]">
          <a
            className={`${styles.button} ${styles.buttonPrimary}`}
            href={document.view.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="eye" />
            {document.view.label}
            <span className="sr-only">
              {" "}
              — {document.title} {siteContent.ui.newWindow}
            </span>
          </a>
          <a
            className={`${styles.button} ${styles.buttonOutline}`}
            href={document.download.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="download" />
            {document.download.label}
            <span className="sr-only"> — {document.title}</span>
          </a>
        </div>
      </div>
    </article>
  );
}
