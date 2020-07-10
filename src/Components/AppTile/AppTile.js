import React, { Component } from "react";

import "./AppTileStyle.css";

import LinkBar from "../LinkBar/LinkBar";
import infoPage from "../rawHTML/infoPage.html";

export class EnvTile extends Component {
  redirect() {
    //Redirects the current window to a raw HTML page where info will be displayed.

    /* This was difficult to figure out, so be wary of changing it.  See
     * https://www.w3schools.com/js/js_htmldom_navigation.asp
     * for more info on walking through the JS DOM tree.
     * My mistake was trying to accomplish this exclusively through the HTML DOM
     * instead of using both the HTML DOM + the JS DOM.
     */

    // Early attempt at printing info to console:
    // console.log(document.getElementById("applications").innerHTML);

    //Logging DOM tree info to console (test):
    //console.log(document.getRootNode().body.innerHTML);
    document.getRootNode().body.innerHTML = infoPage;
  }

  render() {
    // Insert JS functions here

    //playing around with alerts
    // function sayHello() {
    //   alert("You clicked me; my name is " + this.props.id + "!");
    //   // console.log(this);  //Used for debugging; comment out once you figure out how to bind 'this' keyword.
    // }

    //playing around with opening a new tab
    // function openTab() {
    //   window.open("https://www.google.com#");
    // }

    return (
      <div className="Tile">
        <div className="TileTitle">{this.props.appName}</div>

        <button onClick={this.redirect}>Environments</button>

        {/* To bind an event handler, simply add '.bind(this)' to the function call. */}
        {/* <button className="TileButton" onClick={sayHello.bind(this)}>
          Say Hello
        </button> */}

        {/* FIXME: Alternate approach to binding an event handler; using arrow functions, then calling the event handler in the arrow function body */}
        {/* Left off at 6:38 on this video: https://www.youtube.com/watch?v=kVWpBtRjkCk */}
        {/* <button className="TileButton" onClick={sayHello.bind(this)}>
          View
          </button> */}

        {/* This is just me playing with opening tabs and new pages */}
        {/* <button className="TileButton" onClick={openTab.bind(this)}>
            New Tab
          </button> */}

        <div />

        {/* Here is the component that contains the links to information about the environment FIXME: unused right now, but could provide a handy dropdown display if you ever need it.  Keep it in.*/}
        {/* <LinkBar className="InfoLink" /> */}
      </div>
    );
  }
}

export default EnvTile;
