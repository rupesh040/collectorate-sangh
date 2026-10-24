"use client";

import { useEffect, useRef, useState } from "react";
import { ui } from "@/data";
import type { GalleryImage, GalleryProps } from "@/data/type";
import Icon from "./Icon";

export default function Gallery({
  images,
  placeholderCount = 0,
}: GalleryProps) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState<GalleryImage | null>(null);

  useEffect(() => {
    if (selected && !dialog.current?.open) dialog.current?.showModal();
  }, [selected]);

  return (
    <div className="scope-gallery contents">
      <ul className="gallery" role="list">
        {images.map((image) => (
          <li
            className={`tile${image.wide ? " tile--wide" : ""}`}
            key={image.src}
          >
            <button
              className="tile__btn"
              type="button"
              aria-label={image.label}
              onClick={() => setSelected(image)}
            >
              <img
                className="tile__img"
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                loading="lazy"
                decoding="async"
              />
            </button>
          </li>
        ))}
        {Array.from({ length: placeholderCount }, (_, index) => (
          <li className="tile tile--placeholder" key={`placeholder-${index}`}>
            <Icon name="image" />
            <span>{ui.photoPlaceholder}</span>
          </li>
        ))}
      </ul>
      {images.length > 0 && (
        <dialog
          ref={dialog}
          className="lightbox m-auto"
          aria-label={ui.photoView}
          onClose={() => setSelected(null)}
          onClick={(event) => {
            if (event.target === event.currentTarget) dialog.current?.close();
          }}
        >
          <button
            className="lightbox__close"
            type="button"
            aria-label={ui.close}
            onClick={() => dialog.current?.close()}
          >
            <Icon name="close" />
          </button>
          {selected && (
            <figure>
              <img src={selected.full} alt={selected.alt} />
              <figcaption>{selected.caption}</figcaption>
            </figure>
          )}
        </dialog>
      )}
    </div>
  );
}
