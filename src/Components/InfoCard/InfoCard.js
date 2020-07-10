import React, { Component } from "react";
import "./InfoCardStyle.css";

export class InfoCard extends Component {
  render() {
    // Insert JS functions here
    return (
      <div className="InfoCard">
        <card className="envName">
          Environment name
          <ul className="fieldList">
            List Title
            <li id="1">Field 1</li>
            <li id="2">Field 2</li>
            <li id="3">Field 3</li>
            <li id="4">Field 4</li>
          </ul>
        </card>
      </div>
    );
  }
}

export default InfoCard;
