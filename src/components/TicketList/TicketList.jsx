import React from "react";

export default function TicketList({ groupedTickets }) {
  return (
    <div>
      {Object.keys(groupedTickets).map((group, index) => (
        <div key={group}>
          <h2>{group}</h2>
          <ul>
            {groupedTickets[group].map((ticket, ticketIndex) => (
              <>
                <li key={ticket.id}>{ticket.title}</li>
                <li>{ticket.priority}</li>
              </>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
