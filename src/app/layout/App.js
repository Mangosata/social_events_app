import React from "react";
import "./App.css";
import EventDashboard from "./features/event/EventDashboard/EventDashboard";
import Test from "./features/event/EventDashboard/Test";

function App() {
  return (
    <div className="App">
      <h1>Re-vents</h1>
      {/* <EventDashboard /> */}
      <Test />
    </div>
  );
}

export default App;
