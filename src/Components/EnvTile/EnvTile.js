import React, { Component } from "react";

import "./EnvTileStyle.css";
import InfoCard from "../InfoCard/InfoCard";

export class EnvTile extends Component {
  render() {
    // Insert JS functions here

    // Couldn't figure out how to get info to display on a new page, so I tested the button's functionality with an alert.

    function sayHello() {
      alert("You clicked me; my name is " + this.props.id + "!");
      // console.log(this);  //Used for debugging; comment out once you figure out how to bind 'this' keyword.
    }

    function openTab() {
      window.open("https://www.google.com#");
    }

    return (
      <div className="Tile">
        <div className="TileTitle">{this.props.id}</div>

        {/* To bind an event handler, simply add '.bind(this)' to the function call. */}
        <button className="TileButton" onClick={sayHello.bind(this)}>
          Say Hello
        </button>

        {/* FIXME: Alternate approach to binding an event handler; using arrow functions, then calling the event handler in the arrow function body */}
        {/* Left off at 6:38 on this video: https://www.youtube.com/watch?v=kVWpBtRjkCk */}
        {/* <button className="TileButton" onClick={sayHello.bind(this)}>
          View
        </button> */}

        {/* This is just me playing with opening tabs and new pages */}
        <button className="TileButton" onClick={openTab.bind(this)}>
          New Tab
        </button>

        <div />

        {/* TODO: use the react-router-dom pkg to render InfoCards on a separate page. */}
        <div>
          <InfoCard className="TileCard" />
        </div>
      </div>
    );
  }
}

export default EnvTile;
