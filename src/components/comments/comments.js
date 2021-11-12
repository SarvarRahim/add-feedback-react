import MainDeskItem from "../main-desk-item/main-desk-item";
import Button from "../button/button";
import "../button/button.scss";
import "../comments/comments.scss";
import AuthorFirst from "../../assets/img/author-comments-first.png"
import AuthorSecond from "../../assets/img/author-comments-second.png"
import AuthorThirt from "../../assets/img/author-repyed-anne.png";

function Comments() {
  return (
    <>
      <div className="comments-header">
        <a className="comments-header__link" href="#">Go Back</a>
        <Button classname="btn--edit" name="Edit Feedback"/>
      </div>
      <MainDeskItem />

      <div className="comments">
        <span className="comments-count">4 Comments</span>
        <ul className="comments-list">
          <li className="comments-list__item">
            <div className="comments-list__top">
              <div className="comments-list__top-user">
                <img className="comments-list__top-img" src={AuthorFirst} alt="photo user" width={40} height={40} />
                <div className="comments-list__top-userinfo">
                  <h3 className="comments-list__top-name">Elijah Most</h3>
                  <span className="comments-list__top-nickname">@hexagon.bestagon</span>
                </div>
              </div>
                <button className="comments-list__reply" type="button">Reply</button>
            </div>
            <p className="comments-list__comment">Also, please allow styles to be applied based on system preferences. I would love to be able to browse Frontend Mentor in the evening after my device’s dark mode turns on without the bright background it currently has.</p>
          </li>
          <li className="comments-list__item">
            <div className="comments-list__top">
              <div className="comments-list__top-user">
                <img className="comments-list__top-img" src={AuthorSecond} alt="photo user" width={40} height={40} />
                <div className="comments-list__top-userinfo">
                  <h3 className="comments-list__top-name">James Skinner</h3>
                  <span className="comments-list__top-nickname">@hummingbird1</span>
                </div>
              </div>
                <button className="comments-list__reply" type="button">Reply</button>
            </div>
            <p className="comments-list__comment">Also, please allow styles to be applied based on system preferences. I would love to be able to browse Frontend Mentor in the evening after my device’s dark mode turns on without the bright background it currently has.</p>
          </li>
          <li className="comments-list__item comments-list__item--replyed">
            <div className="comments-list__top">
              <div className="comments-list__top-user">
                <img className="comments-list__top-img" src={AuthorThirt} alt="photo user" width={40} height={40} />
                <div className="comments-list__top-userinfo">
                  <h3 className="comments-list__top-name">Anne Valentine </h3>
                  <span className="comments-list__top-nickname">@annev1990</span>
                </div>
              </div>
                <button className="comments-list__reply" type="button">Reply</button>
            </div>
            <p className="comments-list__comment"><span className="comments-list__replyed-name">@hummingbird1</span>While waiting for dark mode, there are browser extensions that will also do the job. Search for "dark theme” followed by your browser. There might be a need to turn off the extension for sites with naturally black backgrounds though.</p>
          </li>
          <li className="comments-list__item comments-list__item--replyed">
            <div className="comments-list__top">
              <div className="comments-list__top-user">
                <img className="comments-list__top-img" src={AuthorFirst} alt="photo user" width={40} height={40} />
                <div className="comments-list__top-userinfo">
                  <h3 className="comments-list__top-name">Ryan Welles</h3>
                  <span className="comments-list__top-nickname">@voyager.344</span>
                </div>
              </div>
                <button className="comments-list__reply" type="button">Reply</button>
            </div>
            <p className="comments-list__comment"><span className="comments-list__replyed-name">@annev1990</span>Good point! Using any kind of style extension is great and can be highly customizable, like the ability to change contrast and brightness. I'd prefer not to use one of such extensions, however, for security and privacy reasons.</p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Comments;