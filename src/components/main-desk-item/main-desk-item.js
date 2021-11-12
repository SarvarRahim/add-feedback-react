import Task from "../task/task";
import "../main-desk-item/main-desk-item.scss"

function MainDeskItem() {
  return (
    <li className="main-desk__item">
      <Task></Task>
    </li>
  );
}

export default MainDeskItem;