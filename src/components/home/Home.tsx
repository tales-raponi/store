import React from "react";
import "./home.css";
import { GiImperialCrown } from "react-icons/gi";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import video from "../../assets/videos/video1.mp4";
import Carousel from "../carousel/Carousel";

const Home = () => {
  return (
    <div className="home__main__container">
      <div className="home__title__container">
        <h1>
          <GiImperialCrown />
          Luxury Houses
        </h1>
        <h2>A new concept of luxe houses.</h2>
        <a href="#about">
          <IoMdArrowDropdownCircle />
        </a>
        <video autoPlay muted loop className="video">
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className="home__description__container" id={"about"}>
        <h1>Five home styles, choose your own</h1>
        <h2
          className="divider line__container one__line"
          contentEditable={true}
        >
          <GiImperialCrown color={"#916217"} size={"1rem"} />
        </h2>
        <Carousel />
      </div>
    </div>
  );
};

export default Home;
