import React, { useState } from "react";
import "./App.css";
import { getReps, findRep } from "./utils";
import Search from "./components/Search";


function App() {
  const [repOrSen, setRepOrSen] = useState("representatives");
  const [state, setState] = useState("");
  const [reps, setReps] = useState([]);
  const [currentRep, setCurrentRep] =useState({})

  return (
    <div className="App">
      <nav>
        <h1>Who's My Representative?</h1>
      </nav>
      <main>
        <Search 
        repOrSen={repOrSen}
        setRepOrSen={setRepOrSen}
        state={state}
        setState={setState}
        setReps={setReps}
        getReps={getReps}
       />
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Party</th>
            </tr>
          </thead>
          <tbody>
            {reps.map((val, i) => (
              <tr onClick={()=> findRep(val.name)} key={i}>
                <td>{val.name}</td>
                <td>{val.party[0]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default App;
