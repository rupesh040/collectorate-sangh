"use client";

import { Fragment, useRef, useState } from "react";
import { useContent } from "./LanguageProvider";
import type { FullViewProps, OfficeBearersRosterProps } from "@/data/type";
import Icon from "./Icon";
import SectionHeading from "./SectionHeading";
import { styles } from "./UI";

function OfficeBearersRoster({ roster, full }: OfficeBearersRosterProps) {
  const { leadership, ui } = useContent();
  const groups = full ? roster.groups : roster.groups.slice(0, 1);

  return (
    <>
      {full ? (
        <nav
          className="mb-[32px] flex flex-wrap items-center gap-[8px] rounded-[10px] border border-line bg-surface px-[14px] py-[12px]"
          aria-label={ui.officeCategories}
        >
          <span className="text-[.9rem] font-bold text-muted">
            {leadership.categoryLabel}
          </span>
          {roster.groups.map((group) => (
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
        {roster.leaders.map((person) => (
          <article
            className={`${styles.card} ${styles.cardHover} ${styles.reveal} flex items-start gap-[20px] border-t-4 border-t-navy p-[24px] [@media(width<=420px)]:flex-col [@media(width<=420px)]:gap-[12px]`}
            key={person.positionNumber ?? person.name}
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
                {person.name || ui.nameNotProvided}
              </h3>
              <p className="m-0 mb-[.5em] text-[.93rem] text-muted">
                {person.base}
              </p>
              {full && (
                <ul className="m-0 mt-[10px] grid list-none gap-[4px] p-0 text-[.93rem]">
                  {person.phones.length > 0 && (
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
                  )}
                  {person.email && (
                    <li className="flex flex-wrap items-center gap-[8px] wrap-anywhere">
                      <Icon name="mail" className="size-[16px] text-gold" />
                      <a
                        className={styles.link}
                        href={`mailto:${person.email}`}
                      >
                        {person.email}
                      </a>
                    </li>
                  )}
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
            <h3 className={`${styles.heading} m-0 text-[1.3rem]`} id={group.id}>
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
              {group.members.map((member, index) => (
                <li
                  className="relative rounded-[6px] border border-line bg-surface py-[8px] pr-[12px] pl-[30px] font-medium transition-[border-color,background-color] duration-200 before:absolute before:top-1/2 before:left-[13px] before:size-[7px] before:-translate-y-1/2 before:rounded-full before:bg-gold before:content-[''] hover:border-line-strong hover:bg-[#fffdf6]"
                  key={member.positionNumber ?? `${member.name}-${index}`}
                >
                  {member.name || ui.nameNotProvided}
                </li>
              ))}
            </ul>
          ) : (
            <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,250px),1fr))] gap-[14px]">
              {group.members.map((member, index) => (
                <article
                  className={`${styles.cardHover} min-w-0 rounded-[8px] border border-line border-l-[3px] border-l-gold bg-surface px-[18px] py-[16px] shadow-none transition-[transform,box-shadow,border-color] duration-250`}
                  key={member.positionNumber ?? `${member.name}-${index}`}
                >
                  <h4 className={`${styles.heading} m-0 text-[1.08rem]`}>
                    {member.name || ui.nameNotProvided}
                  </h4>
                  <p className="m-0 mt-[.15em] text-[.9rem] leading-[1.5] text-muted">
                    {member.role}
                  </p>
                  {member.district && (
                    <p className="m-0 mt-[8px] flex flex-wrap items-center gap-x-[6px] gap-y-[2px] text-[.85rem] leading-[1.5] wrap-anywhere text-muted">
                      <Icon
                        name="location"
                        className="size-[14px] flex-none text-navy"
                      />
                      <span>
                        {ui.district}: {member.district}
                      </span>
                    </p>
                  )}
                  {member.phones && member.phones.length > 0 && (
                    <p className="m-0 mt-[6px] flex flex-wrap items-center gap-x-[8px] gap-y-[2px] text-[.9rem] leading-[1.5] wrap-anywhere">
                      <Icon
                        name="phone"
                        className="size-[14px] flex-none text-navy"
                      />
                      {member.phones.map((phone, phoneIndex) => (
                        <Fragment key={`${phone.href}-${phoneIndex}`}>
                          {phoneIndex > 0 && ", "}
                          <a
                            className={`${styles.link} min-w-0 wrap-anywhere`}
                            href={phone.href}
                          >
                            {phone.label}
                          </a>
                        </Fragment>
                      ))}
                    </p>
                  )}
                </article>
              ))}
            </div>
          )}
        </section>
      ))}
      {full && (
        <p className={`${styles.sourceNote} mb-[1em]`}>{roster.source}</p>
      )}
    </>
  );
}

export default function OfficeBearers({ full = false }: FullViewProps) {
  const { leadership } = useContent();
  const [selectedYear, setSelectedYear] = useState(leadership.defaultYear);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const defaultRoster =
    leadership.years.find((roster) => roster.year === leadership.defaultYear) ??
    leadership.years[0];
  const selectedRoster =
    leadership.years.find((roster) => roster.year === selectedYear) ??
    defaultRoster;

  if (!full) {
    return (
      <section className={styles.section} aria-labelledby="ob-title">
        <div className={styles.wrap}>
          <OfficeBearersRoster roster={defaultRoster} full={false} />
        </div>
      </section>
    );
  }

  return (
    <section className="pt-[20px] pb-[clamp(48px,7vw,88px)]">
      <div className={styles.wrap}>
        <div
          className="mb-[26px] flex min-h-[42px] flex-wrap items-stretch gap-[20px] border-b border-line [@media(width<=520px)]:grid [@media(width<=520px)]:grid-cols-2 [@media(width<=520px)]:gap-[8px]"
          role="tablist"
          aria-label={leadership.yearTabsLabel}
        >
          {leadership.years.map((roster, index) => {
            const selected = selectedRoster.year === roster.year;
            return (
              <button
                className={`relative min-h-[42px] cursor-pointer border-0 bg-transparent px-[16px] py-[8px] text-[1.05rem] leading-[1.4] whitespace-nowrap transition-colors duration-200 [transition-timing-function:ease] after:absolute after:inset-x-0 after:bottom-[-1px] after:h-[3px] after:bg-gold after:content-[''] [@media(width<=760px)]:text-[.96rem] [@media(width<=520px)]:px-[8px] [@media(width<=520px)]:text-[.9rem] [@media(width<=360px)]:min-w-0 [@media(width<=360px)]:whitespace-normal ${selected ? "font-bold text-navy after:opacity-100" : "font-medium text-blue after:opacity-0 hover:text-navy"}`}
                type="button"
                role="tab"
                id={`office-bearers-tab-${roster.year}`}
                aria-controls={`office-bearers-panel-${roster.year}`}
                aria-selected={selected}
                tabIndex={selected ? 0 : -1}
                ref={(element) => {
                  tabRefs.current[index] = element;
                }}
                onClick={() => setSelectedYear(roster.year)}
                onKeyDown={(event) => {
                  let nextIndex = index;
                  if (event.key === "ArrowRight")
                    nextIndex = (index + 1) % leadership.years.length;
                  else if (event.key === "ArrowLeft")
                    nextIndex =
                      (index - 1 + leadership.years.length) %
                      leadership.years.length;
                  else if (event.key === "Home") nextIndex = 0;
                  else if (event.key === "End")
                    nextIndex = leadership.years.length - 1;
                  else return;
                  event.preventDefault();
                  setSelectedYear(leadership.years[nextIndex].year);
                  tabRefs.current[nextIndex]?.focus();
                }}
                key={roster.year}
              >
                {roster.label}
              </button>
            );
          })}
        </div>
        {leadership.years.map((roster) => (
          <div
            role="tabpanel"
            id={`office-bearers-panel-${roster.year}`}
            aria-labelledby={`office-bearers-tab-${roster.year}`}
            hidden={selectedRoster.year !== roster.year}
            tabIndex={0}
            key={roster.year}
          >
            {selectedRoster.year === roster.year &&
              (roster.leaders.length > 0 || roster.groups.length > 0 ? (
                <OfficeBearersRoster roster={roster} full />
              ) : (
                <div
                  className={`${styles.card} border-t-[3px] border-t-gold p-[clamp(22px,3vw,32px)]`}
                >
                  <h2
                    className={`${styles.heading} mb-[.5em] text-[clamp(1.2rem,2.4vw,1.5rem)]`}
                  >
                    {roster.emptyTitle}
                  </h2>
                  <p className="m-0 text-muted">{roster.emptyText}</p>
                </div>
              ))}
          </div>
        ))}
      </div>
    </section>
  );
}
