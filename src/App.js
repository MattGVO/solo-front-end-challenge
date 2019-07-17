import React, { useState } from "react";
import "./App.css";
import { getReps } from "./utils";
import Search from "./components/Search";
import Table from "./components/Table";
import RepInfo from "./components/RepInfo";

function App() {
  const [repOrSen, setRepOrSen] = useState("representatives");
  const [state, setState] = useState("");
  const [reps, setReps] = useState([]);
  const [currentRep, setCurrentRep] = useState({});
  const [error, setError] = useState(false);

  return (
    <div className="App">
      <main>
        <h1>Who's My Representative?</h1>
        <Search
          repOrSen={repOrSen}
          setRepOrSen={setRepOrSen}
          state={state}
          setState={setState}
          setReps={setReps}
          getReps={getReps}
          error={error}
          setError={setError}
        />
        {reps.length > 0 && (
          <div className="info-container">
            <Table reps={reps} setCurrentRep={setCurrentRep} />
            <RepInfo currentRep={currentRep} />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
