import "./sort.scss";
function Sort(){
  return (
    <select className="sort">
      <option className="sort__option" value="most upvotes">Most Upvotes</option>
      <option className="sort__option" value="least upvotes">Least Upvotes</option>
      <option className="sort__option" value="most comments">Most Comments</option>
      <option className="sort__option" value="least comments">Least Comments</option>
    </select>
  )
}

export default Sort;