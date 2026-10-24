import { facts } from "@/data";

export default function Facts() {
  return (
    <div className="scope-home contents">
      <div className="facts-band">
        <dl className="wrap facts">
          {facts.map((fact) => (
            <div className="fact" key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
