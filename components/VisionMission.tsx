import { visionMission } from "@/data";
import Icon from "./Icon";
import SectionHeading from "./SectionHeading";

export default function VisionMission() {
  const { vision, mission, heading } = visionMission;
  return (
    <section className="section section--alt" aria-labelledby="vm-title">
      <div className="wrap">
        <SectionHeading heading={heading} id="vm-title" />
        <div className="scope-vision-mission contents">
          <div className="vm">
            <article className="vm__vision card reveal">
              <span className="vm__icon">
                <Icon name="target" />
              </span>
              <span className="eyebrow" lang="en">
                {vision.eyebrow}
              </span>
              <h3>{vision.title}</h3>
              <blockquote>
                <p>{vision.text}</p>
              </blockquote>
              <p className="source-note">{vision.source}</p>
              <p className="motto">{vision.motto}</p>
            </article>
            <article className="vm__mission card reveal">
              <span className="vm__icon">
                <Icon name="shield" />
              </span>
              <span className="eyebrow" lang="en">
                {mission.eyebrow}
              </span>
              <h3>{mission.title}</h3>
              <ol>
                {mission.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ol>
              <p className="source-note">{mission.source}</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
