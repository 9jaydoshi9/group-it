import React from "react";

const PlayerInput = ({ newPlayerName, onSetNewPlayerName, onAddPlayer }) => {
  return (
    <div>
      <input type="text" value={newPlayerName} placeholder="Add Player" onChange={onSetNewPlayerName} />
      <button onClick={onAddPlayer}>Add Player</button>
    </div>
  );
};

export default PlayerInput