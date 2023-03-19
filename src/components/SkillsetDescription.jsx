import { Fragment } from "react";
import { convertMarkdownToJSX } from "../utils";

export default function SkillsetDescription({ level, title, descriptionText }) {
  let formattedTitle = title;
  if (title.includes("/")) {
    formattedTitle = title.split("/");
    formattedTitle.splice(
      1,
      0,
      <Fragment>
        <span>/</span>
        <br />
      </Fragment>
    );
  }

  return (
    <article className='article-skill flex space-between border-left'>
      <div className='description flow-sm'>
        <h1 className='description-title'>{formattedTitle}</h1>
      </div>
      <div className='description-data'>
        {/* <!-- SKILL LEVEL --> */}
        <SkillBar level={level} />
        <p className='skill-description'>
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
  return <div className='skill-bar'>{skillBarLevels}</div>;
}
