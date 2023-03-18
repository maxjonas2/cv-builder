import { useEffect } from "react";
import data from "./data.json";
import { convertMarkdownToJSX } from "./utils";

export default function () {
  return (
    <main className="overflow-hidden main-container">
      <header className="main-header flex space-between items-center content-container">
        <div className="flex space-beween items-start">
          <div className="header-image-container flex centered-items">
            <img className="header-image" src="/jonas.png" width={140} alt="" />
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
        <h1 className="section-title">Summary</h1>
        <p className="no-border">
          As a keen, fast and resourceful learner, I can quickly pick up new
          technologies/frameworks and deploy applications which use them to the
          best of their potential. I also have excellent communication skills
          and fluent English, which enables me to easily establish rapport and
          synergy with those around me, no matter where they are from. For this
          reason, I believe I would be an excellent fit for this company, as I
          also thrive as a team member. Cliche as it may sound, I truly am
          challenge-driven.
        </p>
      </section>
      <section className="content-container section-work-experience flow-lg">
        <h1 className="section-title">Work Experience</h1>
        {data.jobs.map((job) => (
          <JobDescription
            title={job.title}
            duties={job.duties}
            period={job.period}
            key={job.itle}
          />
        ))}
      </section>

      {/* <!-- ********** EDUCATION ********** --> */}

      <section className="content-container section-work-experience flow-lg">
        <h1 className="section-title">Education</h1>
        <article className="article-work-experience flex space-between">
          <div className="description flow-sm">
            <h1 className="description-title">Financial Management</h1>
            <h2 className="description-place">
              Universidade do Vale do Rio dos Sinos
            </h2>
            {/* <!-- <p className="description-duties">Finance and Budget Control</p> --> */}
          </div>
          <div className="description-period">
            <p>01/2016 - 02/2022</p>
          </div>
        </article>

        <article className="article-work-experience flex space-between">
          <div className="description flow-sm">
            <h1 className="description-title">IT Technician Coursek</h1>
            <h2 className="description-place">
              Instituto Pró-Universidade Canoense
            </h2>
            {/* <!-- <p className="description-duties">Sales and Customer Service</p> --> */}
          </div>
          <div className="description-period">
            <p>01/2009 - 02/2010</p>
          </div>
        </article>

        <article className="article-work-experience flex space-between">
          <div className="description flow-sm">
            <h1 className="description-title">
              Análise e Desenvolvimento de Sistemas
            </h1>
            <h2 className="description-place">
              Universidade do Vale do Rio dos Sinos
            </h2>
            {/* <!-- <p className="description-duties">Assistance in warehouse duties</p> --> */}
          </div>
          <div className="description-period">
            <p>01/2023 - In Progress</p>
          </div>
        </article>
      </section>

      {/* <!-- ********** SKILLS ********** --> */}

      <section className="content-container section-skills flow-lg">
        <h1 className="section-title">Skills</h1>
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
        <h1 className="description-title bold">{title}</h1>
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
