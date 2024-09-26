import { useState } from "react";


export default function Player({initialName,symbol, isActive, onChangeName}) {
  const [isEditing, setIsEditing] = useState(false);

  const [playerName, editPlayerName] = useState(initialName);
  
  function handleEditing(){
    setIsEditing(Editing => !Editing); 
    
    if(isEditing){
      onChangeName(symbol,playerName);
    }
  }

  function changePlayerName(event){
    editPlayerName(event.target.value);
  }

  let initialPlayerName = <span className="player-name">{playerName}</span>;

  if(isEditing){
    initialPlayerName = <input type ="text" required value={playerName} onChange={changePlayerName}></input>;
  }

  return (
    <li className={isActive ? 'active':undefined}>
      <span className="player">
        {initialPlayerName}
        <span className="player-symbol">{symbol}</span>

      </span>
      <button onClick={handleEditing}> {isEditing?'Save':'Edit'} </button>
    </li>
  );
}