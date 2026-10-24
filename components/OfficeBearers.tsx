import { Fragment } from "react";
import { siteContent } from "@/data";
import type { FullViewProps } from "@/data/type";
import Icon from "./Icon";
import SectionHeading from "./SectionHeading";

export default function OfficeBearers({ full = false }: FullViewProps) {
  const { leadership, ui } = siteContent;
  const groups = full ? leadership.groups : leadership.groups.slice(0, 1);

  return (
    <div className={`${full ? "scope-office-page" : "scope-home"} contents`}>
      <section
        className="section"
        aria-labelledby={full ? undefined : "ob-title"}
      >
        <div className="wrap">
          {full ? (
            <nav className="jump" aria-label={ui.officeCategories}>
              <span>{leadership.categoryLabel}</span>
              {leadership.groups.map((group) => (
                <a href={`#${group.id}`} key={group.id}>
                  {group.title}
                </a>
              ))}
            </nav>
          ) : (
            <SectionHeading heading={leadership.heading} id="ob-title" />
          )}

          <div className="scope-office-bearers contents">
            <div className="leaders">
              {leadership.leaders.map((person) => (
                <div className="scope-leader-card contents" key={person.name}>
                  <article className="leader card card--hover reveal">
                    <div className="monogram" aria-hidden="true">
                      {person.initial}
                    </div>
                    <div className="body">
                      <p className="position">{person.role}</p>
                      <h3 className="name">{person.name}</h3>
                      <p className="note">{person.base}</p>
                      {full && (
                        <ul className="contact">
                          <li>
                            <Icon name="phone" />
                            {person.phones.map((phone, index) => (
                              <Fragment key={phone.href}>
                                {index > 0 && ", "}
                                <a href={phone.href}>{phone.label}</a>
                              </Fragment>
                            ))}
                          </li>
                          <li>
                            <Icon name="mail" />
                            <a href={`mailto:${person.email}`}>
                              {person.email}
                            </a>
                          </li>
                        </ul>
                      )}
                    </div>
                  </article>
                </div>
              ))}
            </div>

            {groups.map((group) => (
              <section
                className="group"
                aria-labelledby={group.id}
                key={group.id}
              >
                <header className="group__head">
                  <h3 id={group.id}>{group.title}</h3>
                  <span lang="en">{group.en}</span>
                  <span className="count">{group.count}</span>
                </header>
                {group.namedList ? (
                  <ul className="names" aria-label={group.title}>
                    {group.members.map((member) => (
                      <li key={member.name}>{member.name}</li>
                    ))}
                  </ul>
                ) : (
                  <div className="cards">
                    {group.members.map((member) => (
                      <div
                        className="scope-bearer-card contents"
                        key={member.name}
                      >
                        <article className="bcard card card--hover">
                          <h4 className="name">{member.name}</h4>
                          <p className="position">{member.role}</p>
                        </article>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ))}
            {full && <p className="source-note">{leadership.source}</p>}
          </div>
        </div>
      </section>
    </div>
  );
}
