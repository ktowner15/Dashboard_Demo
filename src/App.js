import React from "react";
import EnvTile from "./Components/EnvTile/EnvTile";
import "./styles.css";
import InfoCard from "./Components/InfoCard/InfoCard";

export default function App() {
  return (
    <div className="App">
      <EnvTile id="Click Environments" />

      {/* This is just here to show that this class works; and it prevents the console from throwing a fit.  Use it to debug the card that shows info for each environment, later. */}
      <InfoCard />
    </div>
  );
}
