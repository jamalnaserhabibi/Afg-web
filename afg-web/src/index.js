import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import Navbar from "./Components/Navbar/NavBar";
import Home from "./Components/Home/home";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Navbar />
    <Home />
  </>
);
