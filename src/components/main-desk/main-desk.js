import Header from "../header/header";
import MainDeskItem from "../main-desk-item/main-desk-item";
import "./main-desk.scss";
import "../main-desk/main-desk.scss"
function MainDesk(){
  return(
    <div className="main-desk">
      <Header></Header>
      <ul className="main-desk__list">
        <MainDeskItem />
      </ul>
    </div>

  )
}
export default MainDesk;