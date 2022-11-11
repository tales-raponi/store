import React from "react";
import { houses } from "../../domain/factories/houses";
import { BiArea } from "react-icons/bi";
import { MdOutlineBedroomParent } from "react-icons/md";
import Star from "../avaliation/Star";
import "./mindex.css";

const MHouse: React.FC<PropTypes> = ({
  description,
  area,
  image,
  price,
  rooms,
  type,
  index,
}) => {
  return (
    <div className="mhouse__container" key={index}>
      <div className="mimg__container">
        <img src={image} style={{ padding: "1rem" }} />
        <div className="mhouse-prop__container">
          <h5>
            <BiArea />
            {area} m²
          </h5>
          <h5>
            <MdOutlineBedroomParent />
            {rooms} main rooms
          </h5>
          <div className="mprice__container">
            <span>$ {price}</span>
          </div>
        </div>
      </div>
      <div className="mdescription__container">
        <h3>{type} Avaliation</h3>
        <Star />
        <h3>Description</h3>
        <h5>
          {description.length > 840 ? description.slice(0, 840) : description}
          <a style={{ color: "var(--color-bg)" }}>
            {description.length > 840 ? "...Read more" : null}
          </a>
        </h5>
      </div>
      <div className="mbtn from-center">Show {type}</div>
    </div>
  );
};

interface PropTypes {
  image: string;
  area: string;
  rooms: string;
  price: string;
  description: string;
  type: string;
  index: number;
}

export default MHouse;
