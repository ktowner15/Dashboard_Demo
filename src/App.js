import React from "react";

import AppTile from "./Components/AppTile/AppTile";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      {/* The always-visible JSX/HTML is declared here, as well as router links. Examples below:*/}
      {/* <EnvTile id="Click Environments" /> */}
      {/* <Link to="/">Home</Link> */}
      <div id="applications">
        <div>
          <AppTile appName="Click" />
          <AppTile appName="App2" />
        </div>
      </div>
    </div>
  );
}
