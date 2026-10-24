import { visionMission } from "@/data";
import Icon from "./Icon";
import SectionHeading from "./SectionHeading";
import { styles } from "./UI";

export default function VisionMission() {
  const { vision, mission, heading } = visionMission;
  const iconStyle =
    "absolute top-[22px] right-[22px] grid size-[42px] place-items-center rounded-full bg-[#d99a0b29] text-gold";

  return (
    <section
      className={`${styles.section} ${styles.sectionAlt}`}
      aria-labelledby="vm-title"
    >
      <div className={styles.wrap}>
        <SectionHeading heading={heading} id="vm-title" />
        <div className="grid grid-cols-[1fr_1.3fr] gap-[22px] [@media(width<=860px)]:grid-cols-1">
          <article
            className={`${styles.card} ${styles.reveal} relative border-0! bg-[radial-gradient(400px_200px_at_100%_0%,#d99a0b38,transparent_70%),linear-gradient(160deg,var(--color-navy-900),var(--color-navy))] p-[clamp(22px,3vw,32px)] text-white`}
          >
            <span className={iconStyle}>
              <Icon name="target" className="size-[22px]" />
            </span>
            <span className={`${styles.eyebrow} text-gold-soft!`} lang="en">
              {vision.eyebrow}
            </span>
            <h3
              className={`${styles.heading} mt-[.1em] mb-[.5em] text-[1.5rem] text-white!`}
            >
              {vision.title}
            </h3>
            <blockquote className="m-0 border-l-[3px] border-gold pl-[16px] font-serif text-[1.12rem] leading-[1.8]">
              <p className={styles.paragraph}>{vision.text}</p>
            </blockquote>
            <p className={`${styles.sourceNote} mb-[1em] text-[#ffffffa6]!`}>
              {vision.source}
            </p>
            <p className="m-0 mt-[18px] font-serif text-[1.1rem] font-bold text-gold-soft italic">
              {vision.motto}
            </p>
          </article>
          <article
            className={`${styles.card} ${styles.reveal} relative p-[clamp(22px,3vw,32px)]`}
          >
            <span className={iconStyle}>
              <Icon name="shield" className="size-[22px]" />
            </span>
            <span className={styles.eyebrow} lang="en">
              {mission.eyebrow}
            </span>
            <h3
              className={`${styles.heading} mt-[.1em] mb-[.5em] text-[1.5rem]`}
            >
              {mission.title}
            </h3>
            <ol className="m-0 mb-[1em] grid list-none gap-[10px] p-0 [counter-reset:obj]">
              {mission.points.map((point) => (
                <li
                  className="relative min-h-[30px] pl-[44px] [counter-increment:obj] before:absolute before:top-[2px] before:left-0 before:grid before:size-[30px] before:place-items-center before:rounded-full before:border before:border-gold before:bg-[#f6ebc9] before:text-[.9rem] before:font-bold before:text-navy-900 before:content-[counter(obj)]"
                  key={point}
                >
                  {point}
                </li>
              ))}
            </ol>
            <p className={`${styles.sourceNote} mb-[1em]`}>{mission.source}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
