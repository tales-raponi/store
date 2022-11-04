import React from "react";
import { GoPrimitiveDot } from "react-icons/go";
import house1 from "../../assets/house1.jpg";
import "./index.css";

const Carousel: React.FC<PropTypes> = ({}) => {
  return (
    <div className="carousel__container">
      <div className="image__container">
        <img src={house1} alt="" />
      </div>
      <h2 className="title">Houses</h2>
      <h2>
        <GoPrimitiveDot />
        <GoPrimitiveDot />
        <GoPrimitiveDot />
        <GoPrimitiveDot />
        <GoPrimitiveDot />
      </h2>
    </div>
  );
};

interface PropTypes {}

export default Carousel;
