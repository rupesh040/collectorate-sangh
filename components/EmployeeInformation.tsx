import Link from "next/link";
import { employee, ui } from "@/data";
import type { FullViewProps } from "@/data/type";
import Icon from "./Icon";

export default function EmployeeInformation({ full = false }: FullViewProps) {
  return (
    <div className="scope-employee contents">
      <section
        className={`section ${full ? "" : "section--alt"}`}
        aria-label={employee.title}
      >
        <div className="wrap">
          <div className="scope-employee-cta contents">
            <div className="cta reveal">
              <div className="cta__icon" aria-hidden="true">
                <Icon name="sheet" />
              </div>
              <div className="cta__text">
                <span className="eyebrow" lang="en">
                  {employee.eyebrow}
                </span>
                <h2>{employee.title}</h2>
                <p>{employee.text}</p>
              </div>
              <a
                className="btn btn--gold"
                href={employee.link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="external" />
                {employee.link.label}
                <span className="sr-only">{ui.newWindow}</span>
              </a>
            </div>
          </div>
          {full && (
            <>
              <div className="steps">
                {employee.steps.map((step) => {
                  const parts = step.link
                    ? step.text.split(step.link.label)
                    : [step.text];
                  return (
                    <article className="card step reveal" key={step.number}>
                      <span className="n">{step.number}</span>
                      <h2>{step.title}</h2>
                      <p>
                        {parts[0]}
                        {step.link && (
                          <>
                            <Link href={step.link.href}>{step.link.label}</Link>
                            {parts.slice(1).join(step.link.label)}
                          </>
                        )}
                      </p>
                    </article>
                  );
                })}
              </div>
              <p className="direct">
                {employee.directLinkLabel}
                <a
                  href={employee.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {employee.link.href}
                  <Icon name="external" />
                </a>
              </p>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
