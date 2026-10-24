import Link from "next/link";
import { Fragment } from "react";
import { siteContent } from "@/data";
import Icon from "./Icon";
import { styles } from "./UI";

const footerLink =
  "text-white underline decoration-[#ffffff4d] underline-offset-[3px] hover:text-gold-soft";
const footerHeading =
  "mb-[.8em] font-serif text-[1.05rem] leading-[1.35] font-bold text-gold-soft";

export default function Footer() {
  const { footer, contact, ui } = siteContent;

  return (
    <footer className="border-t-[4px] border-gold bg-navy-950 text-[.93rem] text-[#fffc]">
      <div
        className={`${styles.wrap} grid grid-cols-[1.4fr_1fr_1fr_1.4fr] gap-[32px] pt-[48px] pb-[36px] [@media(560px<width<=900px)]:grid-cols-2 [@media(width<=560px)]:grid-cols-1`}
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
            {footer.quickLinks.map((link) => (
              <li key={link.href}>
                <Link className={footerLink} href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
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
          {contact.people.map((person) => (
            <div className="mb-[14px]" key={person.name}>
              <p className="m-0 flex flex-wrap items-center gap-[8px] font-semibold text-white [overflow-wrap:anywhere]">
                {person.name},{" "}
                <span className="font-normal text-[#ffffffb3]">
                  {person.role}
                </span>
              </p>
              <p className="m-0 flex flex-wrap items-center gap-[8px] [overflow-wrap:anywhere]">
                <Icon
                  name="phone"
                  className="size-[15px] flex-none text-gold-soft"
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
              <p className="m-0 flex flex-wrap items-center gap-[8px] [overflow-wrap:anywhere]">
                <Icon
                  name="mail"
                  className="size-[15px] flex-none text-gold-soft"
                />
                <a className={footerLink} href={`mailto:${person.email}`}>
                  {person.email}
                </a>
              </p>
            </div>
          ))}
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
