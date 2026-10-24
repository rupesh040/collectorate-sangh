import type { CSSProperties } from "react";
import { siteContent } from "@/data";
import Icon from "./Icon";

export default function KeyPoints() {
  const { constitution } = siteContent;
  const { infographic } = constitution;

  return (
    <div className="scope-key-points contents">
      <div className="kp">
        <figure className="kp__figure reveal">
          <a
            className="kp__imglink"
            href={infographic.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="kp__img"
              src={infographic.image.src}
              alt={infographic.image.alt}
              width={infographic.image.width}
              height={infographic.image.height}
              loading="lazy"
              decoding="async"
            />
            <span className="sr-only">{infographic.newWindowLabel}</span>
          </a>
          <figcaption>
            <a
              href={infographic.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="external" />
              {infographic.caption}
            </a>
          </figcaption>
        </figure>
        <div className="kp__details">
          <h3 className="kp__title">{constitution.provisionsTitle}</h3>
          <ol className="kp__list">
            {constitution.provisions.map((point) => (
              <li
                className="kp__item card card--hover reveal"
                key={point.number}
                style={{ "--accent": point.accent } as CSSProperties}
              >
                <span className="kp__num" aria-hidden="true">
                  {point.number}
                </span>
                <div>
                  <p className="kp__head">
                    <strong>{point.title}</strong>
                    <span className="kp__clause">{point.clause}</span>
                  </p>
                  <p className="kp__detail">{point.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="source-note">{constitution.source}</p>
        </div>
      </div>
    </div>
  );
}
