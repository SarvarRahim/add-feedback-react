import Filter from "../filter/filter";
import Logo from "../logo/Logo";
import Roadmap from "../roadmap/roadmap";
import "./info-desk.scss";

function InfoDesk(){
  return (
    <div className="info-desk">
      <Logo></Logo>
      <Filter></Filter>
      <Roadmap></Roadmap>
    </div>
  )
}

export default InfoDesk;