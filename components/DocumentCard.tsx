import { siteContent } from "@/data";
import type { DocumentCardProps } from "@/data/type";
import Icon from "./Icon";

export default function DocumentCard({ document }: DocumentCardProps) {
  return (
    <div className="scope-document-card contents">
      <article className="doc card card--hover reveal">
        <div className="preview" aria-hidden="true">
          <div className="sheet">
            <img
              className="sheet__logo"
              src={document.logo.src}
              alt=""
              width={document.logo.width}
              height={document.logo.height}
              loading="lazy"
              decoding="async"
            />
            <p className="sheet__org">{document.organization}</p>
            <p className="sheet__title">{document.title}</p>
            <span className="sheet__lines" />
            <span className="sheet__badge">{document.badge}</span>
          </div>
        </div>
        <div className="body">
          <span className="eyebrow" lang="en">
            {document.eyebrow}
          </span>
          <h3>{document.title}</h3>
          <p className="desc">{document.description}</p>
          <div className="actions">
            <a
              className="btn btn--primary"
              href={document.view.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="eye" />
              {document.view.label}
              <span className="sr-only">
                {" "}
                — {document.title} {siteContent.ui.newWindow}
              </span>
            </a>
            <a
              className="btn btn--outline"
              href={document.download.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="download" />
              {document.download.label}
              <span className="sr-only"> — {document.title}</span>
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}
