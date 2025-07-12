export default function ticketReducer(state, action) {
  switch (action.type) {
    case "ADD_TICKET":
      return { ...state, tickets: [...state.tickets, action.payload] };
    case "UPDATE_TICKET":
      return {
        ...state,
        tickets: state.tickets.map((ticket) =>
          ticket.id === action.payload.id ? action.payload : ticket
        ),
        editTicket: null,
      };
    case "DELETE_TICKET":
      return {
        ...state,
        tickets: state.tickets.filter(
          (ticket) => ticket.id !== action.payload.id
        ),
        editTicket: null,
      };
    case "SET_EDIT_TICKET":
      return { ...state, editTicket: action.payload };
    case "CLEAR_EDIT_TICKET":
      return { ...state, editTicket: null };
    case "SORT_TICKETS":
      return {
        ...state,
        tickets: state.tickets.sort((a, b) => {
          if (action.payload === "High to Low") {
            return b.priority - a.priority;
          } else {
            return a.priority - b.priority;
          }
        }),
      };
    default:
      return state;
  }
}
