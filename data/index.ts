import content from "./content.json";
import type { LocalizedContent, SiteContent } from "./type";

export const contentByLanguage: LocalizedContent = content;

export const siteContent: SiteContent = contentByLanguage.hi;

export const {
  metadata,
  header,
  hero,
  facts,
  about,
  visionMission,
  leadership,
  constitution,
  events,
  employee,
  contact,
  footer,
  pages,
  ui,
  memorandum,
} = siteContent;

export default siteContent;
