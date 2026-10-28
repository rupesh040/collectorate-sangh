"use client";

import Link from "next/link";
import { Fragment } from "react";
import { useContent } from "./LanguageProvider";
import Icon from "./Icon";
import { styles } from "./UI";

const footerLink =
  "text-white underline decoration-[#ffffff4d] underline-offset-[3px] hover:text-gold-soft";
const footerHeading =
  "mb-[.8em] font-serif text-[1.05rem] leading-[1.35] font-bold text-gold-soft";

export default function Footer() {
  const { footer, contact, ui } = useContent();

  return (
    <footer className="border-t-[4px] border-gold bg-navy-950 text-[.93rem] text-[#fffc]">
      <div
        className={`${styles.wrap} grid grid-cols-[1.3fr_1fr_1.1fr_1fr_1.3fr] gap-[28px] pt-[48px] pb-[36px] [@media(800px<width<=1160px)]:grid-cols-3 [@media(500px<width<=800px)]:grid-cols-2 [@media(width<=500px)]:grid-cols-1`}
      >
        <div>
          <img
            className="mb-[12px] h-auto w-[72px] max-w-full rounded-[50%] bg-white"
            src={footer.logo.src}
            alt={footer.logo.alt}
            width={72}
            height={72}
            loading="lazy"
            decoding="async"
          />
          <p className="mb-[.4em] font-serif text-[1.1rem] leading-[1.45] font-bold text-white">
            {footer.name}
          </p>
          <p className="mb-[.2em] text-[.83rem]">{footer.recognition}</p>
          <p className="mb-[.2em] text-[.83rem]">{footer.headquarters}</p>
        </div>
        <div>
          <h2 className={footerHeading}>{footer.quickLinksTitle}</h2>
          <ul className="m-0 grid list-none gap-[6px] p-0">
            {footer.quickLinks.map((link) => {
              const isExternal =
                link.href.startsWith("http://") ||
                link.href.startsWith("https://");
              return (
                <li key={`${link.href}-${link.label}`}>
                  {isExternal ? (
                    <a
                      className={footerLink}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label} <span className="sr-only">{ui.newWindow}</span>
                    </a>
                  ) : (
                    <Link className={footerLink} href={link.href}>
                      {link.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        {footer.portals && footer.portals.length > 0 && (
          <div>
            <h2 className={footerHeading}>
              {footer.portalsTitle ?? "उपयोगी पोर्टल"}
            </h2>
            <ul className="m-0 grid list-none gap-[6px] p-0">
              {footer.portals.map((portal) => (
                <li key={portal.href}>
                  <a
                    className={footerLink}
                    href={portal.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {portal.label}{" "}
                    <span className="sr-only">{ui.newWindow}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div>
          <h2 className={footerHeading}>{footer.documentsTitle}</h2>
          <ul className="m-0 grid list-none gap-[6px] p-0">
            {footer.documents.map((link) => (
              <li key={link.href}>
                <a
                  className={footerLink}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label} <span className="sr-only">{ui.newWindow}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className={footerHeading}>{footer.contactTitle}</h2>
          <div className="grid gap-[16px]">
            {contact.people.map((person) => (
              <div
                className="border-b border-[#ffffff14] pb-[12px] last:border-b-0 last:pb-0"
                key={person.name}
              >
               
                <p className="m-0 font-serif text-[1rem] font-bold text-white">
                  {person.name} -  <span className="m-0 text-[.8rem] font-semibold tracking-wide text-gold-soft">
                  {person.role}
                </span>
                </p>
                {person.base ? (
                  <p className="m-0 text-[.82rem] text-[#ffffffb3]">
                    {person.base}
                  </p>
                ) : null}
                {person.phones.length > 0 && (
                  <p className="m-0 mt-[4px] flex flex-wrap items-center gap-[6px] text-[.88rem] [overflow-wrap:anywhere]">
                    <Icon
                      name="phone"
                      className="size-[14px] flex-none text-gold-soft"
                    />
                    {person.phones.map((phone, index) => (
                      <Fragment key={phone.href}>
                        {index > 0 && ", "}
                        <a className={footerLink} href={phone.href}>
                          {phone.label}
                        </a>
                      </Fragment>
                    ))}
                  </p>
                )}
                {person.email ? (
                  <p className="m-0 mt-[2px] flex flex-wrap items-center gap-[6px] text-[.88rem] [overflow-wrap:anywhere]">
                    <Icon
                      name="mail"
                      className="size-[14px] flex-none text-gold-soft"
                    />
                    <a className={footerLink} href={`mailto:${person.email}`}>
                      {person.email}
                    </a>
                  </p>
                ) : null}
                {person.facebook ? (
                  <p className="m-0 mt-[2px] flex flex-wrap items-center gap-[6px] text-[.88rem] [overflow-wrap:anywhere]">
                    <Icon
                      name="facebook"
                      className="size-[14px] flex-none text-gold-soft"
                    />
                    <a
                      className={footerLink}
                      href={person.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Facebook
                    </a>
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-[#ffffff1f] text-[.82rem]">
        <div
          className={`${styles.wrap} flex flex-wrap justify-between gap-x-[20px] gap-y-[4px] py-[14px]`}
        >
          <p className="m-0">{footer.copyright}</p>
          <p className="m-0" lang="en">
            {footer.englishName}
          </p>
        </div>
      </div>
    </footer>
  );
}
