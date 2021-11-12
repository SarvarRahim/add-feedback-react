import "./button.scss";
function Button({classname, name}){
  return(
    <button className={classname}>{name}</button>
  )
}

export default Button;