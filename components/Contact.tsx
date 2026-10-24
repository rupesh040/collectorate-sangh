import { Fragment } from "react";
import { siteContent } from "@/data";
import type { FullViewProps } from "@/data/type";
import Icon from "./Icon";
import SectionHeading from "./SectionHeading";

export default function Contact({ full = false }: FullViewProps) {
  const { contact, ui } = siteContent;
  const cards = (
    <div className="scope-contact-cards contents">
      <div className="contacts">
        {contact.people.map((person) => (
          <article className="ccard card card--hover reveal" key={person.name}>
            <p className="role">{person.role}</p>
            <h3>{person.name}</h3>
            <p className="base">{person.base}</p>
            <ul>
              <li>
                <Icon name="phone" />
                <span>
                  {person.phones.map((phone, index) => (
                    <Fragment key={phone.href}>
                      {index > 0 && ", "}
                      <a href={phone.href}>{phone.label}</a>
                    </Fragment>
                  ))}
                </span>
              </li>
              <li>
                <Icon name="mail" />
                <a href={`mailto:${person.email}`}>{person.email}</a>
              </li>
            </ul>
          </article>
        ))}
        <article className="ccard ccard--office card reveal">
          <p className="role">{contact.office.role}</p>
          <h3>{contact.office.title}</h3>
          <ul>
            {contact.office.addresses.map((address) => (
              <li key={address}>
                <Icon name="location" />
                <span>
                  {address.includes(contact.office.pendingAddress) ? (
                    <>
                      {address
                        .replace(contact.office.pendingAddress, "")
                        .trim()}{" "}
                      <em className="ph">{contact.office.pendingAddress}</em>
                    </>
                  ) : (
                    address
                  )}
                </span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </div>
  );
  const links = (
    <div className="scope-important-links contents">
      <ul className="links">
        {contact.links.map((item, index) => (
          <li key={item.href}>
            <a href={item.href} target="_blank" rel="noopener noreferrer">
              <span className="ic">
                <Icon name={index === 2 ? "sheet" : "document"} />
              </span>
              <span className="txt">
                <strong>{item.label}</strong>
                <small lang="en">{item.en}</small>
              </span>
              <Icon name="external" className="ext" />
              <span className="sr-only">{ui.newWindow}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  if (full) {
    return (
      <div className="scope-contact contents">
        <section className="section">
          <div className="wrap">
            <SectionHeading heading={contact.pageHeading} />
            {cards}
          </div>
        </section>
        <section className="section section--alt">
          <div className="wrap narrow">
            <SectionHeading heading={contact.linksHeading} />
            {links}
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="scope-home contents">
      <section className="section" aria-labelledby="ct-title">
        <div className="wrap">
          <SectionHeading heading={contact.heading} id="ct-title" />
          <div className="contact-grid">
            {cards}
            <div>
              <h3 className="links-title">{contact.linksTitle}</h3>
              {links}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
