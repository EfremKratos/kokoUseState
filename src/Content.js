import React from "react";
import { useState } from "react";

export default function Content() {
  const [names, setName] = useState();

  const handleChangeName = () => {
    const name = ["Bob", "Kevin", "Duran"];
    const int = Math.floor(Math.random() * 3);
    setName(name[int]);
  };

  const handleClick = () => {
    console.log("you cliked");
  };
  return (
    <div>
      <p onClick={handleClick}>hello {names}</p>
      <button onClick={handleChangeName}>klik here</button>
    </div>
  );
}
