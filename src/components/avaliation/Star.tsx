import React, { useState } from "react";
import "./index.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Star = () => {
  const [pressed, setPressed] = useState(false);
  const [pressed2, setPressed2] = useState(false);
  const [pressed3, setPressed3] = useState(false);
  const [pressed4, setPressed4] = useState(false);
  const [pressed5, setPressed5] = useState(false);
  const [value, setValue] = useState(0);

  return (
    <div className="main__container">
      <div className="star__container">
        <i
          onClick={() => {
            setPressed(true);
            setPressed2(false);
            setPressed3(false);
            setPressed4(false);
            setPressed5(false);
            setValue(1.0);
          }}
        >
          {pressed ? <AiFillStar /> : <AiOutlineStar />}
        </i>
        <i
          onClick={() => {
            setPressed(true);
            setPressed2(true);
            setPressed3(false);
            setPressed4(false);
            setPressed5(false);
            setValue(2);
          }}
        >
          {pressed2 && pressed ? <AiFillStar /> : <AiOutlineStar />}
        </i>
        <i
          onClick={() => {
            setPressed(true);
            setPressed2(true);
            setPressed3(true);
            setPressed4(false);
            setPressed5(false);
            setValue(3);
          }}
        >
          {pressed3 && pressed2 && pressed ? <AiFillStar /> : <AiOutlineStar />}
        </i>
        <i
          onClick={() => {
            setPressed(true);
            setPressed2(true);
            setPressed3(true);
            setPressed4(true);
            setPressed5(false);
            setValue(4);
          }}
        >
          {pressed4 && pressed3 && pressed2 && pressed ? (
            <AiFillStar />
          ) : (
            <AiOutlineStar />
          )}
        </i>
        <i
          onClick={() => {
            setPressed(true);
            setPressed2(true);
            setPressed3(true);
            setPressed4(true);
            setPressed5(true);
            setValue(5);
          }}
        >
          {pressed5 && pressed4 && pressed3 && pressed2 && pressed ? (
            <AiFillStar />
          ) : (
            <AiOutlineStar />
          )}
        </i>
      </div>
      <h5>{value}.0</h5>
    </div>
  );
};

export default Star;
