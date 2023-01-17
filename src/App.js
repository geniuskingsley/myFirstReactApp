import "./App.css";
import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [height, setHeight] = useState(0);
  const [superPower, setSuperPower] = useState("");
  // USER DISPLAYING CHARACTER IN STATE
  const [displayCharacter, setDisplayCharacter] = useState(false);

  return (
    <div className="App">
      <h1>Build A Hero</h1>
      <div>
        <label>Enter Name : </label>
        <input
          type="text"
          style={{ margin: 10 }}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label>Enter Age: </label>
        <input
          type="number"
          style={{ margin: 10 }}
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <label>Enter Height: </label>
        <input
          type="number"
          style={{ margin: 10 }}
          onChange={(event) => {
            setHeight(event.target.value);
          }}
        />
        <label>Enter Superpower:</label>
        <input
          type="text"
          style={{ margin: 10 }}
          onChange={(event) => {
            setSuperPower(event.target.value);
          }}
        />
      </div>

      {/* DISPLAY BUTTON */}
      <div>
        <button
          onClick={() => {
            setDisplayCharacter(true);
          }}
        >
          DISPLAY CHARACTER
        </button>
      </div>

      {/* USER INFO DISPLAY */}
      <di>
        <h2>USER INFO</h2>
        {displayCharacter ? (
          <div>
            <ul>
              <li>YOUR NAME IS : {name}</li>
              <li>YOU ARE {age} YEARS OLD </li>
              <li>YOU ARE {height} FEET TALL</li>
              <li>YOUR SUOERPOWER IS : {superPower}</li>
            </ul>
          </div>
        ) : null}
      </di>
    </div>
  );
}

export default App;
