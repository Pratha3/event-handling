import React, { useState } from "react";
import "./App.css";

function App() {
  const [isToggled, setIsToggled] = useState(false);
  const [showCode, setShowCode] = useState(false);
  const [showHeadings, setShowHeadings] = useState(true);
  const [color, setColor] = useState("olive");

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
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-3">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
