import Button from "../button/button";
import "./filter.scss";
function Filter() {
  return (
    <div className="filter">
      <div className="filter__content">
        <ul className="filter__list">
          <li className="filter__item">
            <Button classname={"btn--filter"} name={"All"}></Button>
          </li>
          <li className="filter__item">
            <Button classname={"btn--filter"} name={"UI"}></Button>
          </li>
          <li className="filter__item">
            <Button classname={"btn--filter"} name={"UX"}></Button>
          </li>
          <li className="filter__item">
            <Button classname={"btn--filter"} name={"Enhancement"}></Button>
          </li>
          <li className="filter__item">
            <Button classname={"btn--filter"} name={"Bug"}></Button>
          </li>
          <li className="filter__item">
            <Button classname={"btn--filter"} name={"Feature"}></Button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Filter;