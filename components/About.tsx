"use client";

import Link from "next/link";
import { useContent } from "./LanguageProvider";
import type { FullViewProps } from "@/data/type";
import Icon from "./Icon";
import SectionHeading from "./SectionHeading";
import VisionMission from "./VisionMission";
import { styles } from "./UI";

export default function About({ full = false }: FullViewProps) {
  const { about, header } = useContent();
  if (full)
    return (
      <>
        <section className={styles.section}>
          <div
            className={`${styles.wrap} grid grid-cols-[1.5fr_1fr] items-start gap-[clamp(28px,5vw,56px)] [@media(width<=900px)]:grid-cols-1`}
          >
            <div>
              <SectionHeading heading={about.pageHeading} />
              <p className={styles.paragraph}>{about.intro}</p>
              <ol className="m-0 mb-[1.2em] grid list-none gap-[10px] p-0">
                {about.points.map((point, index) => (
                  <li
                    data-marker={`(${about.pointMarkers[index]})`}
                    className="relative rounded-[8px] border border-line bg-surface py-[10px] pr-[14px] pl-[52px] before:absolute before:top-[10px] before:left-[14px] before:font-bold before:text-red before:content-[attr(data-marker)]"
                    key={point}
                  >
                    {point}
                  </li>
                ))}
              </ol>
              <p className={styles.paragraph}>{about.conclusion}</p>
              <p className={`${styles.sourceNote} mb-[1em]`}>{about.source}</p>
            </div>
            <aside
              className={`${styles.card} sticky top-[90px] border-t-4 border-t-navy p-[26px] [@media(width<=900px)]:static`}
              aria-labelledby="facts-title"
            >
              <h2
                className={`${styles.heading} mb-[.5em] text-[1.3rem]`}
                id="facts-title"
              >
                {about.overviewTitle}
              </h2>
              <dl className="m-0 grid gap-[12px]">
                {about.overview.map((fact) => (
                  <div
                    className="border-b border-dashed border-line pb-[12px]"
                    key={fact.label}
                  >
                    <dt className="text-[.82rem] font-bold text-red">
                      {fact.label}
                    </dt>
                    <dd className="m-0 font-semibold leading-[1.55] text-navy-900">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="m-0 mt-[16px] flex flex-wrap gap-[8px]">
                {header.slogans.map((slogan) => (
                  <span
                    className="rounded-[999px] bg-[#f6ebc9] px-[12px] py-[2px] text-[.85rem] font-semibold text-navy"
                    key={slogan}
                  >
                    {slogan}
                  </span>
                ))}
              </p>
            </aside>
          </div>
        </section>
        <VisionMission />
        <section className={styles.section}>
          <div className={styles.wrap}>
            <SectionHeading heading={about.structureHeading} />
            <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,250px),1fr))] gap-[clamp(16px,2.2vw,24px)]">
              {about.highlights.map((item) => (
                <article
                  className={`${styles.card} ${styles.cardHover} ${styles.reveal} p-[22px]`}
                  key={item.title}
                >
                  <p className="m-0 text-[.8rem] font-bold text-gold">
                    {item.clause}
                  </p>
                  <h3 className={`${styles.heading} mb-[.3em] text-[1.2rem]`}>
                    {item.title}
                  </h3>
                  <p className="m-0 text-[.95rem] text-muted">{item.text}</p>
                </article>
              ))}
            </div>
            <p className="m-0 mt-[28px] rounded-[10px] border border-line border-l-4 border-l-gold bg-surface px-[22px] py-[18px] shadow-none transition-[transform,box-shadow,border-color] duration-250">
              <strong className="font-bold">{about.history.title}</strong>{" "}
              {about.history.text}
            </p>
          </div>
        </section>
      </>
    );

  return (
    <section className={styles.section} aria-labelledby="about-title">
      <div
        className={`${styles.wrap} grid grid-cols-[1.1fr_1fr] items-start gap-[clamp(28px,5vw,56px)] [@media(width<=900px)]:grid-cols-1`}
      >
        <div className={styles.reveal}>
          <SectionHeading heading={about.heading} id="about-title" />
          <p className={styles.paragraph}>{about.intro}</p>
          <ul className="m-0 mb-[1.2em] grid list-none gap-[8px] p-0">
            {about.points.map((point) => (
              <li
                className="relative pl-[28px] before:absolute before:top-[.62em] before:left-[2px] before:h-[7px] before:w-[12px] before:-rotate-45 before:border-b-[2.5px] before:border-l-[2.5px] before:border-green before:content-['']"
                key={point}
              >
                {point}
              </li>
            ))}
          </ul>
          <p className={`${styles.paragraph} text-muted`}>{about.conclusion}</p>
          <Link
            className={`${styles.button} ${styles.buttonOutline}`}
            href={about.readMore.href}
          >
            {about.readMore.label}
            <Icon name="arrow" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-[14px] [@media(width<=520px)]:grid-cols-1">
          {about.highlights.map((item) => (
            <article
              className={`${styles.card} ${styles.reveal} px-[18px] pt-[18px] pb-[14px]`}
              key={item.title}
            >
              <p className="m-0 text-[.78rem] font-bold text-gold">
                {item.clause}
              </p>
              <h3 className={`${styles.heading} mb-[.3em] text-[1.15rem]`}>
                {item.title}
              </h3>
              <p className="m-0 text-[.92rem] leading-[1.65] text-muted">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
