import Upvote from "../upvote/upvote";
import "./task.scss"
function Task(){
  return (
    <div className="task">
      <div className="task__wrapper">
          <Upvote></Upvote>
          <div className="task__content">
            <h3 className="task__title">Add tags for solutions</h3>
            <p className="task__txt">Easier to search for solutions based on a specific stack.</p>
            <span className="task__hashtag">Enhancement</span>
          </div>
          <span className="task__comment">2</span>
      </div>
    </div>
  )
}
export default Task;