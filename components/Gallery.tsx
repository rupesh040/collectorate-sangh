"use client";

import { useEffect, useRef, useState } from "react";
import { useContent } from "./LanguageProvider";
import type { GalleryProps } from "@/data/type";
import Icon from "./Icon";

export default function Gallery({
  images,
  placeholderCount = 0,
}: GalleryProps) {
  const { ui } = useContent();
  const dialog = useRef<HTMLDialogElement>(null);
  const [selectedSource, setSelectedSource] = useState<string | null>(null);
  const selected = images.find((image) => image.src === selectedSource) ?? null;

  useEffect(() => {
    if (selected && !dialog.current?.open) dialog.current?.showModal();
  }, [selected]);

  return (
    <>
      <ul
        className="grid list-none grid-cols-[repeat(auto-fill,minmax(min(100%,260px),1fr))] grid-flow-dense gap-[14px] p-0"
        role="list"
      >
        {images.map((image) => (
          <li
            className={`overflow-hidden rounded-[10px] bg-[#e9ecf3] ${image.wide ? "col-span-full aspect-auto" : "aspect-[4/3]"}`}
            key={image.src}
          >
            <button
              className="group/gallery relative block h-full w-full cursor-zoom-in appearance-none border-0 bg-transparent p-0 text-left focus-visible:outline-[3px] focus-visible:outline-solid focus-visible:outline-gold focus-visible:outline-offset-[-3px]"
              type="button"
              aria-label={image.label}
              onClick={() => setSelectedSource(image.src)}
            >
              <img
                className="h-full w-full object-cover [transition:transform_.5s] group-hover/gallery:[transform:scale(1.03)]"
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
          <li
            className="grid aspect-[4/3] place-content-center justify-items-center gap-[6px] overflow-hidden rounded-[10px] border-[1.5px] border-dashed border-line-strong text-[.9rem] text-muted [background:repeating-linear-gradient(45deg,#faf7ef_0_12px,#f4efe2_12px_24px)]"
            key={`placeholder-${index}`}
          >
            <Icon name="image" className="size-[34px] text-line-strong" />
            <span>{ui.photoPlaceholder}</span>
          </li>
        ))}
      </ul>
      {images.length > 0 && (
        <dialog
          ref={dialog}
          className="m-auto max-h-[92vh] max-w-[min(1200px,94vw)] border-0 bg-transparent p-0 backdrop:bg-[#080c24e0]"
          aria-label={ui.photoView}
          onClose={() => setSelectedSource(null)}
          onClick={(event) => {
            if (event.target === event.currentTarget) dialog.current?.close();
          }}
        >
          <button
            className="sticky top-0 mb-[8px] ml-auto grid size-[40px] cursor-pointer place-items-center rounded-full border-0 bg-white text-navy-900"
            type="button"
            aria-label={ui.close}
            onClick={() => dialog.current?.close()}
          >
            <Icon name="close" className="size-[20px]" />
          </button>
          {selected && (
            <figure className="m-0">
              <img
                className="mx-auto max-h-[82vh] w-auto rounded-[6px]"
                src={selected.full}
                alt={selected.alt}
              />
              <figcaption className="pt-[10px] text-center text-white">
                {selected.caption}
              </figcaption>
            </figure>
          )}
        </dialog>
      )}
    </>
  );
}
