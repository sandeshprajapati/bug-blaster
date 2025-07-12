import logo from "./logo.svg";
import "./App.css";
import TicketForm from "./components/TicketForm.";
import ticketReducer from "./reducers/ticketReducer";
import { useReducer } from "react";
import TicketList from "./components/TicketList";

function App() {
  const intialState = { tickets: [], editTicket: null };

  const [state, dispatch] = useReducer(ticketReducer, intialState);

  return (
    <div className="App">
      <div className="container">
        <TicketForm dispatch={dispatch} editTicket={state.editTicket} />
        {state.tickets.length > 0 && (
          <div className="results">
            <h2> All Tickets</h2>
            <p>
              <select
                onChange={(e) => {
                  dispatch({
                    type: "SORT_TICKETS",
                    payload: e.target.value,
                  });
                }}
              >
                <option value="High to Low">High to Low</option>
                <option value="Low to High">Low to High</option>
              </select>
            </p>
            <TicketList tickets={state.tickets} dispatch={dispatch} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
