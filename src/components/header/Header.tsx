import React, { useState, useRef } from "react";
import "./index.css";
import { HiMenu } from "react-icons/hi";
import { BsXDiamond } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <section id={"header"}>
      <div className="header__container">
        <h1>
          <Link to={"/"} style={{ fontSize: "2.5rem" }}>
            Luxury Houses
          </Link>
        </h1>
        <a>
          <Link to={"/houses"}>Houses</Link>
        </a>
        <a>
          <Link to={"/farms"}>Farms</Link>
        </a>
        <a>
          <Link to={"/flats"}>Flats</Link>
        </a>
        <a>
          <Link to={"/hotels"}>Hotel</Link>
        </a>
        <a>
          <Link to={"/castles"}>Castles</Link>
        </a>
        <span onClick={() => setOpen(!open)}>
          <HiMenu />
        </span>
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
