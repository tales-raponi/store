import React, { useState } from "react";
import "./index.css";
import { BiArea } from "react-icons/bi";
import { MdOutlineBedroomParent } from "react-icons/md";
import Star from "../avaliation/Star";
import { castles } from "../../domain/factories/castles";
import { RiNumber1, RiNumber2 } from "react-icons/ri";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Castle = () => {
  const [pagination, setPagination] = useState(0);

  return (
    <section className={"body__container"}>
      <div className="title__container">
        <h1>More then 40 Luxury Castles</h1>
      </div>
      {castles.map((prop, index) => {
        switch (pagination) {
          case 0:
            return index <= 2 ? (
              <>
                <div
                  className="castle__container"
                  key={index}
                  style={
                    index == 2
                      ? { borderStyle: "none" }
                      : { borderStyle: "solid" }
                  }
                >
                  <div className="img__container">
                    <img src={prop.image} alt="" />
                    <div className="btn from-center">Show Castle</div>
                  </div>
                  <div className="castle-prop__container">
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
                    <h3>Castle Avaliation</h3>
                    <Star />
                    <h3>Description</h3>
                    <h5>
                      {prop.description.length > 840
                        ? prop.description.slice(0, 840)
                        : prop.description}
                      <a>
                        {prop.description.length > 840 ? "...Read more" : null}
                      </a>
                    </h5>
                  </div>
                </div>
                {index == 2 ? (
                  <div className="pagination__container">
                    <span>
                      <AiOutlineLeft />
                    </span>
                    <a onClick={() => setPagination(0)} href="#">
                      <RiNumber1 />
                    </a>
                    <a onClick={() => setPagination(1)} href="#">
                      <RiNumber2 />
                    </a>
                    <span>
                      <AiOutlineRight />
                    </span>
                  </div>
                ) : null}
              </>
            ) : null;
            break;

          case 1:
            return index > 2 ? (
              <>
                <div
                  className="castle__container"
                  key={index}
                  style={
                    index > 2
                      ? { borderStyle: "none" }
                      : { borderStyle: "solid" }
                  }
                >
                  <div className="img__container">
                    <img src={prop.image} alt="" />
                    <div className="btn from-center">Show Castle</div>
                  </div>
                  <div className="castle-prop__container">
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
                    <h3>Castle Avaliation</h3>
                    <Star />
                    <h3>Description</h3>
                    <h5>
                      {prop.description.length > 840
                        ? prop.description.slice(0, 840)
                        : prop.description}
                      <a>
                        {prop.description.length > 840 ? "...Read more" : null}
                      </a>
                    </h5>
                  </div>
                </div>
                {index == 5 ? (
                  <div className="pagination__container">
                    <span>
                      <AiOutlineLeft />
                    </span>
                    <a onClick={() => setPagination(0)} href="#">
                      <RiNumber1 />
                    </a>
                    <a onClick={() => setPagination(1)} href="#">
                      <RiNumber2 />
                    </a>
                    <span>
                      <AiOutlineRight />
                    </span>
                  </div>
                ) : null}
              </>
            ) : null;
            break;
        }
      })}
    </section>
  );
};

export default Castle;
