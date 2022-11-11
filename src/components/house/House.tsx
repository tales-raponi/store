import React, { useState } from "react";
import "./index.css";
import { BiArea } from "react-icons/bi";
import { MdOutlineBedroomParent } from "react-icons/md";
import Star from "../avaliation/Star";
import { houses } from "../../domain/factories/houses";
import { RiNumber1, RiNumber2 } from "react-icons/ri";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import MHouse from "./MHouse";

const House = () => {
  const [pagination, setPagination] = useState(0);
  const [fade, setFade] = useState("");
  const width = window.innerWidth;

  return (
    <section className={"body__container"}>
      <div className="title__container">
        <h1>More then 40 Luxury Houses</h1>
      </div>
      <>
        {width < 1024
          ? houses.map((prop, index) => {
              switch (pagination) {
                case 0:
                  return index <= 2 ? (
                    <>
                      <MHouse
                        image={prop.image}
                        area={prop.area}
                        rooms={prop.rooms}
                        price={prop.price}
                        description={prop.description}
                        index={index}
                        type={"House"}
                      />
                      {index == 2 ? (
                        <div
                          className="pagination__container"
                          style={{ marginTop: "4rem" }}
                        >
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
                      <MHouse
                        image={prop.image}
                        area={prop.area}
                        rooms={prop.rooms}
                        price={prop.price}
                        description={prop.description}
                        index={index}
                        type={"House"}
                      />
                      {index == 5 ? (
                        <div
                          className="pagination__container"
                          style={{ marginTop: "4rem" }}
                        >
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
            })
          : houses.map((prop, index) => {
              switch (pagination) {
                case 0:
                  return index <= 2 ? (
                    <>
                      <div
                        className="house__container"
                        key={index}
                        style={
                          index == 2
                            ? { borderStyle: "none" }
                            : { borderStyle: "solid" }
                        }
                      >
                        <div className="img__container">
                          <img src={prop.image} />
                          <div className="btn from-center">Show House</div>
                        </div>
                        <div className="price__container">
                          <span>$ {prop.price}</span>
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
                        <div className="description__container">
                          <h3>House Avaliation</h3>
                          <Star />
                          <h3>Description</h3>
                          <h5>
                            {prop.description.length > 840
                              ? prop.description.slice(0, 840)
                              : prop.description}
                            <a>
                              {prop.description.length > 840
                                ? "...Read more"
                                : null}
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
                        className="house__container"
                        key={index}
                        style={
                          index > 2
                            ? { borderStyle: "none" }
                            : { borderStyle: "solid" }
                        }
                      >
                        <div className="img__container">
                          <img src={prop.image} />
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
                            <a>
                              {prop.description.length > 840
                                ? "...Read more"
                                : null}
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
      </>
    </section>
  );
};

export default House;
