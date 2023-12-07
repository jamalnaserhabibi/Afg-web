import React from "react";
import "../Home/home.css";
import { Carousel } from "antd";
import img2 from "../../Assets/bgimage.jpg";
import img3 from "../../Assets/city2.jpg";
const Home = () => {
  return (
    <section className="home">
      <div className="secContatiner container">
        <div id="title" className="homeText">
          <h1 className="title">Afghanistan | The Unexplored</h1>
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
