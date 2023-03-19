export default function EducationDescription({
  degree,
  institutionName,
  period,
}) {
  return (
    <article className='article-work-experience border-left flex space-between'>
      <div className='description flow-sm'>
        <h1 className='description-title'>{degree}</h1>
        <h2 className='description-place'>{institutionName}</h2>
        {/* <!-- <p className="description-duties">Finance and Budget Control</p> --> */}
      </div>
      <div className='description-period'>
        <p>{period}</p>
      </div>
    </article>
  );
}
