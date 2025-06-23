import React from "react";
import "../styles.css";

export default function TicketItem({ ticket, dispatch }) {
  const { id, title, description, priority } = ticket;

  const priorityClasses = {
    1: "priority-low",
    2: "priority-medium",
    3: "priority-high",
  };

  return (
    <div className="ticket-item">
      <div className={`priority-dot ${priorityClasses[ticket.priority]}`}></div>
      <h3 className="ticket-title">{title}</h3>
      <p className="ticket-description">{description}</p>
    </div>
  );
}
