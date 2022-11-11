import React from "react";
import "./index.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer>
      <a href="#" className="footer__logo">
        Produced by Tales Raponi
      </a>

      <ul className="permalinks">
        <li>
          <a onClick={() => navigate("/")} href={"#"}>
            Home
          </a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/tales-raponi-361a61143/"
          target={"_blank"}
        >
          <BsLinkedin />
        </a>
        <a href="https://github.com/tales-raponi" target={"_blank"}>
          <FaGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
