import type { ReactNode } from "react";

export interface RootLayoutProps {
  children: ReactNode;
}

export interface RoutePageProps {
  params: Promise<{ slug: string }>;
}

export interface LinkItem {
  label: string;
  href: string;
  en?: string;
}

export interface ImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Heading {
  eyebrow: string;
  title: string;
  lead?: string;
  link?: LinkItem;
}

export interface NavItem extends LinkItem {
  en: string;
}

export interface Fact {
  label: string;
  value: string;
}

export interface ContactPerson {
  name: string;
  role: string;
  base: string;
  phones: LinkItem[];
  email: string;
  initial: string;
}

export interface OfficeBearer {
  name: string;
  role: string;
}

export interface LeadershipGroup {
  id: string;
  title: string;
  en: string;
  count: number;
  members: OfficeBearer[];
  namedList: boolean;
}

export interface DocumentItem {
  eyebrow: string;
  title: string;
  description: string;
  organization: string;
  badge: string;
  logo: ImageAsset;
  view: LinkItem;
  download: LinkItem;
}

export interface Edition {
  number: number;
  title: string;
  en: string;
  description: string;
  badges: string[];
  actionLabel: string;
  latest: boolean;
}

export interface Provision {
  number: number;
  title: string;
  clause: string;
  text: string;
  accent: string;
}

export interface GalleryImage extends ImageAsset {
  full: string;
  caption: string;
  label: string;
  wide: boolean;
}

export interface ProgrammeRow {
  number: string;
  description: string;
  time: string;
}

export interface EventItem {
  id: string;
  title: string;
  summary: string;
  date: string;
  location: string;
  placeholderCount: number;
  images: GalleryImage[];
  programme?: {
    label: string;
    caption: string;
    headers: string[];
    rows: ProgrammeRow[];
  };
}

export interface PageInfo {
  title: string;
  englishTitle: string;
  breadcrumb: string;
}

export interface EmployeeStep {
  number: number;
  title: string;
  text: string;
  link: LinkItem | null;
}

export interface SiteContent {
  metadata: {
    title: string;
    description: string;
    language: string;
    themeColor: string;
  };
  header: {
    slogans: string[];
    brandName: string;
    recognition: string;
    headquarters: string;
    motto: string[];
    logo: ImageAsset;
    homeLabel: string;
    nav: NavItem[];
    menuLabel: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    englishName: string;
    intro: string;
    actions: LinkItem[];
    resultLink: LinkItem;
    building: ImageAsset;
    team: { name: string; role: string; image: ImageAsset }[];
  };
  facts: Fact[];
  about: {
    heading: Heading;
    pageHeading: Heading;
    intro: string;
    points: string[];
    conclusion: string;
    readMore: LinkItem;
    source: string;
    highlights: { clause: string; title: string; text: string }[];
    overviewTitle: string;
    overview: Fact[];
    structureHeading: Heading;
    history: { title: string; text: string };
  };
  visionMission: {
    heading: Heading;
    vision: {
      eyebrow: string;
      title: string;
      text: string;
      source: string;
      motto: string;
    };
    mission: {
      eyebrow: string;
      title: string;
      points: string[];
      source: string;
    };
  };
  leadership: {
    heading: Heading;
    leaders: ContactPerson[];
    groups: LeadershipGroup[];
    source: string;
    categoryLabel: string;
  };
  constitution: {
    heading: Heading;
    documentsHeading: Heading;
    documents: DocumentItem[];
    editionsHeading: Heading;
    homeEditionsTitle: string;
    editions: Edition[];
    keyPointsHeading: Heading;
    homeKeyPointsTitle: string;
    infographic: {
      image: ImageAsset;
      href: string;
      caption: string;
      newWindowLabel: string;
    };
    provisionsTitle: string;
    provisions: Provision[];
    source: string;
    editionSection: { heading: Heading; text: string; emphasis: string };
    committee: {
      title: string;
      headers: string[];
      members: OfficeBearer[];
      source: string;
    };
  };
  events: {
    heading: Heading;
    items: EventItem[];
    banners: EventItem;
    greetings: { heading: Heading; people: OfficeBearer[] };
  };
  employee: {
    eyebrow: string;
    title: string;
    text: string;
    link: LinkItem;
    steps: EmployeeStep[];
    directLinkLabel: string;
  };
  contact: {
    heading: Heading;
    pageHeading: Heading;
    intro: string;
    people: ContactPerson[];
    office: {
      role: string;
      title: string;
      addresses: string[];
      pendingAddress: string;
    };
    linksHeading: Heading;
    linksTitle: string;
    links: LinkItem[];
  };
  footer: {
    logo: ImageAsset;
    name: string;
    recognition: string;
    headquarters: string;
    quickLinksTitle: string;
    quickLinks: LinkItem[];
    documentsTitle: string;
    documents: LinkItem[];
    contactTitle: string;
    copyright: string;
    englishName: string;
  };
  pages: Record<string, PageInfo>;
  ui: {
    skipLink: string;
    menu: string;
    close: string;
    newWindow: string;
    navigation: string;
    breadcrumb: string;
    home: string;
    websiteTeam: string;
    photoView: string;
    zoom: string;
    photoPlaceholder: string;
    pdfView: string;
    download: string;
    pdfPending: string;
    soon: string;
    latest: string;
    date: string;
    location: string;
    officeCategories: string;
  };
}

export interface IconProps {
  name: string;
  className?: string;
}

export interface SectionHeadingProps {
  heading: Heading;
  id?: string;
}

export interface PageHeaderProps {
  page: PageInfo;
}

export interface ConstitutionProps {
  full?: boolean;
}

export interface DocumentCardProps {
  document: DocumentItem;
}

export interface FullViewProps {
  full?: boolean;
}

export interface GalleryProps {
  images: GalleryImage[];
  placeholderCount?: number;
}

export interface EventsProps {
  full?: boolean;
}

export interface EventCardProps {
  event: EventItem;
  full?: boolean;
}
