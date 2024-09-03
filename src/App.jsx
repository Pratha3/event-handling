import React, { useState } from "react";
import "./App.css";

function App() {
  const [isToggled, setIsToggled] = useState(false);
  const handleClick = () => {
    setIsToggled(!isToggled);
  };
  const handleHover = (e) => {
    e.target.style.color = "yellow";
  };

  const handleMouseOut = (e) => {
    e.target.style.color = "blue";
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }} className="default-effect">
        Hello!!
      </h1>

      <h1
        style={{
          textAlign: "center",
          fontSize: isToggled ? "38px" : "24px",
          color: isToggled ? "red" : "black",
        }}
        onClick={handleClick}
        className="click-effect"
      >
        React
      </h1>

      <h1
        style={{ textAlign: "center" }}
        className="hover-effect"
        onMouseOver={handleHover}
        onMouseOut={handleMouseOut}
      >
        Application
      </h1>
    </div>
  );
}

export default App;
