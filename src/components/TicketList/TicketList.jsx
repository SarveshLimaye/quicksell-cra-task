import React, { useState } from "react";
import TicketCard from "../TicketCard/TicketCard";
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
          <div>
            {group === "0" ? <span>No Priority</span> : null}
            {group === "1" ? <span>Low</span> : null}
            {group === "2" ? <span>Medium</span> : null}
            {group === "3" ? <span>High</span> : null}
            {group === "4" ? <span>Urgent</span> : null}
            {groupedTickets[0] === undefined &&
            groupedTickets["usr-1"] === undefined ? (
              <span>{group}</span>
            ) : null}
            {groupedTickets["usr-1"] ? <span>{getUserName(group)}</span> : null}
            <span>{groupedTickets.length}</span>
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
