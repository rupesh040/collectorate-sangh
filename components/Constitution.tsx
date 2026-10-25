"use client";

import { useContent } from "./LanguageProvider";
import type { ConstitutionProps } from "@/data/type";
import DocumentCard from "./DocumentCard";
import EditionGrid from "./EditionGrid";
import KeyPoints from "./KeyPoints";
import SectionHeading from "./SectionHeading";
import { styles } from "./UI";

export default function Constitution({ full = false }: ConstitutionProps) {
  const { constitution } = useContent();

  if (!full) {
    return (
      <section
        className={`${styles.section} ${styles.sectionAlt}`}
        aria-labelledby="sv-title"
      >
        <div className={styles.wrap}>
          <SectionHeading heading={constitution.heading} id="sv-title" />
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,460px),1fr))] gap-[22px]">
            {constitution.documents.map((document) => (
              <DocumentCard document={document} key={document.title} />
            ))}
          </div>
          <div className="mt-[clamp(40px,6vw,64px)] border-t border-line pt-[clamp(32px,5vw,48px)]">
            <h3
              className={`${styles.heading} mb-[1em] text-[clamp(1.35rem,2.6vw,1.75rem)]`}
            >
              {constitution.homeEditionsTitle}
            </h3>
            <EditionGrid />
          </div>
          <div className="mt-[clamp(40px,6vw,64px)] border-t border-line pt-[clamp(32px,5vw,48px)]">
            <h3
              className={`${styles.heading} mb-[1em] text-[clamp(1.35rem,2.6vw,1.75rem)]`}
            >
              {constitution.homeKeyPointsTitle}
            </h3>
            <KeyPoints />
          </div>
        </div>
      </section>
    );
  }

  const [beforeEmphasis, afterEmphasis] =
    constitution.editionSection.text.split(
      constitution.editionSection.emphasis,
    );

  return (
    <>
      <section className={styles.section}>
        <div className={styles.wrap}>
          <SectionHeading heading={constitution.documentsHeading} />
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,460px),1fr))] gap-[22px]">
            {constitution.documents.map((document) => (
              <DocumentCard document={document} key={document.title} />
            ))}
          </div>
        </div>
      </section>
      <section
        className={`${styles.section} ${styles.sectionAlt}`}
        aria-labelledby="ed-title"
      >
        <div className={styles.wrap}>
          <SectionHeading
            heading={constitution.editionsHeading}
            id="ed-title"
          />
          <EditionGrid />
        </div>
      </section>
      <section className={styles.section} aria-labelledby="kp-title">
        <div className={styles.wrap}>
          <SectionHeading
            heading={constitution.keyPointsHeading}
            id="kp-title"
          />
          <KeyPoints />
        </div>
      </section>
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div
          className={`${styles.wrap} grid grid-cols-[1.3fr_1fr] items-start gap-[clamp(28px,5vw,56px)] [@media(width<=900px)]:grid-cols-1`}
        >
          <div>
            <SectionHeading heading={constitution.editionSection.heading} />
            <p className={styles.paragraph}>
              {beforeEmphasis}
              <strong className="font-bold">
                {constitution.editionSection.emphasis}
              </strong>
              {afterEmphasis}
            </p>
          </div>
          <div>
            <h3
              className={`${styles.heading} mt-[.4em] mb-[.5em] text-[1.25rem]`}
            >
              {constitution.committee.title}
            </h3>
            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    {constitution.committee.headers.map((header) => (
                      <th scope="col" key={header}>
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {constitution.committee.members.map((member) => (
                    <tr key={member.name}>
                      <td>
                        <strong className="font-bold">{member.name}</strong>
                      </td>
                      <td>{member.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className={`${styles.sourceNote} mb-[1em]`}>
              {constitution.committee.source}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
