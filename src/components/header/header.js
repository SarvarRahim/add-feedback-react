import Button from "../button/button";
import "../button/button.scss";
import Sort from "../sort/sort";
import "./header.scss";
function Header(){
  return (
    <div className="header">
      <div className="header__content">
        <p className="header__suggestions"><span className="header__suggestions-counter">6</span>Suggestions</p>
        <Sort/>
        <Button classname="btn--add header__btn" name="+Add Feedback"></Button>
      </div>
    </div>
  )
}
export default Header;