import { Fragment } from "react";
import { siteContent } from "@/data";
import type { FullViewProps } from "@/data/type";
import Icon from "./Icon";
import SectionHeading from "./SectionHeading";
import { styles } from "./UI";

export default function OfficeBearers({ full = false }: FullViewProps) {
  const { leadership, ui } = siteContent;
  const groups = full ? leadership.groups : leadership.groups.slice(0, 1);

  return (
    <section
      className={styles.section}
      aria-labelledby={full ? undefined : "ob-title"}
    >
      <div className={styles.wrap}>
        {full ? (
          <nav
            className="mb-[32px] flex flex-wrap items-center gap-[8px] rounded-[10px] border border-line bg-surface px-[14px] py-[12px]"
            aria-label={ui.officeCategories}
          >
            <span className="text-[.9rem] font-bold text-muted">
              {leadership.categoryLabel}
            </span>
            {leadership.groups.map((group) => (
              <a
                className="rounded-[999px] border border-line px-[12px] py-[2px] text-[.9rem] text-navy no-underline transition-[background-color,color] duration-200 hover:bg-navy hover:text-white"
                href={`#${group.id}`}
                key={group.id}
              >
                {group.title}
              </a>
            ))}
          </nav>
        ) : (
          <SectionHeading heading={leadership.heading} id="ob-title" />
        )}

        <div className="mb-[36px] grid grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] gap-[20px]">
          {leadership.leaders.map((person) => (
            <article
              className={`${styles.card} ${styles.cardHover} ${styles.reveal} flex items-start gap-[20px] border-t-4 border-t-navy p-[24px] [@media(width<=420px)]:flex-col [@media(width<=420px)]:gap-[12px]`}
              key={person.name}
            >
              <div
                className="grid size-[72px] flex-none place-items-center rounded-full border-2 border-gold bg-[radial-gradient(circle_at_30%_30%,#fff,#f3e6bf)] font-serif text-[2rem] font-bold text-navy-900 shadow-[inset_0_0_0_4px_#fff]"
                aria-hidden="true"
              >
                {person.initial}
              </div>
              <div>
                <p className="m-0 text-[.95rem] font-bold text-red">
                  {person.role}
                </p>
                <h3
                  className={`${styles.heading} mt-[.05em] mb-[.1em] text-[1.45rem]`}
                >
                  {person.name}
                </h3>
                <p className="m-0 mb-[.5em] text-[.93rem] text-muted">
                  {person.base}
                </p>
                {full && (
                  <ul className="m-0 mt-[10px] grid list-none gap-[4px] p-0 text-[.93rem]">
                    <li className="flex flex-wrap items-center gap-[8px] wrap-anywhere">
                      <Icon name="phone" className="size-[16px] text-gold" />
                      {person.phones.map((phone, index) => (
                        <Fragment key={phone.href}>
                          {index > 0 && ", "}
                          <a className={styles.link} href={phone.href}>
                            {phone.label}
                          </a>
                        </Fragment>
                      ))}
                    </li>
                    <li className="flex flex-wrap items-center gap-[8px] wrap-anywhere">
                      <Icon name="mail" className="size-[16px] text-gold" />
                      <a
                        className={styles.link}
                        href={`mailto:${person.email}`}
                      >
                        {person.email}
                      </a>
                    </li>
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>

        {groups.map((group) => (
          <section
            className="mb-[36px] scroll-mt-[80px]"
            aria-labelledby={group.id}
            key={group.id}
          >
            <header className="mb-[16px] flex flex-wrap items-baseline gap-[10px] border-b border-line pb-[8px]">
              <h3
                className={`${styles.heading} m-0 text-[1.3rem]`}
                id={group.id}
              >
                {group.title}
              </h3>
              <span className="text-[.85rem] text-muted" lang="en">
                {group.en}
              </span>
              <span className="ml-auto rounded-[999px] bg-[#e9eef8] px-[10px] py-px text-[.8rem] font-semibold text-navy">
                {group.count}
              </span>
            </header>
            {group.namedList ? (
              <ul
                className="m-0 grid list-none grid-cols-[repeat(auto-fill,minmax(min(100%,210px),1fr))] gap-[8px] p-0"
                aria-label={group.title}
              >
                {group.members.map((member) => (
                  <li
                    className="relative rounded-[6px] border border-line bg-surface py-[8px] pr-[12px] pl-[30px] font-medium transition-[border-color,background-color] duration-200 before:absolute before:top-1/2 before:left-[13px] before:size-[7px] before:-translate-y-1/2 before:rounded-full before:bg-gold before:content-[''] hover:border-line-strong hover:bg-[#fffdf6]"
                    key={member.name}
                  >
                    {member.name}
                  </li>
                ))}
              </ul>
            ) : (
              <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,250px),1fr))] gap-[14px]">
                {group.members.map((member) => (
                  <article
                    className={`${styles.cardHover} rounded-[8px] border border-line border-l-[3px] border-l-gold bg-surface px-[18px] py-[16px] shadow-none transition-[transform,box-shadow,border-color] duration-250`}
                    key={member.name}
                  >
                    <h4 className={`${styles.heading} m-0 text-[1.08rem]`}>
                      {member.name}
                    </h4>
                    <p className="m-0 mt-[.15em] text-[.9rem] leading-[1.5] text-muted">
                      {member.role}
                    </p>
                  </article>
                ))}
              </div>
            )}
          </section>
        ))}
        {full && (
          <p className={`${styles.sourceNote} mb-[1em]`}>{leadership.source}</p>
        )}
      </div>
    </section>
  );
}
