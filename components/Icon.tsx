import type { IconProps } from "@/data/type";

const paths: Record<string, string> = {
  menu: "M4 7h16M4 12h16M4 17h16",
  close: "M6 6l12 12M18 6 6 18",
  document:
    "M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Zm0 0v5h5M9 13h6M9 17h6",
  users:
    "M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-6 9a6 6 0 0 1 12 0M16 4.3a3.5 3.5 0 0 1 0 6.4M18 14.5a6 6 0 0 1 3 5.5",
  sheet: "M5 4h14v16H5zM5 9h14M5 14h14M10 9v11",
  external:
    "M14 5h5v5m0-5-8 8M19 14v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4",
  arrow: "M5 12h14m0 0-5-5m5 5-5 5",
  target:
    "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-4a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
  shield:
    "M12 3 5 6v5.5c0 4.4 3 8.2 7 9.5 4-1.3 7-5.1 7-9.5V6l-7-3Zm-3 9 2 2 4-4",
  eye: "M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Zm9.5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
  download: "M12 4v11m0 0 4.5-4.5M12 15l-4.5-4.5M5 19h14",
  calendar: "M5 6h14v14H5zM5 10h14M9 3v4M15 3v4",
  location:
    "M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0C18.5 15.4 12 21 12 21Zm0-8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
  image: "M4 5h16v14H4zm0 11 4.5-4.5 3.5 3.5 2.5-2.5L20 17M15.5 9.5h.01",
  phone:
    "M5 4h3.2l1.6 4-2 1.3a11 11 0 0 0 4.9 4.9l1.3-2 4 1.6V17a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z",
  mail: "M4 6h16v12H4zM4 7l8 6 8-6",
  check: "M5 12l4 4L19 6",
  building:
    "M3 21h18M5 21V7l7-4 7 4v14M9 10h.01M15 10h.01M9 14h.01M15 14h.01M10 21v-4h4v4",
  award: "M8 14 6 22l6-3 6 3-2-8M19 8A7 7 0 1 1 5 8a7 7 0 0 1 14 0Z",
};

export default function Icon({ name, className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      width="1em"
      height="1em"
    >
      <path d={paths[name] ?? paths.document} />
    </svg>
  );
}
