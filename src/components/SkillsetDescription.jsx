import { Fragment } from "react";
import { convertMarkdownToJSX } from "../utils";

export default function SkillsetDescription({
  level,
  title,
  descriptionText,
  showFullDescription,
  omit,
}) {
  let formattedTitle = title;
  if (title.includes("/")) {
    formattedTitle = title.split("/");
    formattedTitle.splice(
      1,
      0,
      <Fragment>
        <span>/</span>
        {/* <br /> */}
      </Fragment>
    );
  }

  const mainText = convertMarkdownToJSX(descriptionText);

  if (omit) return null;

  return (
    <article className='article-skill flex space-between border-left'>
      <div className='description flow-sm'>
        <h1 className='description-title'>{formattedTitle}</h1>
      </div>
      <div className='description-data'>
        {/* <!-- SKILL LEVEL --> */}
        {/* <SkillBar level={level} /> */}
        {showFullDescription && <p className='skill-description'>{mainText}</p>}
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
