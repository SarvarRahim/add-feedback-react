import Button from "../../components/button/button";
import "./editFeedback.scss";
function EditFeedback(){
  return(
    <div className="edit-feedback">
      <a className="edit-feedback__link" href="#">Go back</a>
      <form className="edit-feedback__form" action="https://echo.htmlacademy.ru" method="POST">
        <h1 className="edit-feedback__headline">Editing ‘Add a dark theme option’</h1>
        <div className="edit-feedback__input-wrapper">
          <h2 className="edit-feedback__title">Feedback Title</h2>
          <p className="edit-feedback__desc">Add a short, descriptive headline</p>
          <input className="edit-feedback__input" type="text" aria-label="add-headline" value="Please add a dark theme option"/>
        </div>

        <div className="edit-feedback__input-wrapper">
          <h2 className="edit-feedback__title">Category</h2>
          <p className="edit-feedback__desc">Choose a category for your feedback</p>
          <select className="edit-feedback__input" name="category">
            <option value="Feature">Feature</option>
            <option value="UI">UI</option>
            <option value="UX">UX</option>
            <option value="Enhancement">Enhancement</option>
            <option value="Bug">Bug</option>
          </select>
        </div>

        <div className="edit-feedback__input-wrapper">
          <h2 className="edit-feedback__title">Update Status</h2>
          <p className="edit-feedback__desc">Change feedback state</p>
          <select className="edit-feedback__input" name="category">
            <option value="Planned">Planned</option>
            <option value="In-progress">In-progress</option>
            <option value="Live">Live</option>
          </select>
        </div>

        <div className="edit-feedback__input-wrapper">
          <h2 className="edit-feedback__title">Feedback Detail</h2>
          <p className="edit-feedback__desc">Include any specific comments on what should be improved, added, etc.</p>
          <textarea className="edit-feedback__input" name="feedback-detail" cols="30" rows="10"></textarea>
        </div>

        <div className="edit-feedback__btn-wrapper">

          <Button classname="btn--delete" name="Delete"></Button>
          <span className="edit-feedback__btn">
          <Button classname="btn--cancel" name="Cancel"></Button>
          </span>
          <Button classname="btn--add" name="Add Feedback"></Button>
        </div>
      </form>
    </div>
  )
}

export default EditFeedback;