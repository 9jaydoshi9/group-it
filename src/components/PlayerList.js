import Player from "./Player";
const PlayerList = ({ playersList }) => {
  return (
    <div>
      {playersList.map((player,index) => {
        return <Player key={index} playerDetails={player} />;
      })}
    </div>
  );
};

export default PlayerList;
