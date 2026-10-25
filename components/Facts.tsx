"use client";

import { useContent } from "./LanguageProvider";
import { styles } from "./UI";

export default function Facts() {
  const { facts } = useContent();
  return (
    <div className="border-b border-line bg-surface">
      <dl
        className={`${styles.wrap} my-0 grid grid-cols-4 [@media(520px<width<=900px)]:grid-cols-2 [@media(width<=520px)]:grid-cols-1`}
      >
        {facts.map((fact) => (
          <div
            key={fact.label}
            className="border-l border-line px-5 py-[18px] first:border-l-0 first:pl-0 [@media(width<=900px)]:odd:border-l-0 [@media(width<=900px)]:odd:pl-0 [@media(width<=900px)]:[&:nth-child(n+3)]:border-t [@media(width<=520px)]:border-l-0 [@media(width<=520px)]:py-3 [@media(width<=520px)]:pl-0 [@media(width<=520px)]:not-first:border-t"
          >
            <dt className="text-[.8rem] font-bold tracking-[.02em] text-red">
              {fact.label}
            </dt>
            <dd className="m-0 text-[.95rem] leading-[1.5] font-semibold text-navy-900">
              {fact.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
