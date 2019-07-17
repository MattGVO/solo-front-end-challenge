import React from "react";

function Search(props) {
  const { setRepOrSen, setState, getReps, repOrSen, state, setReps, error, setError } = props
  return (
    <div className="Search">
      <select onChange={e => setRepOrSen(e.target.value)}>
        <option value="representatives">Representatives</option>
        <option value="senators">Senators</option>
      </select>
      <input
        id="state-input"
        maxLength="2"
        placeholder="e.g. AZ, CA, etc"
        onChange={e => setState(e.target.value.toLowerCase())}
      />
      <button disabled={state.length < 2} onClick={() => getReps(repOrSen, state, setReps, setError)}>Search</button>
      <p style={{color:"red"}}>{error && "That is not a valid state input"}</p>
    </div>
  );
}

export default Search;
