import { siteContent } from "@/data";
import type { ConstitutionProps } from "@/data/type";
import DocumentCard from "./DocumentCard";
import EditionGrid from "./EditionGrid";
import KeyPoints from "./KeyPoints";
import SectionHeading from "./SectionHeading";

export default function Constitution({ full = false }: ConstitutionProps) {
  const { constitution } = siteContent;

  if (!full) {
    return (
      <div className="scope-home contents">
        <section className="section section--alt" aria-labelledby="sv-title">
          <div className="wrap">
            <SectionHeading heading={constitution.heading} id="sv-title" />
            <div className="docs">
              {constitution.documents.map((document) => (
                <DocumentCard document={document} key={document.title} />
              ))}
            </div>
            <div className="keypoints">
              <h3 className="keypoints__title">
                {constitution.homeEditionsTitle}
              </h3>
              <EditionGrid />
            </div>
            <div className="keypoints">
              <h3 className="keypoints__title">
                {constitution.homeKeyPointsTitle}
              </h3>
              <KeyPoints />
            </div>
          </div>
        </section>
      </div>
    );
  }

  const [beforeEmphasis, afterEmphasis] =
    constitution.editionSection.text.split(
      constitution.editionSection.emphasis,
    );

  return (
    <div className="scope-constitution contents">
      <section className="section">
        <div className="wrap">
          <SectionHeading heading={constitution.documentsHeading} />
          <div className="docs">
            {constitution.documents.map((document) => (
              <DocumentCard document={document} key={document.title} />
            ))}
          </div>
        </div>
      </section>
      <section className="section section--alt" aria-labelledby="ed-title">
        <div className="wrap">
          <SectionHeading
            heading={constitution.editionsHeading}
            id="ed-title"
          />
          <EditionGrid />
        </div>
      </section>
      <section className="section" aria-labelledby="kp-title">
        <div className="wrap">
          <SectionHeading
            heading={constitution.keyPointsHeading}
            id="kp-title"
          />
          <KeyPoints />
        </div>
      </section>
      <section className="section section--alt">
        <div className="wrap two">
          <div>
            <SectionHeading heading={constitution.editionSection.heading} />
            <p>
              {beforeEmphasis}
              <strong>{constitution.editionSection.emphasis}</strong>
              {afterEmphasis}
            </p>
          </div>
          <div>
            <h3 className="tbl-title">{constitution.committee.title}</h3>
            <div className="table-scroll">
              <table>
                <thead>
                  <tr>
                    {constitution.committee.headers.map((header) => (
                      <th scope="col" key={header}>
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {constitution.committee.members.map((member) => (
                    <tr key={member.name}>
                      <td>
                        <strong>{member.name}</strong>
                      </td>
                      <td>{member.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="source-note">{constitution.committee.source}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
