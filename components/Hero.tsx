import Link from "next/link";
import { hero, ui } from "@/data";
import Icon from "./Icon";

export default function Hero() {
  return (
    <div className="scope-home contents">
      <section className="hero" aria-labelledby="hero-title">
        <div className="wrap hero__grid">
          <div className="hero__text">
            <span className="hero__eyebrow" lang="en">
              {hero.eyebrow}
            </span>
            <h1 id="hero-title">{hero.title}</h1>
            <p className="hero__en" lang="en">
              {hero.englishName}
            </p>
            <p className="hero__intro">{hero.intro}</p>
            <div className="hero__cta">
              {hero.actions.map((action, index) => (
                <Link
                  key={action.href}
                  href={action.href}
                  className={`btn ${index === 0 ? "btn--gold" : "btn--ghost-light"}`}
                >
                  <Icon name={["document", "users", "sheet"][index]} />
                  {action.label}
                </Link>
              ))}
            </div>
            <a
              className="result-link"
              href={hero.resultLink.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="result-link__icon">
                <Icon name="document" />
              </span>
              <span className="result-link__text">
                <span className="result-link__hi">{hero.resultLink.label}</span>
                <span className="result-link__en" lang="en">
                  {hero.resultLink.en}
                </span>
              </span>
              <Icon name="external" />
            </a>
          </div>
          <div className="hero__visual">
            <div className="hero__frame">
              <img
                {...hero.building}
                className="hero__img"
                fetchPriority="high"
                decoding="async"
              />
            </div>
            <ul className="hero__team" aria-label={ui.websiteTeam}>
              {hero.team.map((person) => (
                <li className="person" key={person.name}>
                  <img
                    {...person.image}
                    className="person__img"
                    decoding="async"
                  />
                  <div>
                    <p className="person__name">{person.name}</p>
                    <p className="person__role" lang="en">
                      {person.role}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
