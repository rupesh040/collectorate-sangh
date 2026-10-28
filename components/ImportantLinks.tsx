"use client";

import { useLanguage } from "./LanguageProvider";
import Icon from "./Icon";
import SectionHeading from "./SectionHeading";
import { styles } from "./UI";

interface PortalItem {
  id: string;
  title: string;
  englishTitle: string;
  url: string;
  domain: string;
  category: string;
  tagColor: "navy" | "gold" | "red";
  image: string;
  description: string;
  highlights: string[];
}

interface PortalsData {
  heading: {
    eyebrow: string;
    title: string;
    lead: string;
  };
  actionLabel: string;
  officialBadge: string;
  items: PortalItem[];
}

const portalsContent: Record<"hi" | "en", PortalsData> = {
  hi: {
    heading: {
      eyebrow: "उपयोगी शासकीय पोर्टल",
      title: "प्रमुख उपयोगी ऑनलाइन पोर्टल",
      lead: "कलेक्ट्रेट कार्मिकों, राजस्व अधिकारियों एवं नागरिकों के दैनिक उपयोग हेतु उत्तर प्रदेश शासन एवं भारत निर्वाचन आयोग की प्रमुख ऑनलाइन सेवाएं",
    },
    actionLabel: "पोर्टल पर जाएं",
    officialBadge: "आधिकारिक पोर्टल",
    items: [
      {
        id: "bor",
        title: "राजस्व परिषद उत्तर प्रदेश",
        englishTitle: "Board of Revenue, Uttar Pradesh",
        url: "https://bor.up.gov.in/",
        domain: "bor.up.gov.in",
        category: "राजस्व प्रशासन",
        tagColor: "navy",
        image: "/assets/uplogo.webp",
        description:
          "उत्तर प्रदेश शासन के राजस्व प्रशासन, भू-अभिलेख, चकबंदी, विभागीय शासनादेश एवं नागरिक सेवाओं का मुख्य राज्य स्तरीय ऑनलाइन पोर्टल।",
        highlights: ["भू-अभिलेख एवं खतौनी", "शासनादेश एवं परिपत्र", "विभागीय नियमावली"],
      },
      {
        id: "vaad",
        title: "राजस्व न्यायालय कंप्यूटरीकृत प्रबंधन प्रणाली",
        englishTitle: "Revenue Court Computerized Management System (RCCMS)",
        url: "http://vaad.up.nic.in/",
        domain: "vaad.up.nic.in",
        category: "न्यायालय एवं वाद",
        tagColor: "gold",
        image: "/assets/Uplogo1.webp",
        description:
          "प्रदेश के समस्त राजस्व न्यायालयों (नायब तहसीलदार से राजस्व परिषद तक) के मुकदमों की ऑनलाइन वाद स्थिति, दैनिक वाद सूची एवं निर्णय आदेश।",
        highlights: ["ऑनलाइन वाद स्थिति", "दैनिक वाद सूची (कॉज लिस्ट)", "निर्णय एवं आदेश प्रति"],
      },
      {
        id: "voters",
        title: "मतदाता सेवा पोर्टल",
        englishTitle: "Voters' Services Portal (ECI)",
        url: "https://voters.eci.gov.in/",
        domain: "voters.eci.gov.in",
        category: "निर्वाचन सेवाएं",
        tagColor: "red",
        image: "/assets/voter-portal.jpg",
        description:
          "भारत निर्वाचन आयोग का आधिकारिक पोर्टल — नया मतदाता पंजीकरण, ई-एपिक (e-EPIC) डिजिटल पहचान पत्र डाउनलोड एवं निर्वाचक नामावली में नाम खोजें।",
        highlights: ["नया मतदाता पंजीकरण (Form 6)", "e-EPIC पहचान पत्र डाउनलोड", "मतदाता सूची में नाम खोजें"],
      },
    ],
  },
  en: {
    heading: {
      eyebrow: "Official Government Portals",
      title: "Key Administrative & Revenue Portals",
      lead: "Essential official government portals for collectorate employees, revenue officers, and citizens of Uttar Pradesh",
    },
    actionLabel: "Visit Portal",
    officialBadge: "Official Portal",
    items: [
      {
        id: "bor",
        title: "Board of Revenue, Uttar Pradesh",
        englishTitle: "राजस्व परिषद उत्तर प्रदेश",
        url: "https://bor.up.gov.in/",
        domain: "bor.up.gov.in",
        category: "Revenue Administration",
        tagColor: "navy",
        image: "/assets/uplogo.webp",
        description:
          "Apex state revenue administration portal for land records, revenue circulars, departmental service rules, and citizen online services.",
        highlights: ["Land Records & Khatauni", "Government Orders (GOs)", "Departmental Rules"],
      },
      {
        id: "vaad",
        title: "Revenue Court Computerized Management System",
        englishTitle: "राजस्व न्यायालय कंप्यूटरीकृत प्रबंधन प्रणाली (RCCMS)",
        url: "https://vaad.up.nic.in/Default_new.aspx",
        domain: "vaad.up.nic.in",
        category: "Court Management",
        tagColor: "gold",
        image: "/assets/Uplogo1.webp",
        description:
          "Online computerized system to track case proceedings, daily cause lists, caveats, judgements, and orders across UP revenue courts.",
        highlights: ["Case Status Tracking", "Daily Cause List", "Judgements & Orders"],
      },
      {
        id: "voters",
        title: "Voters' Services Portal",
        englishTitle: "मतदाता सेवा पोर्टल (ECI)",
        url: "https://voters.eci.gov.in/",
        domain: "voters.eci.gov.in",
        category: "Election Services",
        tagColor: "red",
        image: "/assets/voter-portal.jpg",
        description:
          "Official Election Commission of India portal for new voter registration, digital e-EPIC card download, and electoral roll search.",
        highlights: ["New Voter Registration", "Download Digital e-EPIC", "Search in Electoral Roll"],
      },
    ],
  },
};

const tagStyles = {
  navy: "border-[#1b2a6e]/20 bg-[#eef3fb] text-navy",
  gold: "border-[#d99a0b]/30 bg-[#fdf8ec] text-[#996500]",
  red: "border-[#a8162a]/20 bg-[#fdf0f1] text-red",
} as const;

const topBorderStyles = {
  navy: "border-t-navy",
  gold: "border-t-gold",
  red: "border-t-red",
} as const;

export default function ImportantLinks() {
  const { language } = useLanguage();
  const data = portalsContent[language] ?? portalsContent.hi;

  return (
    <section
      className={`${styles.section} ${styles.sectionAlt}`}
      aria-labelledby="portals-title"
    >
      <div className={styles.wrap}>
        <SectionHeading heading={data.heading} id="portals-title" />

        <div className="grid grid-cols-1 gap-[24px] md:grid-cols-2 lg:grid-cols-3">
          {data.items.map((item) => (
            <article
              key={item.id}
              className={`${styles.card} ${styles.cardHover} ${styles.reveal} ${topBorderStyles[item.tagColor]} group flex flex-col border-t-4 p-[24px] transition-all duration-250`}
            >
              {/* Card Header with Square Emblem & Badges */}
              <div className="flex items-start justify-between gap-[14px]">
                <div className="size-[64px] flex-none overflow-hidden rounded-[8px] border-2 border-line bg-white p-[3px] shadow-[0_2px_8px_rgba(19,29,85,0.08)] transition-colors duration-200 group-hover:border-gold">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="size-full rounded-[5px] object-contain"
                    width={64}
                    height={64}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="flex flex-col items-end gap-[6px]">
                  <span
                    className={`rounded-full border px-[10px] py-[2px] text-[.78rem] font-bold tracking-[.02em] ${tagStyles[item.tagColor]}`}
                  >
                    {item.category}
                  </span>
                  <span className="inline-flex items-center gap-[4px] rounded-[4px] bg-[#f4efe4] px-[8px] py-[2px] text-[.75rem] font-medium text-muted">
                    <span className="size-[6px] rounded-full bg-green" />
                    {item.domain}
                  </span>
                </div>
              </div>

              {/* Title and English Subtitle */}
              <h3 className={`${styles.heading} mt-[16px] mb-[4px] text-[1.25rem] leading-[1.35] transition-colors group-hover:text-blue`}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-inherit no-underline hover:text-blue"
                >
                  {item.title}
                </a>
              </h3>
              <p className="m-0 mb-[10px] text-[.85rem] font-medium text-muted" lang="en">
                {item.englishTitle}
              </p>

              {/* Description */}
              <p className="m-0 text-[.92rem] leading-[1.6] text-muted">
                {item.description}
              </p>

              {/* Highlight Service Chips */}
              <div className="mt-auto pt-[16px] mb-[18px] flex flex-wrap gap-[6px]">
                {item.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="rounded-[6px] border border-line bg-[#fbf9f4] px-[8px] py-[3px] text-[.78rem] font-medium text-ink/80 transition-colors group-hover:border-line-strong"
                  >
                    {highlight}
                  </span>
                ))}
              </div>

              {/* Direct Access Button */}
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between rounded-[8px] border border-navy/15 bg-surface px-[16px] py-[10px] text-[.92rem] font-semibold text-navy transition-all duration-200 group-hover:border-navy group-hover:bg-navy group-hover:text-white group-hover:shadow-card"
              >
                <span>{data.actionLabel}</span>
                <span className="inline-flex items-center gap-[4px] text-gold group-hover:text-gold-soft">
                  <Icon
                    name="external"
                    className="size-[15px] transition-transform duration-200 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
                  />
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
