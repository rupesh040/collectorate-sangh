"use client";

import Link from "next/link";
import { useContent } from "./LanguageProvider";
import Icon from "./Icon";
import { styles } from "./UI";

export default function Hero() {
  const { hero, ui } = useContent();
  return (
    <section
      className="overflow-hidden py-[clamp(40px,7vw,84px)] text-white [background:radial-gradient(700px_360px_at_85%_20%,#d99a0b33,transparent_70%),radial-gradient(600px_300px_at_0%_100%,#1f5fa873,transparent_70%),linear-gradient(135deg,#0c1440_0%,#131d55_45%,#1b2a6e_100%)]"
      aria-labelledby="hero-title"
    >
      <div
        className={`${styles.wrap} grid grid-cols-[1.1fr_1fr] items-start gap-[clamp(28px,5vw,64px)] [@media(width<=900px)]:grid-cols-1`}
      >
        <div className="motion-safe:[animation:rise_.7s_both]">
          <span
            className="mb-3.5 inline-block rounded-full border border-[#f4d67a73] px-3 py-0.5 text-[.78rem] tracking-[.12em] text-gold-soft uppercase"
            lang="en"
          >
            {hero.eyebrow}
          </span>
          <h1
            id="hero-title"
            className="mb-[.2em] font-serif text-[clamp(1.8rem,4.2vw,3rem)] leading-[1.3] font-bold text-white"
          >
            {hero.title}
          </h1>
          <p className="mb-[1.1em] text-[.95rem] text-[#ffffffb3]" lang="en">
            {hero.englishName}
          </p>
          <p className="mb-[1em] max-w-[580px] border-l-[3px] border-gold pl-4 text-[clamp(1.02rem,1.6vw,1.18rem)] text-[#ffffffe6]">
            {hero.intro}
          </p>
          <div className="mt-[26px] flex flex-wrap gap-3">
            {hero.actions.map((action, index) => (
              <Link
                key={action.href}
                href={action.href}
                className={`${styles.button} ${index === 0 ? styles.buttonGold : styles.buttonGhost}`}
              >
                <Icon name={["document", "users", "sheet"][index]} />
                {action.label}
              </Link>
            ))}
          </div>
          <a
            className="mt-[clamp(36px,5vw,56px)] flex max-w-[460px] items-center gap-3.5 rounded-xl bg-gold px-4 py-3 text-navy-950 no-underline shadow-[0_10px_24px_#00000040] [transition:transform_.15s,background_.15s] hover:bg-gold-soft hover:[transform:translateY(-2px)] focus-visible:outline-white! focus-visible:outline-offset-[3px]!"
            href={hero.resultLink.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="grid size-10 flex-none place-items-center rounded-full bg-[#ffffff8c]">
              <Icon name="document" />
            </span>
            <span className="grid flex-1 leading-[1.35]">
              <span className="text-[1.02rem] font-bold">
                {hero.resultLink.label}
              </span>
              <span className="text-[.8rem] opacity-80" lang="en">
                {hero.resultLink.en}
              </span>
            </span>
            <Icon name="external" />
          </a>
        </div>
        <div className="relative grid gap-[18px] motion-safe:[animation:rise_.8s_.12s_both] [@media(width<=900px)]:max-w-[560px]">
          <div className="aspect-[16/10] overflow-hidden rounded-[14px] border-[6px] border-[#ffffffeb] shadow-[0_30px_60px_#00000059]">
            <img
              {...hero.building}
              className="h-full w-full object-cover"
              fetchPriority="high"
              decoding="async"
            />
          </div>
          <ul
            className="m-0 grid list-none grid-cols-2 gap-3.5 p-0 [@media(width<=520px)]:grid-cols-1"
            aria-label={ui.websiteTeam}
          >
            {hero.team.map((person) => (
              <li
                className="flex flex-col items-center gap-2.5 rounded-xl border border-[#ffffff29] bg-[#ffffff14] px-3.5 py-4 text-center"
                key={person.name}
              >
                <img
                  {...person.image}
                  className="size-[140px] flex-none rounded-full border-[3px] border-gold bg-white object-cover object-top"
                  decoding="async"
                />
                <div>
                  <p className="m-0 text-[.88rem] leading-[1.35] font-bold text-white">
                    {person.name}
                  </p>
                  <p
                    className="m-0 text-[.8rem] leading-[1.4] text-gold-soft"
                    lang="en"
                  >
                    {person.role}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
