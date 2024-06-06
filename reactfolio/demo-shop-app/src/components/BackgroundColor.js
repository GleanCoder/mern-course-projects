import { React, useState } from "react";
import "./BackgroundColor.css";

function BackgroundColor(props) {
  const [color, setColor] = useState("");

  function colorChangeHandler(event) {
    setColor(event.target.value);
    console.log("colorchange function working");
  }
  return (
    <div className="parentDiv">
      <input
        type="text"
        placeholder="Enter a Color"
        value={color || ""}
        onChange={colorChangeHandler}
      />
      <div style={{ backgroundColor: color }} className="box">
        <p> {color} </p>
      </div>
    </div>
  );
}

export default BackgroundColor;
