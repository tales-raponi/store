import React, { useState, useRef } from "react";
import "./index.css";
import { HiMenu } from "react-icons/hi";
import { BsXDiamond } from "react-icons/bs";

const Header = () => {
  const [open, setOpen] = useState(false);
  const nodeRef = useRef(null);

  return (
    <section id={"header"}>
      <div className="header__container">
        <h1>Luxury Houses</h1>
        <a href="#houses">Houses</a>
        <a href="#farms">Farms</a>
        <a href="#flats">Flats</a>
        <a href="#hotel">Hotel</a>
        <a href="#castles">Castles</a>
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
            <a href="https://generator.lorem-ipsum.info/terms-and-conditions">
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