import { events, ui } from "@/data";
import type { EventCardProps, EventsProps } from "@/data/type";
import Gallery from "./Gallery";
import Icon from "./Icon";
import SectionHeading from "./SectionHeading";

function EventCard({ event, full = false }: EventCardProps) {
  const Title = full ? "h2" : "h3";

  return (
    <article className="event" id={event.id}>
      <header className="event__head">
        <Title className="event__title">{event.title}</Title>
        {(event.date || event.location) && (
          <ul className="meta">
            {event.date && (
              <li>
                <Icon name="calendar" />
                <span className="sr-only">{ui.date}</span> {event.date}
              </li>
            )}
            {event.location && (
              <li>
                <Icon name="location" />
                <span className="sr-only">{ui.location}</span> {event.location}
              </li>
            )}
          </ul>
        )}
        <p className="summary">{event.summary}</p>
      </header>
      <Gallery
        images={event.images}
        placeholderCount={event.placeholderCount}
      />
      {full && event.programme && (
        <details className="programme">
          <summary>{event.programme.label}</summary>
          <div className="table-scroll">
            <table>
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
  if (!full) {
    return (
      <section className="section" aria-labelledby="ev-title">
        <div className="wrap">
          <SectionHeading heading={events.heading} id="ev-title" />
          <div className="scope-event-card contents">
            {events.items.slice(0, 1).map((event) => (
              <EventCard event={event} key={event.id} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="section">
        <div className="wrap">
          <div className="scope-event-card contents">
            {events.items.map((event) => (
              <EventCard event={event} full key={event.id} />
            ))}
            <EventCard event={events.banners} full />
          </div>
        </div>
      </section>
      <section className="section section--alt">
        <div className="wrap">
          <SectionHeading heading={events.greetings.heading} />
          <div className="scope-events contents">
            <ul className="msgs">
              {events.greetings.people.map((person) => (
                <li className="card card--hover reveal" key={person.name}>
                  <strong>{person.name}</strong>
                  <span>{person.role}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
