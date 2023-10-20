import EducationDescription from "./components/EducationDescription";
import JobDescription from "./components/JobDescription";
import SkillsetDescription from "./components/SkillsetDescription";
import PerfonalInformationBox from "./components/PersonalInformationBox";
import data from "./data.json";
import { Fragment, useState } from "react";
import ColorPicker from "./components/ColorPicker";
import { translateIntoPortuguese } from "./utils";

export default function () {
  const [profileDescriptionContent, setProfileDescriptionContent] = useState(
    data.profileDescription
  );

  const [showColorPicker, setShowColorPicker] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  async function translate() {
    const translation = await translateIntoPortuguese(data.profileDescription);
    setProfileDescriptionContent(translation);
  }

  return (
    <Fragment>
      {showColorPicker && (
        <div className='settings-container'>
          <p>Pick a main color</p>
          <ColorPicker />
        </div>
      )}
      <main className='overflow-hidden main-container'>
        <header className='main-header flex space-between items-center content-container'>
          <div className='flex space-beween items-center'>
            <div className='header-image-container flex centered-items'>
              <img
                className='header-image'
                src='/jonas.png'
                width={100}
                alt=''
              />
            </div>
            <div className='header-title flow-sm'>
              <div className='gradient-text'>
                <h1>Max Jonas Gripa</h1>
              </div>
              <h2 className='line-height'>
                Administrative Assistant at RFB and software development
                enthusiast
              </h2>
            </div>
          </div>
          <PerfonalInformationBox
            {...data.personalInformation}
            classProp='header-info info-box'
          />
        </header>
        <div className='sections-container'>
          <section className='content-container section-summary'>
            <div>
              <h1 className='section-title'>Profile</h1>
              {/* <button onClick={translate}>Translate</button> */}
              <div className='content flex space-between items-start'>
                <p className='no-border profile-description'>
                  {profileDescriptionContent}
                </p>
                <div className='skill-box info-box border-left'>
                  <section className='flow-md'>
                    <div className='skill-group flow-xsm'>
                      <h2 className='upper-condensed skill-group-title'>
                        Languages
                      </h2>
                      <p className='skill-name-container'>
                        <span className='skill-name inline-block'>
                          Portuguese
                        </span>
                        <span className='skill-level-tag inline-flex centered-items'>
                          Native
                        </span>{" "}
                      </p>
                      <p className='skill-name-container'>
                        <span className='skill-name inline-block'>English</span>
                        <span className='skill-level-tag inline-flex centered-items'>
                          Advanced
                        </span>{" "}
                      </p>
                      <p className='skill-name-container'>
                        <span className='skill-name inline-block'>Spanish</span>
                        <span className='skill-level-tag inline-flex centered-items'>
                          Intermediate
                        </span>{" "}
                      </p>
                      <p className='skill-name-container'>
                        <span className='skill-name inline-block'>French</span>
                        <span className='skill-level-tag inline-flex centered-items'>
                          Basic
                        </span>{" "}
                      </p>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </section>
          <section className='content-container section-work-experience flow-lg'>
            <h1 className='section-title'>Employment history</h1>
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
          <section className='content-container section-work-experience flow-lg no-break-after'>
            <h1 className='section-title'>Education</h1>
            {data.education.map((item, index) => (
              <EducationDescription
                degree={item.degreeTitle}
                institutionName={item.institutionName}
                period={item.period}
                key={item.degreeTitle}
              />
            ))}
          </section>
          {/* <!-- ********** SKILLS ********** --> */}
          <section className='content-container section-skills flow-lg'>
            <h1 className='section-title'>Hard Skills</h1>
            <div className='soft-skills-container'></div>
            {data.skills.map((skill) => {
              return (
                <SkillsetDescription
                  showFullDescription={false}
                  level={skill.level}
                  title={skill.label}
                  descriptionText={skill.description}
                  omit={skill.omit}
                  key={skill.label}
                />
              );
            })}
          </section>
          <div className='metadata'>
            Desenvolvedor e funcionário público apaixonado com uma década de
            experiência em diversas tecnologias web, pronto para fazer a
            transição para a área de TI e desenvolvimento de software. Aprendo
            rápido, sou um solucionador de problemas engenhoso e um entusiasta
            do crescimento comunicativo e orientado para as pessoas.
            Notavelmente, desenvolvi um aplicativo móvel para uma importante
            plataforma de e-commerce (Estrela 10) e continuo trabalhando em
            projetos web e móveis interessantes, utilizando tecnologias como
            HTML, CSS, JavaScript, Node.js, React Native, plataformas em nuvem
            (GCP) e integração de aprendizado de máquina. Idiomas: português,
            inglês, espanhol, francês. Educação: Tecnólogo em Análise e
            Desenvolvimento de Sistemas, Tecnólogo em Gestão Financeira, Técnico
            em Informática.
          </div>

          {/* ********** ABOUT ********** */}
          {/* <section className="content-container section-about flow-lg">
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
        </section> */}
          {showAbout && (
            <section className='content-container section-about flow-sm faded-text'>
              <p>This CV was built using React.js</p>
              <p>
                Access the online version at{" "}
                <a href='https://cv-builder-maxjonas2.vercel.app'>
                  max-jonas-cv.vercel.app
                </a>{" "}
                and GitHub repo at{" "}
                <a href='https://www.github.com/maxjonas2/cv-builder'>
                  github.com/maxjonas2/cv-builder
                </a>
              </p>
            </section>
          )}
        </div>
      </main>
    </Fragment>
  );
}
