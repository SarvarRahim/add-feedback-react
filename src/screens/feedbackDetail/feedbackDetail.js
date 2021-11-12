import Button from "../../components/button/button";
import Task from "../../components/task/task";
import Comment from "../../components/comment/comment"
import "./feedbackDetail.scss";

function FeedbackDetail (){
  return(
    <div className="feedback-detail">
      <div className="feedback-detail__container">
        <div className="feedback-detail__header">
          <a className="feedback-detail__link" href="#">Go back</a>
          <Button classname={"btn--edit"} name={"Edit Feedback"}></Button>
        </div>

        <Task classname="task-detail"></Task>

        <div className="feedback-detail__comments">
          <div className="feedback-detail__comments-wrapper">
            <h2 className="feedback-detail__title"><span className="feedback-detail__comments-quantity">4</span>Comments</h2>
            
            <ul className="feedback-detail__comments-list">
              <li className="feedback-detail__comments-item">
                <Comment classname="comment">
                </Comment>
              </li>
              
              <li className="feedback-detail__comments-item">
                <Comment classname="comment"></Comment>
                <Comment classname="comment comment--reply"></Comment>
                <Comment classname="comment comment--reply"></Comment>
              </li>
            </ul>
          </div>
        </div>

        <div className="feedback-detail__add-comment">
          <h2 className="feedback-detail__add-comment__title">Add Comment</h2>
          <form className="feedback-detail__form" action="https://echo.htmlacademy.ru" method="POST">
            <input className="feedback-detail__input" type="text" name="comment" placeholder="Type your comment here"/>
            <Button classname="btn--add" name="Post Comment"></Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default FeedbackDetail;