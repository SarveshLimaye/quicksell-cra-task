import React, { useState } from "react";
import "./Navbar.css";
import { GiSettingsKnobs } from "react-icons/gi";
import { AiOutlineDown } from "react-icons/ai";

export default function Navbar({ getShow }) {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
    getShow(!show);
  };

  return (
    <>
      <div className="navbar">
        <button className="display-btn" onClick={handleClick}>
          <div className="icon-div">
            <GiSettingsKnobs className="giicon" />
            <span className="display-text">Display</span>
            <AiOutlineDown className="down-arrow" />
          </div>
        </button>
      </div>
    </>
  );
}
