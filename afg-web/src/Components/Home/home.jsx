import React from "react";
import "../Home/home.css";
import { Carousel } from "antd";
import img2 from "../../Assets/bgimage.jpg";
import img3 from "../../Assets/city2.jpg";
import City from "..//City/city";

import Aos from "aos";
import "aos/dist/aos.css";
const Home = () => {
  Aos.init({ duration: 500, delay: 1000 }, []);

  return (
    <section id="home" className="home">
      <div data-aos="fade-up" className="secContatiner container">
        <div id="title" className="homeText">
          <h1 data-aos="fade-up" className="title">
            Afghanistan | The Unexplored
          </h1>
          <p className="subTitle">
            Unveiling the Rich Diversity of History, Culture, Landscapes, and
            Stories Yet to be Discovered
          </p>
          <button className="btn">
            <a href="#city">Explore Now!</a>
          </button>
        </div>
      </div>
      <span></span>
    </section>
  );
};

export default Home;
