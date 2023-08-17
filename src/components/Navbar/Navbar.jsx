import React, { useState } from "react";
import "./Navbar.css";
import { GiSettingsKnobs } from "react-icons/gi";
import { AiOutlineDown } from "react-icons/ai";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
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
      {show ? (
        <div className="display-modal">
          <div className="display-modal-content">
            <span className="display-modal-text">Grouping</span>
            <select className="display-options">
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className="display-modal-content">
            <span className="display-modal-text">Ordering</span>
            <select className="display-options">
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      ) : null}
    </>
  );
}
