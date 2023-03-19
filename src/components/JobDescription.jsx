export default function JobDescription({ title, duties, period, place }) {
  return (
    <article className="article-work-experience border-left flex space-between">
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
