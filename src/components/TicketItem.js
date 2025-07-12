import React from "react";
import "../styles.css";
import { type } from "@testing-library/user-event/dist/type";

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
      <button
        type="button"
        className="button"
        onClick={() => dispatch({ type: "DELETE_TICKET", payload: ticket })}
      >
        Delete
      </button>
      <button
        className="button"
        type="button"
        onClick={() => dispatch({ type: "SET_EDIT_TICKET", payload: ticket })}
      >
        Edit
      </button>
    </div>
  );
}
