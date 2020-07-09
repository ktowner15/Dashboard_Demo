import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import EnvTile from "./Components/EnvTile/EnvTile";
import "./styles.css";
import InfoCard from "./Components/InfoCard/InfoCard";

export default function App() {
  return (
    <Router>
      <main>
        <div className="App">
          {/* The always-visible JSX/HTML is declared here, as well as router links. Examples below:*/}
          {/* <EnvTile id="Click Environments" /> */}
          {/* <Link to="/">Home</Link> */}

          <EnvTile id="Click">
            {/* TODO: perhaps experiment by putting link here? */}
          </EnvTile>

          {/* TODO: get this link to open on a separate page, that way you don't need the 'close' link. */}
          <Link to="/information">Information</Link>
          <text> || </text>
          <Link to="/">Close</Link>
        </div>
      </main>
      <Switch>
        <Route path="/" exact component={blank} />
        <Route path="/information" component={infoDock} />
      </Switch>
    </Router>
  );
}

const blank = () => <div />;

const infoDock = () => <InfoCard />;
