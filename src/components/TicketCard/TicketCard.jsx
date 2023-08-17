import React from "react";
import "./TicketCard.css";
import { BsThreeDots } from "react-icons/bs";

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
          <BsThreeDots className="card-status" />
        </div>
        <div className="card-tag">
          <div className="card-tag-icon"></div>
          <span>{ticket.tag[0]}</span>
        </div>
      </div>
    </div>
  );
}
