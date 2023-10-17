import React, { useState } from "react";
import Troll from "../assets/Troll.png";
import Troll2 from "../assets/Trolls2.png";

export default function Header() {
  let [something, setSomething] = useState(Troll2);

  const handleMouseOver = () => {
    if (something === Troll2) {
      setSomething(Troll);
    } else if (something === Troll) {
      setSomething(Troll2);
    }
  };

  return (
    <div>
      <div className="header-container">
        <div className="header-heading">
          <img
            className="header-image"
            src={something}
            width={"55px"}
            alt="Logo"
            onMouseOver={handleMouseOver}
          />
          <h2 className="header-title">Meme Generator</h2>
          <div className="header-project">React Course - Project 3</div>
        </div>
      </div>
    </div>
  );
}
