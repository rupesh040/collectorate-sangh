import { siteContent } from "@/data";
import Icon from "./Icon";
import { styles } from "./UI";

const accents = {
  "#1f4f8a": {
    border: "border-l-[#1f4f8a]",
    background: "bg-[#1f4f8a]",
    text: "text-[#1f4f8a]",
  },
  "#2f7d3a": {
    border: "border-l-[#2f7d3a]",
    background: "bg-[#2f7d3a]",
    text: "text-[#2f7d3a]",
  },
  "#c98a00": {
    border: "border-l-[#c98a00]",
    background: "bg-[#c98a00]",
    text: "text-[#c98a00]",
  },
  "#b3242f": {
    border: "border-l-[#b3242f]",
    background: "bg-[#b3242f]",
    text: "text-[#b3242f]",
  },
  "#7a2474": {
    border: "border-l-[#7a2474]",
    background: "bg-[#7a2474]",
    text: "text-[#7a2474]",
  },
} as const;

export default function KeyPoints() {
  const { constitution } = siteContent;
  const { infographic } = constitution;

  return (
    <div className="grid grid-cols-[minmax(0,420px)_1fr] items-start gap-[clamp(24px,4vw,48px)] [@media(width<=860px)]:grid-cols-1">
      <figure
        className={`${styles.reveal} sticky top-[84px] m-0 [@media(width<=860px)]:static [@media(width<=860px)]:mx-auto [@media(width<=860px)]:max-w-[440px]`}
      >
        <a
          className="block cursor-zoom-in overflow-hidden rounded-[14px] border border-line shadow-card [transition:box-shadow_.25s,transform_.25s] hover:shadow-lift hover:[transform:translateY(-2px)]"
          href={infographic.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="h-auto w-full"
            src={infographic.image.src}
            alt={infographic.image.alt}
            width={infographic.image.width}
            height={infographic.image.height}
            loading="lazy"
            decoding="async"
          />
          <span className="sr-only">{infographic.newWindowLabel}</span>
        </a>
        <figcaption className="mt-[10px] text-[.9rem]">
          <a
            className="inline-flex items-center gap-[6px] font-semibold text-navy underline underline-offset-[3px]"
            href={infographic.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="external" />
            {infographic.caption}
          </a>
        </figcaption>
      </figure>
      <div>
        <h3 className={`${styles.heading} mb-[.8em] text-[1.3rem]`}>
          {constitution.provisionsTitle}
        </h3>
        <ol className="mb-[12px] grid list-none gap-[12px] p-0">
          {constitution.provisions.map((point) => {
            const accent =
              accents[point.accent as keyof typeof accents] ??
              accents["#1f4f8a"];
            return (
              <li
                className={`${styles.card} ${styles.cardHover} ${styles.reveal} flex gap-[16px] border-l-[5px] px-[18px] py-[16px] shadow-none! hover:shadow-lift! ${accent.border}`}
                key={point.number}
              >
                <span
                  className={`grid size-[34px] flex-none place-items-center rounded-full font-bold text-white ${accent.background}`}
                  aria-hidden="true"
                >
                  {point.number}
                </span>
                <div>
                  <p className="mb-[2px] flex flex-wrap items-baseline gap-x-[10px] gap-y-[4px]">
                    <strong className="font-serif text-[1.1rem] font-bold text-navy-900">
                      {point.title}
                    </strong>
                    <span
                      className={`rounded-full border border-current px-[8px] text-[.78rem] font-bold leading-[1.6] ${accent.text}`}
                    >
                      {point.clause}
                    </span>
                  </p>
                  <p className="text-[.97rem] text-muted">{point.text}</p>
                </div>
              </li>
            );
          })}
        </ol>
        <p className={`${styles.sourceNote} mb-[1em]`}>{constitution.source}</p>
      </div>
    </div>
  );
}
