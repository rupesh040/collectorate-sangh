import { siteContent } from "@/data";

export default function EditionGrid() {
  return (
    <div className="scope-edition-grid contents">
      <div className="editions">
        {siteContent.constitution.editions.map((edition) => (
          <div className="scope-edition-card contents" key={edition.number}>
            <article
              className={`ed card reveal ed--pending${edition.latest ? " ed--latest" : ""}`}
            >
              <div className="ed__top">
                <span className="ed__num" aria-hidden="true">
                  {edition.number}
                </span>
                <div className="ed__badges">
                  {edition.badges.map((badge, index) => (
                    <span
                      className={`badge ${edition.latest && index === 0 ? "badge--latest" : "badge--soon"}`}
                      key={badge}
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="ed__title">{edition.title}</h3>
              <p className="ed__en" lang="en">
                {edition.en}
              </p>
              <p className="ed__desc">{edition.description}</p>
              <div className="ed__actions">
                <span className="btn btn--disabled" aria-disabled="true">
                  {edition.actionLabel}
                </span>
              </div>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
}
