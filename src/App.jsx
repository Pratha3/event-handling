import React, { useState } from "react";
import "./App.css";

function App() {
  const [isToggled, setIsToggled] = useState(false);
  const [showCode, setShowCode] = useState(false);
  const [showHeadings, setShowHeadings] = useState(true);

  const handleClick = () => {
    setIsToggled(!isToggled);
  };

  const handleHover = (e) => {
    e.target.style.color = "yellow";
  };

  const handleMouseOut = (e) => {
    e.target.style.color = "blue";
  };
  const toggleCodeVisibility = () => {
    setShowCode(!showCode);
    setShowHeadings(!showHeadings);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }} className="default-effect">
        Hello!!
      </h1>
      {showHeadings && (
        <>
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
        </>
      )}
      <button onClick={toggleCodeVisibility} className="toggle-code-btn">
        {showCode ? "Show" : "Hide"}
      </button>
    </div>
  );
}

export default App;
