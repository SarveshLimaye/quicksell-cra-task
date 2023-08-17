import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import TicketList from "./components/TicketList/TicketList";

function App() {
  const [grouping, setGrouping] = useState("status");
  const [modalshow, setModalshow] = useState(false);
  const [ordering, setOrdering] = useState("priority");
  const [tickets, setTickets] = useState([]);
  const [groupedTickets, setGroupedTickets] = useState({});

  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.quicksell.co/v1/internal/frontend-assignment"
      );
      const data = await response.json();
      setTickets(data.tickets);
    };

    const groupAndSortData = () => {
      let groupedData = tickets.reduce((groups, ticket) => {
        const groupKey = ticket[grouping];
        groups[groupKey] = [...(groups[groupKey] || []), ticket];
        return groups;
      }, {});

      for (const groupKey in groupedData) {
        groupedData[groupKey].sort((a, b) => {
          if (ordering === "priority") {
            return b.priority - a.priority;
          } else if (ordering === "title") {
            return a.title.localeCompare(b.title);
          }
          return 0;
        });
      }

      setGroupedTickets(groupedData);
      console.log(groupedTickets);
    };

    fetchData();
    groupAndSortData(); // Group and sort initially
  }, [grouping, ordering, tickets]);

  return (
    <div>
      <Navbar getShow={(show) => setModalshow(show)} />
      {modalshow ? (
        <div className="display-modal">
          <div className="display-modal-content">
            <span className="display-modal-text">Grouping</span>
            <select
              className="display-options"
              value={grouping}
              onChange={(e) => setGrouping(e.target.value)}
            >
              <option value="status">Status</option>
              <option value="userId">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className="display-modal-content">
            <span className="display-modal-text">Ordering</span>
            <select
              className="display-options"
              value={ordering}
              onChange={(e) => setOrdering(e.target.value)}
            >
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      ) : null}
      <TicketList groupedTickets={groupedTickets} />
    </div>
  );
}

export default App;
