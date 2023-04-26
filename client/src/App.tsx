import React from "react";
import "./App.css";
import IconExpress from "./icons/IconExpress";
import IconReact from "./icons/IconReact";
import IconNodeJs from "./icons/IconNodeJs";
import IconTigris from "./icons/IconTigris";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-tern-letters">
          <span>T</span>
          <span>E</span>
          <span>R</span>
          <span>N</span>
        </div>
        <div className="App-tern-logos">
          <IconTigris className="App-tern-logo" />
          <IconExpress className="App-tern-logo" />
          <IconReact className="App-tern-logo" />
          <IconNodeJs className="App-tern-logo" />
        </div>
        <p>The TERN stack consists of:</p>
        <ul className="App-tech-list">
          <li>
            <a href="https://www.tigrisdata.com?utm_source=github&utm_medium=github&utm_campaign=tern-template">
              Tigris
            </a>
          </li>
          <li>
            <a href="https://expressjs.com/">Express.js</a>
          </li>
          <li>
            <a href="https://react.dev/">React</a>
          </li>
          <li>
            <a href="https://nodejs.org">Node.js</a>
          </li>
        </ul>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://www.tigrisdata.com/blog/tern-stack/?utm_source=template&utm_medium=template&utm_campaign=tern-template"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn to TERN
        </a>
      </header>
    </div>
  );
}

export default App;
