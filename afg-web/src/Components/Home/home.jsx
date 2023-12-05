import React from "react";
import "../Home/home.css";
import { Carousel } from "antd";

const Home = () => {
  // const contentStyle = {
  //   height: "160px",
  //   color: "#fff",
  //   lineHeight: "160px",
  //   textAlign: "center",
  //   background: "#364d79",
  // };

  return (
    <section className="home">
      <div className="secContatiner container">
        <div className="homeText">
          <h1 className="title">Afghanistan | The Unexplored</h1>
          <p className="subTitle">
            Unveiling the Rich Diversity of Culture, Landscapes, and Stories Yet
            to be Discovered
          </p>
          <button className="btn">
            <a href="#">Explore Now!</a>
          </button>
        </div>
      </div>

      <div className="homeCard grid">
        <Carousel>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Home;
