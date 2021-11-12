import Button from "../../components/button/button";
import "./createFeedback.scss";
function CreateFeedback(){
  return(
    <div className="create-feedback">
      <a className="create-feedback__link" href="#">Go back</a>

      <form className="create-feedback__form" action="https://echo.htmlacademy.ru" method="POST">
        <h1 className="create-feedback__headline">Create New Feedback</h1>
        <div className="create-feedback__input-wrapper">
          <h2 className="create-feedback__title">Feedback Title</h2>
          <p className="create-feedback__desc">Add a short, descriptive headline</p>
          <input className="create-feedback__input" type="text" aria-label="add-headline" />
        </div>

        <div className="create-feedback__input-wrapper">
          <h2 className="create-feedback__title">Category</h2>
          <p className="create-feedback__desc">Choose a category for your feedback</p>
          <select className="create-feedback__input" name="category">
            <option value="Feature">Feature</option>
            <option value="UI">UI</option>
            <option value="UX">UX</option>
            <option value="Enhancement">Enhancement</option>
            <option value="Bug">Bug</option>
          </select>
        </div>

        <div className="create-feedback__input-wrapper">
          <h2 className="create-feedback__title">Feedback Detail</h2>
          <p className="create-feedback__desc">Include any specific comments on what should be improved, added, etc.</p>
          <textarea className="create-feedback__input" name="feedback-detail" cols="30" rows="10"></textarea>
        </div>

        <div className="create-feedback__btn-wrapper">
          <span className="create-feedback__btn">
          <Button classname="btn--cancel" name="Cancel"></Button>
          </span>
          <Button classname="btn--add" name="Add Feedback"></Button>
        </div>
      </form>
    </div>
  )
}

export default CreateFeedback;