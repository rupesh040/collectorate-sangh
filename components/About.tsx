import Link from "next/link";
import { about, header } from "@/data";
import type { FullViewProps } from "@/data/type";
import Icon from "./Icon";
import SectionHeading from "./SectionHeading";
import VisionMission from "./VisionMission";

export default function About({ full = false }: FullViewProps) {
  if (full)
    return (
      <div className="scope-about contents">
        <section className="section">
          <div className="wrap two-col">
            <div>
              <SectionHeading heading={about.pageHeading} />
              <p>{about.intro}</p>
              <ol className="alpha">
                {about.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ol>
              <p>{about.conclusion}</p>
              <p className="source-note">{about.source}</p>
            </div>
            <aside className="facts card" aria-labelledby="facts-title">
              <h2 id="facts-title">{about.overviewTitle}</h2>
              <dl>
                {about.overview.map((fact) => (
                  <div key={fact.label}>
                    <dt>{fact.label}</dt>
                    <dd>{fact.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="slogans">
                {header.slogans.map((slogan) => (
                  <span key={slogan}>{slogan}</span>
                ))}
              </p>
            </aside>
          </div>
        </section>
        <VisionMission />
        <section className="section">
          <div className="wrap">
            <SectionHeading heading={about.structureHeading} />
            <div className="grid hl-grid">
              {about.highlights.map((item) => (
                <article
                  className="hl card card--hover reveal"
                  key={item.title}
                >
                  <p className="clause">{item.clause}</p>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
            <p className="history card">
              <strong>{about.history.title}</strong> {about.history.text}
            </p>
          </div>
        </section>
      </div>
    );

  return (
    <div className="scope-home contents">
      <section className="section" aria-labelledby="about-title">
        <div className="wrap about">
          <div className="about__text reveal">
            <SectionHeading heading={about.heading} id="about-title" />
            <p>{about.intro}</p>
            <ul className="ticks">
              {about.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p className="muted">{about.conclusion}</p>
            <Link className="btn btn--outline" href={about.readMore.href}>
              {about.readMore.label}
              <Icon name="arrow" />
            </Link>
          </div>
          <div className="about__cards">
            {about.highlights.map((item) => (
              <article className="hl card reveal" key={item.title}>
                <p className="hl__clause">{item.clause}</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
