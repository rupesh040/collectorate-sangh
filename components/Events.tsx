"use client";

import { useContent } from "./LanguageProvider";
import type { EventCardProps, EventsProps } from "@/data/type";
import Gallery from "./Gallery";
import Icon from "./Icon";
import SectionHeading from "./SectionHeading";
import { styles } from "./UI";

function EventCard({ event, full = false }: EventCardProps) {
  const { ui } = useContent();
  const Title = full ? "h2" : "h3";

  return (
    <article
      className={
        full
          ? "[&+article]:mt-[56px] [&+article]:border-t [&+article]:border-line [&+article]:pt-[48px]"
          : undefined
      }
      id={event.id}
    >
      <header className="mb-[20px] max-w-[820px]">
        <Title
          className={`${styles.heading} mb-[.3em] text-[clamp(1.35rem,2.6vw,1.75rem)]`}
        >
          {event.title}
        </Title>
        {(event.date || event.location) && (
          <ul className="mb-[10px] flex list-none flex-wrap gap-x-[22px] gap-y-[6px] p-0 text-[.95rem] font-semibold text-navy">
            {event.date && (
              <li className="flex items-center gap-[7px]">
                <Icon name="calendar" className="size-[18px] text-gold" />
                <span className="sr-only">{ui.date}</span> {event.date}
              </li>
            )}
            {event.location && (
              <li className="flex items-center gap-[7px]">
                <Icon name="location" className="size-[18px] text-gold" />
                <span className="sr-only">{ui.location}</span> {event.location}
              </li>
            )}
          </ul>
        )}
        <p className="mb-[1em] text-muted">{event.summary}</p>
      </header>
      <Gallery
        images={event.images}
        placeholderCount={event.placeholderCount}
      />
      {full && event.programme && (
        <details className="mt-[22px]">
          <summary className="mb-[12px] list-item w-fit cursor-pointer rounded-lg border border-line bg-surface px-[14px] py-[10px] font-semibold text-navy hover:border-line-strong">
            {event.programme.label}
          </summary>
          <div className={styles.tableWrap}>
            <table
              className={`${styles.table} [&_td:first-child]:whitespace-nowrap [&_td:first-child]:text-muted [&_td:last-child]:min-w-[170px]`}
            >
              <caption className="sr-only">{event.programme.caption}</caption>
              <thead>
                <tr>
                  {event.programme.headers.map((heading) => (
                    <th scope="col" key={heading}>
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {event.programme.rows.map((row) => (
                  <tr key={row.number}>
                    <td>{row.number}</td>
                    <td>{row.description}</td>
                    <td>{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </details>
      )}
    </article>
  );
}

export default function Events({ full = false }: EventsProps) {
  const { events } = useContent();
  if (!full) {
    return (
      <section className={styles.section} aria-labelledby="ev-title">
        <div className={styles.wrap}>
          <SectionHeading heading={events.heading} id="ev-title" />
          {events.items.slice(0, 1).map((event) => (
            <EventCard event={event} key={event.id} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <>
      <section className={styles.section}>
        <div className={styles.wrap}>
          {events.items.map((event) => (
            <EventCard event={event} full key={event.id} />
          ))}
          <EventCard event={events.banners} full />
        </div>
      </section>
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.wrap}>
          <SectionHeading heading={events.greetings.heading} />
          <ul className="grid list-none grid-cols-[repeat(auto-fit,minmax(min(100%,250px),1fr))] gap-[16px] p-0">
            {events.greetings.people.map((person) => (
              <li
                className={`${styles.card} ${styles.cardHover} ${styles.reveal} flex flex-col border-t-[3px] border-t-gold px-[20px] py-[18px]`}
                key={person.name}
              >
                <strong className="font-serif text-[1.1rem] font-bold text-navy-900">
                  {person.name}
                </strong>
                <span className="text-[.93rem] leading-[1.55] text-muted">
                  {person.role}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
