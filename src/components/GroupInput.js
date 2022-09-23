import React from "react";

const GroupInput = ({ numberOfGroup, onShuffleGroup, onGroupNoChange }) => {
  return (
    <div>
      <input type="number" value={numberOfGroup} placeholder="No. of Group" onChange={onGroupNoChange} />
      <button onClick={onShuffleGroup}>Shuffle Group</button>
    </div>
  );
};

export default GroupInput;
