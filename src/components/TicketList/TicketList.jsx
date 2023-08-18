import React from "react";
import TicketCard from "../TicketCard/TicketCard";
import { AiOutlinePlus } from "react-icons/ai";
import { GiNetworkBars } from "react-icons/gi";
import low_network from "../../assets/low_network.PNG";
import medium_network from "../../assets/medium_network.PNG";
import {
  BsThreeDots,
  BsCircle,
  BsCircleHalf,
  BsExclamationCircleFill,
  BsFillExclamationSquareFill,
} from "react-icons/bs";
import "./TicketList.css";

export default function TicketList({ groupedTickets, users }) {
  const getUserName = (userId) => {
    const user = users.find((user) => user.id === userId);
    return user ? user.name : "Unknown User";
  };

  return (
    <div className="grid">
      {Object.keys(groupedTickets).map((group, index) => (
        <div key={group} className="grid-items">
          <div className="heading-div">
            {group === "0" ? (
              <>
                <BsThreeDots className="heading-icon" />
                <span className="grid-title">No Priority</span>
              </>
            ) : null}
            {group === "1" ? (
              <>
                <img
                  src={low_network}
                  className="heading-icon"
                  style={{
                    width: "20px",
                    height: "10px",
                    marginTop: "15px",
                  }}
                  alt="medium"
                />
                <span className="grid-title">Low</span>{" "}
              </>
            ) : null}
            {group === "2" ? (
              <>
                <img
                  src={medium_network}
                  className="heading-icon"
                  style={{
                    width: "20px",
                    height: "10px",
                    marginTop: "15px",
                  }}
                  alt="medium"
                />
                <span className="grid-title">Medium</span>{" "}
              </>
            ) : null}
            {group === "3" ? (
              <>
                <GiNetworkBars className="heading-icon" />
                <span className="grid-title">High</span>{" "}
              </>
            ) : null}
            {group === "4" ? (
              <>
                <BsFillExclamationSquareFill
                  className="heading-icon"
                  style={{ color: "red", "border-radius": "0%" }}
                />
                <span className="grid-title">Urgent</span>
              </>
            ) : null}
            {groupedTickets[0] === undefined &&
            groupedTickets["usr-1"] === undefined ? (
              <>
                {group === "Todo" ? (
                  <BsCircle
                    className="heading-icon"
                    style={{ borderRadius: "100%", marginTop: "18px" }}
                  />
                ) : null}
                {group === "In progress" ? (
                  <BsCircleHalf className="inprogress-icon" />
                ) : null}

                {group === "Backlog" ? (
                  <BsExclamationCircleFill
                    className="inprogress-icon"
                    style={{ color: "red" }}
                  />
                ) : null}

                <span className="status-title">{group}</span>
              </>
            ) : null}
            {groupedTickets["usr-1"] ? (
              <>
                <img
                  src={
                    "https://tricky-photoshop.com/wp-content/uploads/2017/08/final-1.png"
                  }
                  alt="round"
                  className="user-image"
                />

                <span className="grid-title" style={{ marginRight: "4.1rem" }}>
                  {getUserName(group)}
                </span>
              </>
            ) : null}
            <div className="icon-div">
              <AiOutlinePlus className="icon" />
              <BsThreeDots className="icon" />
            </div>
          </div>

          {groupedTickets[group].map((ticket, ticketIndex) => (
            <>
              <TicketCard ticket={ticket} key={ticket.id} group={group} />
            </>
          ))}
        </div>
      ))}
    </div>
  );
}
