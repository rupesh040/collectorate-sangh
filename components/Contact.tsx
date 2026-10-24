import { Fragment } from "react";
import { siteContent } from "@/data";
import type { FullViewProps } from "@/data/type";
import Icon from "./Icon";
import SectionHeading from "./SectionHeading";
import { styles } from "./UI";

export default function Contact({ full = false }: FullViewProps) {
  const { contact, ui } = siteContent;
  const cards = (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-[20px]">
      {contact.people.map((person) => (
        <article
          className={`${styles.card} ${styles.cardHover} ${styles.reveal} border-t-4 border-t-gold p-[24px]`}
          key={person.name}
        >
          <p className="m-0 text-[.92rem] font-bold text-red">{person.role}</p>
          <h3 className={`${styles.heading} my-[.1em] text-[1.35rem]`}>
            {person.name}
          </h3>
          <p className="m-0 mb-[12px] text-[.93rem] text-muted">
            {person.base}
          </p>
          <ul className="m-0 grid list-none gap-[8px] p-0">
            <li className="flex items-start gap-[10px] wrap-anywhere">
              <Icon
                name="phone"
                className="mt-[5px] size-[18px] flex-none text-navy"
              />
              <span>
                {person.phones.map((phone, index) => (
                  <Fragment key={phone.href}>
                    {index > 0 && ", "}
                    <a className={styles.link} href={phone.href}>
                      {phone.label}
                    </a>
                  </Fragment>
                ))}
              </span>
            </li>
            <li className="flex items-start gap-[10px] wrap-anywhere">
              <Icon
                name="mail"
                className="mt-[5px] size-[18px] flex-none text-navy"
              />
              <a className={styles.link} href={`mailto:${person.email}`}>
                {person.email}
              </a>
            </li>
          </ul>
        </article>
      ))}
      <article
        className={`${styles.card} ${styles.reveal} border-t-4 border-t-green p-[24px]`}
      >
        <p className="m-0 text-[.92rem] font-bold text-red">
          {contact.office.role}
        </p>
        <h3 className={`${styles.heading} my-[.1em] text-[1.35rem]`}>
          {contact.office.title}
        </h3>
        <ul className="m-0 grid list-none gap-[8px] p-0">
          {contact.office.addresses.map((address) => (
            <li
              className="flex items-start gap-[10px] wrap-anywhere"
              key={address}
            >
              <Icon
                name="location"
                className="mt-[5px] size-[18px] flex-none text-navy"
              />
              <span>
                {address.includes(contact.office.pendingAddress) ? (
                  <>
                    {address.replace(contact.office.pendingAddress, "").trim()}{" "}
                    <em className="text-[.88rem] text-muted italic">
                      {contact.office.pendingAddress}
                    </em>
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
  );
  const links = (
    <ul className="m-0 grid list-none gap-[10px] p-0">
      {contact.links.map((item, index) => (
        <li key={item.href}>
          <a
            className="flex items-center gap-[14px] rounded-[10px] border border-line bg-surface px-[16px] py-[12px] text-ink no-underline transition-[border-color,transform,box-shadow] duration-200 hover:translate-x-[3px] hover:border-navy hover:text-ink hover:shadow-card"
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="grid size-[40px] flex-none place-items-center rounded-[8px] bg-[#e9eef8] text-navy">
              <Icon
                name={index === 2 ? "sheet" : "document"}
                className="size-[22px]"
              />
            </span>
            <span className="flex min-w-0 flex-col leading-[1.4]">
              <strong className="font-bold">{item.label}</strong>
              <small className="text-[smaller] text-muted" lang="en">
                {item.en}
              </small>
            </span>
            <Icon
              name="external"
              className="ml-auto size-[18px] flex-none text-muted"
            />
            <span className="sr-only">{ui.newWindow}</span>
          </a>
        </li>
      ))}
    </ul>
  );

  if (full) {
    return (
      <>
        <section className={styles.section}>
          <div className={styles.wrap}>
            <SectionHeading heading={contact.pageHeading} />
            {cards}
          </div>
        </section>
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={`${styles.wrap} max-w-[820px]!`}>
            <SectionHeading heading={contact.linksHeading} />
            {links}
          </div>
        </section>
      </>
    );
  }

  return (
    <section className={styles.section} aria-labelledby="ct-title">
      <div className={styles.wrap}>
        <SectionHeading heading={contact.heading} id="ct-title" />
        <div className="grid grid-cols-[1.7fr_1fr] items-start gap-[28px] [@media(width<=1000px)]:grid-cols-1">
          {cards}
          <div>
            <h3 className={`${styles.heading} mb-[.7em] text-[1.2rem]`}>
              {contact.linksTitle}
            </h3>
            {links}
          </div>
        </div>
      </div>
    </section>
  );
}
