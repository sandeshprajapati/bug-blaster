import logo from "./logo.svg";
import "./App.css";
import TicketForm from "./components/TicketForm.";
import ticketReducer from "./reducers/ticketReducer";
import { useReducer } from "react";
import TicketList from "./components/TicketList";

function App() {
  const intialState = { tickets: [] };

  const [state, dispatch] = useReducer(ticketReducer, intialState);

  return (
    <div className="App">
      <div className="container">
        <TicketForm dispatch={dispatch} />
        {state.tickets.length > 0 && (
          <div className="results">
            <h2> All Tickets</h2>
            <TicketList tickets={state.tickets} dispatch={dispatch} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
