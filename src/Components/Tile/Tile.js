import React, { Component } from "react";
import "./TileStyle.css";

export class Tile extends Component {
  render() {
    // Couldn't figure out how to get info to display on a new page, so I tested the button's functionality with an alert.

    function sayHello() {
      alert("You clicked me; my name is " + this.props.name + "!");
      // console.log(this);  //Used for debugging; comment out once you figure out how to bind 'this' keyword.
    }

    return (
      <div className="Tile">
        <div className="TileTitle">{this.props.name} Information</div>

        {/* To bind an event handler, simply add '.bind(this)' to the function call. */}
        <button className="TileButton" onClick={sayHello.bind(this)}>
          View
        </button>

        {/* FIXME: Alternate approach to binding an event handler; using arrow functions, then calling the event handler in the arrow function body */}
        {/* Left off at 6:38 on this video: https://www.youtube.com/watch?v=kVWpBtRjkCk */}
        <button className="TileButton" onClick={sayHello.bind(this)}>
          View
        </button>

        <div />
      </div>
    );
  }
}

export default Tile;
