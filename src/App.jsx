import { useEffect } from "react";
import data from "./data.json";
import { convertMarkdownToJSX } from "./utils";

export default function () {
  return (
    <main className="overflow-hidden main-container">
      <header className="main-header flex space-between items-center content-container">
        <div className="flex space-beween items-start">
          <div className="header-image-container flex centered-items">
            <img className="header-image" src="/jonas.png" width={120} alt="" />
          </div>
          <div className="header-title">
            <div className="gradient-text">
              <h1>Max Jonas Chu</h1>
            </div>
            <h2>
              Administrative Assistant at RFB and software development
              enthusiast
            </h2>
          </div>
        </div>
        <div className="header-info">
          <p>Porto Alegre, Rio Grande do Sul</p>
          <p>(51) 99988-8483</p>
          <p>
            <a href="mailto:maxjonas2@hotmail.com">maxjonas2@hotmail.com</a>
          </p>
        </div>
      </header>
      <section className="content-container section-summary">
        <h1 className="section-title">Profile</h1>
        <p className="no-border">
          Dedicated, self-motivated government worker currently looking to make
          a permanent move into software development. I have a considerable
          amount of knowledge in a variety of web technologies, which I have
          been using, practicing and perfecting for the last decade. As a keen,
          fast and resourceful learner, I can quickly pick up and make use of
          new knowledge. A communicative challenge-seeker who's passionate about
          teaming up with people with a strong growth mindset I can both help
          and learn from.
        </p>
      </section>
      <section className="content-container section-work-experience flow-lg">
        <h1 className="section-title">Employment history</h1>
        {data.jobs.map((job) => (
          <JobDescription
            title={job.title}
            duties={job.duties}
            period={job.period}
            place={job.place}
            key={job.itle}
          />
        ))}
      </section>

      {/* <!-- ********** EDUCATION ********** --> */}

      <section className="content-container section-work-experience flow-lg">
        <h1 className="section-title">Education</h1>
        {data.education.map((item) => (
          <EducationDescription
            degree={item.degreeTitle}
            institutionName={item.institutionName}
            period={item.period}
            key={item.degreeTitle}
          />
        ))}
      </section>

      {/* <!-- ********** SKILLS ********** --> */}

      <section className="content-container section-skills flow-lg">
        <h1 className="section-title">Skills</h1>
        <div className="soft-skills-container"></div>
        {data.skills.map((skill) => {
          return (
            <SkillsetDescription
              level={skill.level}
              title={skill.label}
              descriptionText={skill.description}
              key={skill.label}
            />
          );
        })}
      </section>

      {/* ********** ABOUT ********** */}

      <section className="content-container section-about flow-lg">
        <h1 className="section-title">About me</h1>
        <p className="no-border">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
          asperiores. Ex corrupti aut asperiores laborum corporis beatae animi
          eius reprehenderit? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Deleniti quia quam facilis minima ab consequatur corporis
          asperiores vitae cumque nam. Eos nesciunt sint, iusto quae laborum
          soluta cum quibusdam accusantium.
        </p>
        <p>
          Portfolio{" "}
          <a taget="_blank" href="https://github.com/maxjonas2">
            here
          </a>
        </p>
      </section>
    </main>
  );
}

function matchAndCapture(regexp, text) {
  const matches = [];
  let match;
  while ((match = regexp.exec(text)) !== null) {
    matches.push(match[0]);
  }
  return matches;
}

function SkillsetDescription({ level, title, descriptionText }) {
  return (
    <article className="article-skill flex space-between">
      <div className="description flow-sm">
        <h1 className="description-title">{title}</h1>
      </div>
      <div className="description-data">
        {/* <!-- SKILL LEVEL --> */}
        <SkillBar level={level} />
        <p className="skill-description">
          {convertMarkdownToJSX(descriptionText)}
        </p>
      </div>
    </article>
  );
}

function SkillBar({ level }) {
  const skillBarLevels = [];
  for (let i = 0; i < 10; i++) {
    const classNameString =
      i < level ? "skill-bar-level filled" : "skill-bar-level";
    skillBarLevels[i] = <div className={classNameString} key={i}></div>;
  }
  return <div className="skill-bar">{skillBarLevels}</div>;
}

function JobDescription({ title, duties, period, place }) {
  return (
    <article className="article-work-experience flex space-between">
      <div className="description flow-sm">
        <h1 className="description-title">{title}</h1>
        <h2 className="description-place">{place}</h2>
        <p className="description-duties">{duties}</p>
      </div>
      <div className="description-period hide-on-small-devices">
        <p>{period}</p>
      </div>
    </article>
  );
}

function EducationDescription({ degree, institutionName, period }) {
  return (
    <article className="article-work-experience flex space-between">
      <div className="description flow-sm">
        <h1 className="description-title">{degree}</h1>
        <h2 className="description-place">{institutionName}</h2>
        {/* <!-- <p className="description-duties">Finance and Budget Control</p> --> */}
      </div>
      <div className="description-period">
        <p>{period}</p>
      </div>
    </article>
  );
}
