import React from "react";
import Tile from "./Components/Tile/Tile";
import "./styles.css";
import InfoCard from "./Components/InfoCard/InfoCard";

export default function App() {
  return (
    <div className="App">
      <Tile name="Click" />
      <Tile name="Other Environment" />

      {/* This is just here to show that this class works; and it prevents the console from throwing a fit.  Use it to debug the card that shows info for each environment, later. */}
      <InfoCard />
    </div>
  );
}
