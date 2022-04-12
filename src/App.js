import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("red");
  const [disabled, setDisabled] = useState(false);
  const newColor = color === "red" ? "blue" : "red";

  return (
    <>
      <button
        style={{ backgroundColor: disabled ? "gray" : color }}
        onClick={() => setColor(newColor)}
        disabled={disabled}
      >
        Change to {newColor}
      </button>

      <label for="disable-button-checkbox">Disable button</label>
      <input
        type="checkbox"
        id="disable-button-checkbox"
        onClick={(e) => setDisabled(e.target.checked)}
      />
    </>
  );
}

export default App;
