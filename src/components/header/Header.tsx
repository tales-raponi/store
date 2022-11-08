import React, { useState } from "react";
import "./index.css";
import { HiMenu } from "react-icons/hi";
import { BsXDiamond } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const width = window.innerWidth;

  console.log("Height: ", window.innerWidth);

  return (
    <section id={"header"}>
      <div className="header__container">
        {width < 600 ? null : (
          <h1 onClick={() => navigate("/")}>Luxury Houses</h1>
        )}
        <a onClick={() => navigate("/houses")}>Houses</a>
        <a onClick={() => navigate("/farms")}>Farms</a>
        <a onClick={() => navigate("/flats")}>Flats</a>
        <a onClick={() => navigate("/hotels")}>Hotel</a>
        <a onClick={() => navigate("/castles")}>Castles</a>
        <a onClick={() => setOpen(!open)}>
          <HiMenu />
        </a>
      </div>
      {open == true ? (
        <ul className="dropdown__container">
          <li>
            <a href=""> Find a Property</a>
          </li>
          <li>
            <a href="">Magazine</a>{" "}
          </li>
          <li>
            <a
              href="https://generator.lorem-ipsum.info/terms-and-conditions"
              target={"_blank"}
            >
              Terms and Conditions
            </a>
          </li>
          <li>
            <a href="">Create an Alert</a>{" "}
          </li>
          <li>
            <a href="">Become a Advertiser</a>{" "}
          </li>
          <li>
            <a href="">About Us</a>{" "}
          </li>
          <div className="h5__container">
            <li>
              <h5>
                <BsXDiamond /> For Professionals
              </h5>
            </li>
            <li>
              <h5>
                <BsXDiamond /> Contact Us
              </h5>
            </li>
          </div>
        </ul>
      ) : null}
    </section>
  );
};

export default Header;
