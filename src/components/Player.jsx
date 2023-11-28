import { useState } from "react";

export default function Player({ name, symbol }) {
  const handleEditClick = () => {
    setIsEditing((wasEditing) => !wasEditing);
  };
  const handleChange = (event) => {
    setPlayerName(event.target.value);
  };
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);
  return (
    <li>
      <span className="player">
        {isEditing ? (
          <input onChange={handleChange} required defaultValue={name}></input>
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
      </span>
    </li>
  );
}
