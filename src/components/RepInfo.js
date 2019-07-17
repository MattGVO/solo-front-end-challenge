import React from "react";

function RepInfo(props) {
  const { currentRep } = props;
  return (
    <div className="RepInfo">
      <p className="info-tag">{currentRep.name && currentRep.name.split(" ")[0]}</p>
      <p className="info-tag">{currentRep.name && currentRep.name.split(" ")[1]}</p>
      <p className="info-tag">{currentRep.district}</p>
      <p className="info-tag">{currentRep.phone}</p>
      <p className="info-tag">{currentRep.office}</p>
    </div>
  );
}

export default RepInfo;
