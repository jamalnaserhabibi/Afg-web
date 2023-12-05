import React from "react";
import "../Home/home.css";
import { Carousel } from "antd";

const Home = () => {
  const contentStyle = {
    height: "40vh",
    color: "black",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };

  return (
    <section className="home">
      <div className="secContatiner container">
        <div className="homeText">
          <h1 className="title">Afghanistan | The Unexplored</h1>
          <p className="subTitle">
            Unveiling the Rich Diversity of History, Culture, Landscapes, and Stories Yet
            to be Discovered
          </p>
          <button className="btn">
            <a href="#">Explore Now!</a>
          </button>
        </div>
      </div>

      <div className="homeCard">
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>Afghanistannnn</h3>
        </div>
        <div>
          <h3 style={contentStyle}>Afghanistannnn</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>Afghanistannnn</h3>
        </div>
  </Carousel>
      </div>
    </section>
  );
};

export default Home;
