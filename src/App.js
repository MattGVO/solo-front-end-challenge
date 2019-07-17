import React, { useState } from "react";
import "./App.css";
import { getReps, findRep } from "./utils";
import Search from "./components/Search";


function App() {
  const [repOrSen, setRepOrSen] = useState("representatives");
  const [state, setState] = useState("");
  const [reps, setReps] = useState([]);
  const [currentRep, setCurrentRep] =useState({})

  console.log(currentRep)

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
              <tr onClick={()=> setCurrentRep(val)} key={i}>
                <td>{val.name}</td>
                <td>{val.party[0]}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>{currentRep.name && currentRep.name.split(" ")[0]}</p>
        <p>{currentRep.name && currentRep.name.split(" ")[1]}</p>
        <p>{currentRep.district}</p>
        <p>{currentRep.phone}</p>
        <p>{currentRep.office}</p>
      </main>
    </div>
  );
}

export default App;
