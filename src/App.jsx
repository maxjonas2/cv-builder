import EducationDescription from "./components/EducationDescription";
import JobDescription from "./components/JobDescription";
import SkillsetDescription from "./components/SkillsetDescription";
import PerfonalInformationBox from "./components/PersonalInformationBox";
import data from "./data.json";

export default function () {
  return (
    <main className='overflow-hidden main-container'>
      <header className='main-header flex space-between items-center content-container'>
        <div className='flex space-beween items-center'>
          <div className='header-image-container flex centered-items'>
            <img className='header-image' src='/jonas.png' width={100} alt='' />
          </div>
          <div className='header-title flow-sm'>
            <div className='gradient-text'>
              <h1>Max Jonas Chu</h1>
            </div>
            <h2>
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
      <section className='content-container section-summary'>
        <div>
          <h1 className='section-title'>Profile</h1>
          <div className='content flex space-between items-start'>
            <p className='no-border profile-description'>
              {data.profileDescription}
            </p>
            <div className='skill-box info-box border-left'>
              <section className='flow-md'>
                <div className='skill-group flow-xsm'>
                  <h2 className='upper-condensed skill-group-title'>
                    Languages
                  </h2>
                  <p className='skill-name-container'>
                    <span className='skill-name inline-block'>Portuguese</span>
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
                {/* <div className="skill-group flow-xsm">
                  <h2 className="upper-condensed skill-group-title">
                    Other skills
                  </h2>
                  <p>• Communication</p>
                  <p>• Team Work</p>
                  <p>• Critical Thinking</p>
                  <p>• Time Management</p>
                </div> */}
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

      <section className='content-container section-work-experience flow-lg break-after'>
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
        <h1 className='section-title'>Skills</h1>
        <div className='soft-skills-container'></div>
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
    </main>
  );
}
