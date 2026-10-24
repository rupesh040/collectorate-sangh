import content from "./content.json";
import type { SiteContent } from "./type";

export const siteContent: SiteContent = content;

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
} = siteContent;

export default siteContent;
