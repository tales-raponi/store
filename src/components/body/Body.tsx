import React from "react";
import "./index.css";
import house1 from "../../assets/house1.jpg";
import { BiArea } from "react-icons/bi";
import { MdOutlineBedroomParent } from "react-icons/md";

const Body = () => {
  return (
    <section id={"houses"} className={"body__container"}>
      <div className="title__container">
        <h1>More then 40 Luxury Houses</h1>
      </div>
      <div className="house__container">
        <div className="img__container">
          <img src={house1} alt="" />
        </div>
        <div className="house-prop__container">
          <h5>
            <BiArea fontSize={"1rem"} />
            320 m²
          </h5>
          <h5>
            <MdOutlineBedroomParent fontSize={"1rem"} />2 main rooms
          </h5>
        </div>

        <div className="price__container">
          <span>$ 1.000.000,00</span>
        </div>
        <div className="description__container"></div>
      </div>
    </section>
  );
};

export default Body;
