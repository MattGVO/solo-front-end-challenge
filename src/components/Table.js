import React from 'react';

function Table (props) {
    const { reps, setCurrentRep } = props
    return (
      <div className="table">
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
      </div>
    );
}

export default Table;