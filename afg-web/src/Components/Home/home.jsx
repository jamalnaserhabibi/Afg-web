import React from "react";
import "../Home/home.css";
import { Carousel } from "antd";
import img2 from "../../Assets/bgimage.jpg";
import img3 from "../../Assets/city2.jpg";

import Aos from "aos";
import "aos/dist/aos.css";
const Home = () => {
  Aos.init({ duration: 2000, delay: 1000 }, []);

  return (
    <section className="home">
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
            <a href="#">Explore Now!</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
