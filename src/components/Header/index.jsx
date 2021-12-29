import img1 from "../../images/cine.jpg";
import "./header.css";

const HeaderScreen = () => {
  return (
    <header className="header_box">
      <div className="header_background">
        <img src={img1} alt="" />
      </div>
      <div className="header_card">
        <h2 className="header_title">Matrix</h2>
        <p className="header_desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
          corrupti cumque consectetur quis qui neque blanditiis ipsum ipsa nulla
          dolorum amet, facere nihil debitis asperiores accusamus nam eum.
          Culpa, sint!
        </p>
        <div className="header_buttons">
          <button className="btn btn_login">Ingresar</button>
          <button className="btn btn_more">Ver detalles...</button>
        </div>
      </div>
    </header>
  );
};

export default HeaderScreen;