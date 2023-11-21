import { useState } from "react";

export default function Player({ name, symbol }) {
  const handleEditClick = () => {
    setIsEditing(true);
  };
  const [isEditing, setIsEditing] = useState(false);
  console.log(isEditing);
  return (
    <li>
      <span className="player">
        {isEditing ? (
          <input
            onKeyDown={(key) => {
              console.log(key);
              if (key.code === "Enter") {
                setIsEditing(false);
              }
            }}
          ></input>
        ) : (
          <span className="player-name">{name}</span>
        )}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleEditClick}>Edit</button>
      </span>
    </li>
  );
}
