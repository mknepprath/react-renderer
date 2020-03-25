import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [showLogo, setShowLogo] = React.useState(true);

  const [color, setColor] = React.useState("purple");
  React.useEffect(() => {
    let colors = ["purple", "green", "orange"];
    let i = 0;
    let interval = setInterval(() => {
      i++;
      setColor(colors[i % 3]);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div class="App">
      <header class="App-header">
        {showLogo && <img src={logo} class="App-logo" alt="logo" />}
        <button
          onClick={() => {
            setShowLogo(show => !show);
          }}
        >
          Logo Toggle
        </button>
        <p thunderMagicHorse={color}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          class="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
