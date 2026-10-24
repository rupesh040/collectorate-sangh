"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteContent } from "@/data";
import Icon from "./Icon";

export default function Navbar() {
  const { header, ui } = siteContent;
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="scope-navbar contents">
      <a className="skip-link" href="#main">
        {ui.skipLink}
      </a>
      <header className="site-header">
        <div className="slogans">
          <div className="wrap slogans__row">
            {header.slogans.map((slogan) => (
              <span key={slogan}>{slogan}</span>
            ))}
          </div>
        </div>
        <div className="brand-band">
          <div className="wrap brand">
            <Link
              className="brand__home"
              href="/"
              aria-label={header.homeLabel}
              onClick={() => setIsOpen(false)}
            >
              <img
                className="brand__logo"
                src={header.logo.src}
                alt={header.logo.alt}
                width={96}
                height={96}
                loading="eager"
                decoding="async"
              />
              <span className="brand__text">
                <span className="brand__name">{header.brandName}</span>
                <span className="brand__recog">{header.recognition}</span>
                <span className="brand__hq">{header.headquarters}</span>
              </span>
            </Link>
            <p className="brand__motto" lang="hi">
              {header.motto.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </p>
          </div>
        </div>
        <nav className="mainnav" aria-label={ui.navigation}>
          <div className="wrap mainnav__inner">
            <button
              className="mainnav__toggle"
              type="button"
              aria-expanded={isOpen}
              aria-controls="nav-list"
              onClick={() => setIsOpen((open) => !open)}
            >
              <Icon name="menu" className="i-open" />
              <Icon name="close" className="i-close" />
              <span>{header.menuLabel}</span>
            </button>
            <ul className="mainnav__list" id="nav-list">
              {header.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={
                      (pathname.replace(/\/$/, "") || "/") ===
                      (item.href.replace(/\/$/, "") || "/")
                        ? "page"
                        : undefined
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="hi">{item.label}</span>
                    <span className="en" lang="en">
                      {item.en}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}
