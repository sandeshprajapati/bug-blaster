import React, { useState, useEffect } from "react";
import "../styles.css";

export default function TicketForm({ dispatch, editTicket }) {
  //ticket
  const [ticket, setTicket] = useState("");
  // description
  const [description, setDescription] = useState("");
  // priority
  const [priority, setPriority] = useState("");

  useEffect(() => {
    if (editTicket) {
      setTicket(editTicket.ticket);
      setDescription(editTicket.description);
      setPriority(editTicket.priority);
    } else {
      clearForm();
    }
  }, [editTicket]);

  const priorityLabels = {
    1: "Low",
    2: "Medium",
    3: "High",
  };

  const clearForm = () => {
    setTicket("");
    setDescription("");
    setPriority("1");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const ticketData = {
      id: editTicket ? editTicket.id : new Date().toISOString(),
      ticket,
      description,
      priority,
    };
    dispatch({
      type: editTicket ? "UPDATE_TICKET" : "ADD_TICKET",
      payload: ticketData,
    });
    console.log(ticketData);
    clearForm();
  };

  const handleCancel = () => {
    clearForm();
    dispatch({ type: "CLEAR_EDIT_TICKET" });
  };

  return (
    <form className="ticket-form" onSubmit={handleSubmit}>
      <h2>New Ticket</h2>
      <label>Title</label>
      <input
        type="text"
        className="form-input"
        value={ticket}
        onChange={(e) => setTicket(e.target.value)}
        placeholder="Enter ticket title"
      />
      <label>Description</label>
      <textarea
        type="text"
        className="form-input"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter ticket description"
        rows="3"
      />
      <fieldset className="priority-fieldset">
        <legend>Priority</legend>
        {Object.entries(priorityLabels).map(([value, label]) => (
          <label key={value} className="priority-label">
            <input
              type="radio"
              value={value}
              checked={priority === value}
              onChange={(e) => setPriority(e.target.value)}
              className="priority-input"
            />
            {label}
          </label>
        ))}
      </fieldset>
      <button type="submit" onSubmit={handleSubmit} className="button">
        Submit
      </button>
      {editTicket && (
        <button type="button" onClick={handleCancel} className="button">
          Cancel
        </button>
      )}
    </form>
  );
}
