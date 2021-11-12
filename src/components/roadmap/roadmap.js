import "./roadmap.scss";
function Roadmap(){
  return(
    <div className="roadmap">
      <div className="roadmap__header">
        <h2 className="roadmap__title">Roadmap</h2>
        <a className="roadmap__link" href="#">View</a>
      </div>

      <dl className="roadmap__list">
        <div className="roadmap__def-wrapper">
          <dt className="roadmap__def-title">Planned</dt>
          <dd className="roadmap__def">2</dd>
        </div>

        <div className="roadmap__def-wrapper">
          <dt className="roadmap__def-title">In-progress</dt>
          <dd className="roadmap__def">3</dd>
        </div>

        <div className="roadmap__def-wrapper">
          <dt className="roadmap__def-title">Live</dt>
          <dd className="roadmap__def">1</dd>
        </div>
      </dl>
    </div>

  )
}

export default Roadmap;