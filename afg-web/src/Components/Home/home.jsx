import React from "react";
import "../Home/home.css";

const Home = () => {
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
    </section>
  );
};

export default Home;
