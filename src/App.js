import React from "react";

import EnvTile from "./Components/EnvTile/EnvTile";
import "./styles.css";
import InfoCard from "./Components/InfoCard/InfoCard";

export default function App() {
  return (
    <div className="App">
      {/* The always-visible JSX/HTML is declared here, as well as router links. Examples below:*/}
      {/* <EnvTile id="Click Environments" /> */}
      {/* <Link to="/">Home</Link> */}

      <EnvTile id="Click" />

      {/* TODO: get this to render on a different page */}
      <InfoCard />
    </div>
  );
}
