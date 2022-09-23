import React, { useState } from "react";
import "./App.css";
import PlayerInput from "./components/PlayerInput";
import GroupInput from "./components/GroupInput";
import PlayerList from "./components/PlayerList";
import GroupList from "./components/GroupList";

function App() {
  const [newPlayerName, setNewPlayerName] = useState("");
  const [totalGroupNumber, setTotalGroupNumber] = useState(2);
  const [playersList, setPlayersList] = useState([{ name: "Player 1" }, { name: "Player 2" }]);
  const [allGroupData, setallGroupData] = useState([]);

  const onSetNewPlayerName = (event) => {
    setNewPlayerName(event.target.value);
  };
  const onAddPlayer = (event) => {
    console.log("Player Add Button Clicked");
    const addPlayerName = newPlayerName.trim();
    if (addPlayerName) {
      const isAlreadyAdded = playersList.find((player) => player.name == addPlayerName);
      if (!isAlreadyAdded) {
        // New Name Add it to the players list
        if (addPlayerName.split(',').length > 1) {
          let multiplePlayers = addPlayerName.split(",").map(name => (
            { name }
          ));
          setPlayersList((prevPlayers) => {
            return [...multiplePlayers, ...prevPlayers];
          });
        } else {
          setPlayersList((prevPlayers) => {
            return [{ name: addPlayerName }, ...prevPlayers];
          });
        }
      }
      setNewPlayerName("");
    }
  };

  const groupNoChangeHandler = (event) => {
    console.log("Group No Changed");
    setTotalGroupNumber(event.target.value);
  };

  const onShuffleGroup = (event) => {
    const totalGroups = +totalGroupNumber ? +totalGroupNumber : 2;
    if (!+totalGroupNumber) {
      setTotalGroupNumber(2);
    }
    console.log("Shuffled", totalGroups);
    shuffleGroups(totalGroups);
  };

    const shuffleGroups = (totalGroupNumber) => {
      const _players = [...playersList]; // array of players
      const noOfGroups = totalGroupNumber;
      let groups = [];
      let groupId = 0;
      const totalPlayers = playersList?.length;
      for (let x = 0; x < totalPlayers; x++) {
        const randomPlayerId = Math.floor(Math.random() * _players.length);
        const randomPlayer = _players[randomPlayerId];
        if (groupId === noOfGroups) {
          // restart the people count from 1st group
          groupId = 0;
        }
        groups[groupId] = groups[groupId] ? [...groups[groupId], randomPlayer] : [randomPlayer]; // whole player details
        _players.splice(randomPlayerId, 1); // remove from array
        groupId++;
      }
      setallGroupData(groups);
    };


  return (
    <div className="App">
      Hello
      <PlayerInput newPlayerName={newPlayerName} onSetNewPlayerName={onSetNewPlayerName} onAddPlayer={onAddPlayer} />
      ------------------
      <GroupInput
        numberOfGroup={totalGroupNumber}
        onGroupNoChange={groupNoChangeHandler}
        onShuffleGroup={onShuffleGroup}
      />
      <br/>
      ------------------------ Players List ---------------------------
      <PlayerList playersList={playersList} />
      <br/>
      -------------------------ALL GROUPS--------------------------
      <br/>
      <GroupList allGroupData={allGroupData} />
    </div>
  );
}

export default App;
