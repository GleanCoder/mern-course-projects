import { React, useEffect, useState } from "react";

import "./App.css";

function App() {
  const [windowSize, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    const sizeHandler = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", sizeHandler);
    sizeHandler();

    window.removeEventListener("resize", sizeHandler);
  });
  return (
    <div className="App" style={{ padding: "20px" }}>
      <h1>Window Size Tracker</h1>
      <p>Width: {windowSize.width}px</p>
      <p>Height: {windowSize.height}px</p>
    </div>
  );
}

export default App;
