import React from "react";

function Search(props) {
  const {setRepOrSen, setState, getReps, repOrSen, state, setReps} = props
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
      <button disabled={state.length < 2} onClick={() => getReps(repOrSen, state, setReps)}>Search</button>
    </div>
  );
}

export default Search;
