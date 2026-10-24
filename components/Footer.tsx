import Link from "next/link";
import { Fragment } from "react";
import { siteContent } from "@/data";
import Icon from "./Icon";

export default function Footer() {
  const { footer, contact, ui } = siteContent;

  return (
    <div className="scope-footer contents">
      <footer className="site-footer">
        <div className="wrap footer-grid">
          <div className="col col--brand">
            <img
              className="flogo"
              src={footer.logo.src}
              alt={footer.logo.alt}
              width={72}
              height={72}
              loading="lazy"
              decoding="async"
            />
            <p className="fname">{footer.name}</p>
            <p className="fsmall">{footer.recognition}</p>
            <p className="fsmall">{footer.headquarters}</p>
          </div>
          <div className="col">
            <h2>{footer.quickLinksTitle}</h2>
            <ul>
              {footer.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col">
            <h2>{footer.documentsTitle}</h2>
            <ul>
              {footer.documents.map((link) => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.label} <span className="sr-only">{ui.newWindow}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col">
            <h2>{footer.contactTitle}</h2>
            {contact.people.map((person) => (
              <div className="fcontact" key={person.name}>
                <p className="fc-name">
                  {person.name}, <span>{person.role}</span>
                </p>
                <p>
                  <Icon name="phone" />
                  {person.phones.map((phone, index) => (
                    <Fragment key={phone.href}>
                      {index > 0 && ", "}
                      <a href={phone.href}>{phone.label}</a>
                    </Fragment>
                  ))}
                </p>
                <p>
                  <Icon name="mail" />
                  <a href={`mailto:${person.email}`}>{person.email}</a>
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="bottom">
          <div className="wrap bottom__row">
            <p>{footer.copyright}</p>
            <p lang="en">{footer.englishName}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
