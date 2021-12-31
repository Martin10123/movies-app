import React from "react";
import { AiOutlineHeart, AiFillMessage } from "react-icons/ai";
import img1 from "../../../images/wars.jpg";

import "./main.css";

const MainScreen = () => {
  return (
    <main className="main_box">
      <section className="main_section_info">
        <h1>Peliculas recomendadas</h1>
        <div className="main_card">
          <div className="main_img">
            <img src={img1} alt="img wars" />
          </div>
          <div className="main_card_info">
            <span className="main_span_info_date">
              <span className="main_date">12-junio-2021</span>
              <span className="main_svgs">
                <AiFillMessage className="svg" />
                <AiOutlineHeart className="svg" />
                {/* <AiFillHeart className="svg" /> */}
              </span>
            </span>
            <div className="main_description">
              <h3>Matrix</h3>
              <p className="main_title_movie">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
                ex provident, harum dignissimos, enim magnam porro ut
                temporibus, asperiores nostrum veritatis ea veniam fugiat quod
                fuga reprehenderit aperiam neque blanditiis.
              </p>

              <p className="main_btn_more">ver más...</p>
            </div>
          </div>
        </div>
      </section>
      <section className="main_section_info">
        <h1>Peliculas más recientes</h1>
        <div className="main_card">
          <div className="main_img">
            <img src={img1} alt="img wars" />
          </div>
          <div className="main_card_info">
            <span className="main_span_info_date">
              <span className="main_date">12-junio-2021</span>
              <span className="main_svgs">
                <AiFillMessage className="svg" />
                <AiOutlineHeart className="svg" />
                {/* <AiFillHeart className="svg" /> */}
              </span>
            </span>
            <div className="main_description">
              <h3>Matrix</h3>
              <p className="main_title_movie">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
                ex provident, harum dignissimos, enim magnam porro ut
                temporibus, asperiores nostrum veritatis ea veniam fugiat quod
                fuga reprehenderit aperiam neque blanditiis.
              </p>

              <p className="btn_more">ver más...</p>
            </div>
          </div>
        </div>
      </section>
      <section className="main_section_info">
        <h1>Peliculas en estrenos</h1>
        <div className="main_card">
          <div className="main_img">
            <img src={img1} alt="img wars" />
          </div>
          <div className="main_card_info">
            <span className="main_span_info_date">
              <span className="main_date">12-junio-2021</span>
              <span className="main_svgs">
                <AiFillMessage className="svg" />
                <AiOutlineHeart className="svg" />
                {/* <AiFillHeart className="svg" /> */}
              </span>
            </span>
            <div className="main_description">
              <h3>Matrix</h3>
              <p className="main_title_movie">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
                ex provident, harum dignissimos, enim magnam porro ut
                temporibus, asperiores nostrum veritatis ea veniam fugiat quod
                fuga reprehenderit aperiam neque blanditiis.
              </p>

              <p className="btn_more">ver más...</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainScreen;
