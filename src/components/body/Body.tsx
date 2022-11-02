import React from "react";
import "./index.css";
import { BiArea } from "react-icons/bi";
import { MdOutlineBedroomParent } from "react-icons/md";
import Star from "../avaliation/Star";
import { houses } from "../../domain/factories/houses";

const Body = () => {
  return (
    <section id={"houses"} className={"body__container"}>
      <div className="title__container">
        <h1>More then 40 Luxury Houses</h1>
      </div>
      {houses.map((prop) => {
        return (
          <div className="house__container">
            <div className="img__container">
              <img src={prop.image} alt="" />
              <div className="btn from-center">Show House</div>
            </div>
            <div className="house-prop__container">
              <h5>
                <BiArea fontSize={"1rem"} />
                {prop.area} m²
              </h5>
              <h5>
                <MdOutlineBedroomParent fontSize={"1rem"} />
                {prop.rooms} main rooms
              </h5>
            </div>
            <div className="price__container">
              <span>$ {prop.price}</span>
            </div>
            <div className="description__container">
              <h3>House Avaliation</h3>
              <Star />
              <h3>Description</h3>
              <h5>
                {prop.description.length > 840
                  ? prop.description.slice(0, 840)
                  : prop.description}
                <a>{prop.description.length > 840 ? "...Read more" : null}</a>
              </h5>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Body;
