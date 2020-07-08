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

          <Link to="/information">Click me for an example of a link!</Link>

          {/* TODO: get this to render on a different page */}
          {/* <InfoCard /> */}
        </div>
      </main>
      <Switch>
        <Route path="/information" component={infoDock} />
      </Switch>
    </Router>
  );
}

const infoDock = () => <InfoCard />;
