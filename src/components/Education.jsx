import education from "../data/education";

export default function Education() {
  return (
    <section className="education" id="education">
      <div className="container">

        <h2 className="section-title">
          Education
        </h2>

        <p className="section-subtitle">
          My academic journey and qualifications.
        </p>

        <div className="timeline">

          {education.map((item) => (
            <div className="timeline-card" key={item.id}>

              <span className="timeline-year">
                {item.year}
              </span>

              <h3>{item.degree}</h3>

              <h4>{item.college}</h4>

              <p>{item.description}</p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}