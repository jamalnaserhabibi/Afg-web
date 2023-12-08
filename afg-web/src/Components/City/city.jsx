import React, { useEffect } from "react";
import "../City/city.css";
import "../../App.css";
import { FaUserAlt } from "react-icons/fa";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";
import {} from "react-icons/bs";
// import { Carousel } from "antd";

import kabul from "../../Assets/masij.jpg";
import balkh from "../../Assets/balkh.jpg";
import herat from "../../Assets/bamyan.jpg";
import kandahar from "../../Assets/river.jpg";

const Data = [
  {
    id: 1,
    img: kabul,
    location: "Kabul ",
    desTitle: "Kabul City",
    des: "The largest city of Afghanistan, major center for politics, culture, and commerce. Serves as the economic and political heart of the country.",
    grade: "7.2M",
  },

  {
    id: 2,
    img: herat,
    location: "Herat",
    desTitle: "Herat City",
    des: "Known for its rich history and architectural heritage, Herat is the third-largest city in Afghanistan. It has a vibrant cultural scene",
    grade: "3.1M",
  },

  {
    id: 3,
    img: balkh,
    location: "Balkh",
    desTitle: "Mazar-i-Sharif City",
    des: "Mazar-i-Sharif is renowned for the Blue Mosque (Mazar-i-Sharif Shrine), making it a significant religious and cultural destination",
    grade: "2.5M",
  },

  {
    id: 4,
    img: kandahar,
    location: "Kandahar",
    desTitle: "Qandahar City",
    des: "The second-largest city, holds historical and cultural importance. It has played a significant role in Afghan history",
    grade: "2.3M",
  },
];

const city = () => {
  Aos.init({ duration: 1000 }, []);
  return (
    <section className="city section container">
      <div className="secContainer">
        <div className="secHeader flex">
          <div data-aos="fade-up" className="textDiv">
            <h1 className="secTitle">Popular Cities</h1>
            <p className="secText">
              In Afghanistan, cities aren't just places; they're stories etched
              with emotion. Some hold the pulse of modern life, others cradle
              ancient tales. Each city whispers its unique history, weaving
              together a tapestry that resonates with the heart of Afghanistan's
              past and present.
            </p>
          </div>
          <div data-aos="fade-up" className="iconsDiv flex">
            {/* <BsArrowLeftShort className="icon" />
            <BsArrowRightShort className="icon" /> */}
          </div>
        </div>
        <div className="mainContent grid">
          {Data.map(({ id, img, location, grade, desTitle, des }) => {
            return (
              <div data-aos="fade-up" className="singleDestination">
                <div className="destImage">
                  <img src={img} alt="The Kabul" />
                  <div className="overlaysInfo">
                    <h3>{desTitle}</h3>
                    <p>{des}</p>
                    <BsArrowRightShort className="icon" />
                  </div>
                </div>
                <div className="destFooter">
                  <div className="number">0{id}</div>
                  <div className="destText flex">
                    <h6 className="text">{location}</h6>
                    <span className="flex">
                      <span className="icon">
                        <FaUserAlt />
                      </span>
                      <span>{grade}</span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default city;
