import React, { useState } from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import house1 from "../../assets/houses/house1.jpg";
import farm1 from "../../assets/farms/farm1.jpg";
import flat1 from "../../assets/flats/flat1.jpg";
import hotel1 from "../../assets/hotel/hotel1.jpg";
import castle1 from "../../assets/castles/castle1.jpg";
import "./index.css";

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const st = ["Houses", "Farms", "Flats", "Hotel", "Castles"];

  return (
    <div className="carousel__container">
      <div className="image__container">
        <span
          onClick={() => {
            if (index !== 0) {
              setIndex(index - 1);
            }
          }}
        >
          <AiOutlineLeft style={{ cursor: "pointer" }} />
        </span>
        <img
          src={
            index === 0
              ? house1
              : index === 1
              ? farm1
              : index === 2
              ? flat1
              : index === 3
              ? hotel1
              : castle1
          }
          alt=""
        />
        <span
          onClick={() => {
            if (index !== 4) {
              setIndex(index + 1);
            }
          }}
        >
          <AiOutlineRight style={{ cursor: "pointer" }} />
        </span>
      </div>
      <h2 className="title">{st[index]}</h2>
      <h2>
        <GoPrimitiveDot
          onClick={() => setIndex(0)}
          style={{ cursor: "pointer" }}
        />
        <GoPrimitiveDot
          onClick={() => setIndex(1)}
          style={{ cursor: "pointer" }}
        />
        <GoPrimitiveDot
          onClick={() => setIndex(2)}
          style={{ cursor: "pointer" }}
        />
        <GoPrimitiveDot
          onClick={() => setIndex(3)}
          style={{ cursor: "pointer" }}
        />
        <GoPrimitiveDot
          onClick={() => setIndex(4)}
          style={{ cursor: "pointer" }}
        />
      </h2>
    </div>
  );
};

export default Carousel;
