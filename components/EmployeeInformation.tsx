import Link from "next/link";
import { employee, ui } from "@/data";
import type { FullViewProps } from "@/data/type";
import Icon from "./Icon";
import { styles } from "./UI";

export default function EmployeeInformation({ full = false }: FullViewProps) {
  return (
    <section
      className={`${styles.section} ${full ? "" : styles.sectionAlt}`}
      aria-label={employee.title}
    >
      <div className={styles.wrap}>
        <div
          className={`${styles.reveal} grid grid-cols-[auto_1fr_auto] items-center gap-x-[28px] gap-y-[20px] rounded-[14px] bg-[radial-gradient(500px_220px_at_0%_100%,#2c7a3a59,transparent_70%),radial-gradient(500px_220px_at_100%_0%,#d99a0b40,transparent_70%),linear-gradient(var(--color-navy-900),var(--color-navy-900))] p-[clamp(22px,3.5vw,36px)] text-white [@media(width<=760px)]:grid-cols-1`}
        >
          <div
            className="grid size-[64px] place-items-center rounded-[14px] bg-white text-green"
            aria-hidden="true"
          >
            <Icon name="sheet" className="size-[34px]" />
          </div>
          <div>
            <span className={`${styles.eyebrow} text-gold-soft!`} lang="en">
              {employee.eyebrow}
            </span>
            <h2
              className={`${styles.heading} mt-[.05em] mb-[.2em] text-[clamp(1.4rem,2.6vw,1.8rem)] text-white!`}
            >
              {employee.title}
            </h2>
            <p className="m-0 text-[#ffffffd1]">{employee.text}</p>
          </div>
          <a
            className={`${styles.button} ${styles.buttonGold} [@media(width<=760px)]:justify-self-start`}
            href={employee.link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="external" />
            {employee.link.label}
            <span className="sr-only">{ui.newWindow}</span>
          </a>
        </div>
        {full && (
          <>
            <div className="mt-[32px] grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-[18px]">
              {employee.steps.map((step) => {
                const parts = step.link
                  ? step.text.split(step.link.label)
                  : [step.text];
                return (
                  <article
                    className={`${styles.card} ${styles.reveal} p-[22px]`}
                    key={step.number}
                  >
                    <span className="mb-[10px] grid size-[36px] place-items-center rounded-full bg-navy font-bold text-white">
                      {step.number}
                    </span>
                    <h2 className={`${styles.heading} mb-[.5em] text-[1.2rem]`}>
                      {step.title}
                    </h2>
                    <p className="m-0 text-muted">
                      {parts[0]}
                      {step.link && (
                        <>
                          <Link className={styles.link} href={step.link.href}>
                            {step.link.label}
                          </Link>
                          {parts.slice(1).join(step.link.label)}
                        </>
                      )}
                    </p>
                  </article>
                );
              })}
            </div>
            <p className="m-0 mt-[28px] mb-[1em] text-[.92rem] wrap-anywhere text-muted">
              {employee.directLinkLabel}
              <a
                className={`${styles.link} inline`}
                href={employee.link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {employee.link.href}
                <Icon
                  name="external"
                  className="ml-[4px] inline size-[14px] align-[-2px]"
                />
              </a>
            </p>
          </>
        )}
      </div>
    </section>
  );
}
