import React from "react";
import "./index.css";
import { HiHome } from "react-icons/hi";

const Home = () => {
  return (
    <div className="home__container">
      <div className="header__container">
        <h1>Luxury Houses</h1>
        <HiHome />
        <a href="#houses">Houses</a>
        <a href="#farms">Farms</a>
        <a href="#flats">Flats</a>
        <a href="#hotel">Hotel</a>
        <a href="#castles">Castles</a>
      </div>
    </div>
  );
};

export default Home;
