"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { contentByLanguage } from "@/data";
import { useContent, useLanguage } from "./LanguageProvider";
import Icon from "./Icon";
import { styles } from "./UI";

function LanguageToggle() {
  const {
    language,
    setLanguage,
    content: { ui },
  } = useLanguage();

  return (
    <div
      className="ml-auto inline-flex shrink-0 items-center gap-[14px] pl-[12px] text-[.95rem] leading-[1.3] text-[#ffffffc7] [@media(860px<width<=1080px)]:gap-[6px] [@media(860px<width<=1080px)]:pl-[6px] [@media(860px<width<=1080px)]:text-[.8rem]"
      role="group"
      aria-label={ui.languageToggle}
    >
      <Icon
        name="globe"
        className="size-[18px] shrink-0 [@media(860px<width<=1080px)]:hidden"
      />
      <button
        type="button"
        lang="hi"
        aria-label={ui.switchToHindi}
        aria-pressed={language === "hi"}
        onClick={() => setLanguage("hi")}
        className={`relative cursor-pointer bg-transparent py-[4px] transition-colors duration-200 hover:text-white after:absolute after:right-0 after:bottom-[-3px] after:left-0 after:h-[2px] after:bg-gold after:content-[''] ${language === "hi" ? "font-semibold text-white after:opacity-100" : "after:opacity-0"}`}
      >
        {ui.languageHindi}
      </button>
      <span aria-hidden="true" className="text-[#ffffff80]">
        |
      </span>
      <button
        type="button"
        lang="en"
        aria-label={ui.switchToEnglish}
        aria-pressed={language === "en"}
        onClick={() => setLanguage("en")}
        className={`relative cursor-pointer bg-transparent py-[4px] transition-colors duration-200 hover:text-white after:absolute after:right-0 after:bottom-[-3px] after:left-0 after:h-[2px] after:bg-gold after:content-[''] ${language === "en" ? "font-semibold text-white after:opacity-100" : "after:opacity-0"}`}
      >
        {ui.languageEnglish}
      </button>
    </div>
  );
}

export default function Navbar() {
  const { header, ui } = useContent();
  const { language } = useLanguage();
  const secondaryNavigation =
    contentByLanguage[language === "hi" ? "en" : "hi"].header.nav;
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <a
        className="absolute -top-[60px] left-[12px] z-[100] rounded-[6px] bg-gold px-[14px] py-[8px] font-semibold text-navy-950 no-underline focus:top-[12px]"
        href="#main"
      >
        {ui.skipLink}
      </a>
      <header>
        <div className="bg-navy-950 text-[.8rem] font-medium text-gold-soft">
          <div
            className={`${styles.wrap} flex justify-between gap-[1rem] py-[5px] [@media(width<=860px)]:justify-center`}
          >
            {header.slogans.map((slogan, index) => (
              <span
                className={`${index === 1 ? "text-white" : ""} ${index < header.slogans.length - 1 ? "[@media(width<=860px)]:hidden" : ""}`}
                key={slogan}
              >
                {slogan}
              </span>
            ))}
          </div>
        </div>
        <div className="[background:linear-gradient(90deg,#d99a0b00_0%,#d99a0b8c_50%,#d99a0b00_100%)_bottom/100%_1px_no-repeat,radial-gradient(1200px_200px_at_50%_-40%,#eaf1fb_0%,#0000_70%),#fff]">
          <div
            className={`${styles.wrap} flex items-center justify-between gap-[1.5rem] py-[14px]`}
          >
            <Link
              className="flex min-w-0 items-center gap-[clamp(12px,2vw,20px)] text-inherit no-underline"
              href="/"
              aria-label={header.homeLabel}
              onClick={() => setIsOpen(false)}
            >
              <img
                className="h-auto w-[clamp(64px,9vw,96px)] max-w-full flex-none rounded-[50%]"
                src={header.logo.src}
                alt={header.logo.alt}
                width={96}
                height={96}
                loading="eager"
                decoding="async"
              />
              <span className="flex min-w-0 flex-col">
                <span className="font-serif text-[clamp(1.15rem,2.6vw,1.9rem)] leading-[1.3] font-extrabold text-navy-900">
                  {header.brandName}
                </span>
                <span className="text-[clamp(.72rem,1.2vw,.88rem)] font-medium text-ink">
                  {header.recognition}
                </span>
                <span className="text-[clamp(.78rem,1.3vw,.95rem)] font-bold text-red">
                  {header.headquarters}
                </span>
              </span>
            </Link>
            <div className="flex items-center gap-[clamp(12px,1.5vw,20px)] flex-none [@media(width<=860px)]:hidden">
              <div className="flex flex-col items-center flex-none">
                <img
                  className="size-[clamp(64px,9vw,96px)] max-w-full flex-none rounded-[50%] border-2 border-gold bg-white p-[2px] object-cover object-top shadow-[0_2px_8px_rgba(0,0,0,0.12)]"
                  src="/assets/Sudhakar.jpeg"
                  alt={language === "hi" ? "स्व. सुधाकर शर्मा" : "Late Sudhakar Sharma"}
                  width={96}
                  height={96}
                  loading="eager"
                  decoding="async"
                />
                <span className="mt-[3px] text-[.72rem] font-bold text-navy-900 whitespace-nowrap">
                  {language === "hi" ? "स्व. सुधाकर शर्मा" : "Late Sudhakar Sharma"}
                </span>
              </div>
              <p
                className="m-0 flex flex-col items-end border-b-[3px] border-gold pb-[6px] font-serif leading-[1.4] font-bold whitespace-nowrap text-navy italic [@media(width<=1100px)]:hidden"
                lang={language}
              >
                {header.motto.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </p>
            </div>
          </div>
        </div>
        <nav
          className="sticky top-0 z-50 border-b-[3px] border-gold bg-navy"
          aria-label={ui.navigation}
        >
          <div
            className={`${styles.wrap} flex items-center justify-between gap-x-[12px] [@media(width<=860px)]:min-h-[56.625px] [@media(width<=860px)]:flex-wrap [@media(width<=860px)]:gap-y-[.875px] [@media(width<=860px)]:py-[6px]`}
          >
            <button
              className="hidden cursor-pointer items-center gap-[8px] rounded-[8px] border-[1.5px] border-[#fff6] bg-transparent px-[12px] py-[6px] font-semibold text-white [@media(width<=860px)]:inline-flex [@media(width<=860px)]:self-start"
              type="button"
              aria-expanded={isOpen}
              aria-controls="nav-list"
              onClick={() => setIsOpen((open) => !open)}
            >
              <Icon name={isOpen ? "close" : "menu"} className="size-[22px]" />
              <span>{header.menuLabel}</span>
            </button>
            <ul
              className={`m-0 flex min-w-0 flex-wrap list-none p-0 [@media(width<=860px)]:order-3 [@media(width<=860px)]:w-full [@media(width<=860px)]:basis-full [@media(width<=860px)]:flex-col [@media(width<=860px)]:py-[6px] ${isOpen ? "[@media(width<=860px)]:flex" : "[@media(width<=860px)]:hidden"}`}
              id="nav-list"
            >
              {header.nav.map((item, index) => {
                const active =
                  (pathname.replace(/\/$/, "") || "/") ===
                  (item.href.replace(/\/$/, "") || "/");
                return (
                  <li key={item.href}>
                    <Link
                      className={`relative flex flex-col items-center px-[14px] pt-[9px] pb-[7px] leading-[1.3] text-white no-underline transition-[background-color] duration-200 [transition-timing-function:ease] hover:bg-[#ffffff14] after:absolute after:right-[14px] after:bottom-0 after:left-[14px] after:h-[3px] after:bg-gold after:content-[''] after:transition-transform after:duration-[250ms] after:[transform:scaleX(0)] hover:after:[transform:scaleX(1)] [@media(width<=1080px)]:px-[10px] [@media(width<=860px)]:flex-row [@media(width<=860px)]:items-baseline [@media(width<=860px)]:justify-between [@media(width<=860px)]:border-t [@media(width<=860px)]:border-[#ffffff1a] [@media(width<=860px)]:px-[6px] [@media(width<=860px)]:py-[10px] [@media(width<=860px)]:after:h-auto [@media(width<=860px)]:after:w-[3px] [@media(width<=860px)]:after:[inset:8px_auto_8px_0] [@media(width<=860px)]:after:[transform:scaleY(0)] ${active ? "bg-navy-900! after:[transform:scaleX(1)]! [@media(width<=860px)]:after:[transform:scaleY(1)]!" : ""}`}
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="text-[.98rem] font-semibold">
                        {item.label}
                      </span>
                      <span
                        className="text-[.7rem] tracking-[.02em] text-[#ffffffad]"
                        lang={language === "hi" ? "en" : "hi"}
                      >
                        {language === "hi"
                          ? item.en
                          : secondaryNavigation[index].label}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <LanguageToggle />
          </div>
        </nav>
      </header>
    </>
  );
}
