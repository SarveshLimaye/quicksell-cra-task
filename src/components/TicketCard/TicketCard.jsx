import React from "react";
import "./TicketCard.css";
import { BsThreeDots, BsFillExclamationSquareFill } from "react-icons/bs";
import { GiNetworkBars } from "react-icons/gi";

import low_network from "../../assets/low_network.PNG";
import medium_network from "../../assets/medium_network.PNG";

export default function TicketCard({ ticket, group }) {
  console.log(group);
  return (
    <div className="card">
      <span className="card-content">{ticket.id}</span>
      {group.slice(0, 3) !== "usr" ? (
        <img
          src={
            "https://tricky-photoshop.com/wp-content/uploads/2017/08/final-1.png"
          }
          alt="round"
          className="card-image"
        />
      ) : null}
      <p className="card-title">{ticket.title.slice(0, 50)}</p>

      <div className="card-footer">
        <div>
          {ticket.priority === 0 ? (
            <BsThreeDots className="card-status" />
          ) : null}
          {ticket.priority === 1 ? (
            <img src={low_network} className="card-status" alt="low" />
          ) : null}
          {ticket.priority === 2 ? (
            <img src={medium_network} className="card-status" alt="medium" />
          ) : null}
          {ticket.priority === 3 ? (
            <GiNetworkBars
              className="card-status"
              style={{ color: "#9ca3af" }}
            />
          ) : null}
          {ticket.priority === 4 ? (
            <BsFillExclamationSquareFill
              className="card-status"
              style={{ color: "#fb923c" }}
            />
          ) : null}
        </div>
        <div className="card-tag">
          <div className="card-tag-icon"></div>
          <span>{ticket.tag[0]}</span>
        </div>
      </div>
    </div>
  );
}
