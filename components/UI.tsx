export const styles = {
  wrap: "mx-auto w-full max-w-[1180px] px-[clamp(16px,4vw,32px)]",
  section: "py-[clamp(48px,7vw,88px)]",
  sectionAlt: "border-y border-line bg-surface",
  heading: "font-serif font-bold leading-[1.35] text-navy-900",
  paragraph: "mb-[1em]",
  link: "text-blue underline underline-offset-[3px] hover:text-navy",
  eyebrow:
    "inline-block text-[.8rem] font-semibold uppercase tracking-[.08em] text-red",
  sourceNote: "text-[.85rem] text-muted",
  card: "rounded-[10px] border border-line bg-surface shadow-card [transition:transform_.25s,box-shadow_.25s,border-color_.25s]",
  cardHover:
    "hover:border-line-strong hover:shadow-lift hover:[transform:translateY(-3px)]",
  button:
    "inline-flex cursor-pointer items-center gap-[.5em] rounded-lg border-[1.5px] border-solid px-[1.2em] py-[.62em] text-[.975rem] font-semibold leading-[1.3] no-underline [transition:background-color_.2s,color_.2s,border-color_.2s,transform_.2s,box-shadow_.2s] hover:[transform:translateY(-1px)] [&_svg]:size-[1.1em] [&_svg]:flex-none",
  buttonGold:
    "border-transparent bg-gold text-navy-950 hover:bg-[#e8ab1c] hover:text-navy-950 hover:shadow-card",
  buttonPrimary:
    "border-transparent bg-navy text-white hover:bg-navy-950 hover:text-white hover:shadow-card",
  buttonOutline:
    "border-navy bg-transparent text-navy hover:bg-navy hover:text-white",
  buttonGhost:
    "border-[#ffffff8c] bg-transparent text-white hover:bg-white hover:text-navy-900",
  reveal:
    "motion-safe:supports-[animation-timeline:view()]:[animation:linear_both_reveal_view()] motion-safe:supports-[animation-timeline:view()]:[animation-range:entry_entry_35%]",
  tableWrap: "overflow-x-auto rounded-[10px] border border-line bg-surface",
  table:
    "w-full border-collapse text-[.975rem] [&_th]:border-b [&_th]:border-line [&_th]:px-[1em] [&_th]:py-[.7em] [&_th]:text-left [&_th]:align-top [&_td]:border-b [&_td]:border-line [&_td]:px-[1em] [&_td]:py-[.7em] [&_td]:text-left [&_td]:align-top [&_thead_th]:bg-navy [&_thead_th]:font-semibold [&_thead_th]:whitespace-nowrap [&_thead_th]:text-white [&_tbody_tr:nth-child(even)]:bg-[#faf7ef] [&_tbody_tr:last-child_td]:border-b-0",
  th: "border-b border-line px-[1em] py-[.7em] text-left align-top font-semibold",
  td: "border-b border-line px-[1em] py-[.7em] text-left align-top",
};
