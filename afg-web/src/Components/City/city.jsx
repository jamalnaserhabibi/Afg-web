import React from "react";
import "../City/city.css";
import { BsArrowLeftShort, BsArrowRightShort, BsDot } from "react-icons/bs";
import {} from "react-icons/bs";
// import { Carousel } from "antd";

import img2 from "../../Assets/city.jpg";

const city = () => {
  return (
    <section className="city section container">
      <div className="secContainer">
        <div className="secHeader flex">
          <div className="textDiv">
            <h1 className="secTitle">Popular Places</h1>
            <p className="secText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vitae
              eligendi magnam. Voluptatibus consequatur dolorem saepe eveniet
              harum quo assumenda minus nobis sunt officia? Voluptas expedita
              natus tempora corporis obcaecati!
            </p>
          </div>
          <div className="iconsDiv flex">
            <BsArrowLeftShort className="icon" />
            <BsArrowRightShort className="icon" />
          </div>
        </div>
        <div className="mainContent grid">
          <div className="singleDestination">
            <div className="destImage">
              <img src={img2} alt="The Kabul" />
              <div className="overlaysInfo">
                <h3>Some Text</h3>
                <p>lorem ipsum dolor sit amet</p>
                <BsArrowRightShort className="icon" />
              </div>
            </div>
            <div className="destFooter">
              <div className="number">01</div>
              <div className="destText flex">
                <h6 className="text">KABUL</h6>
                <span className="flex">
                  <span>
                    <BsDot className="icon" />
                  </span>
                  Dot
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default city;
