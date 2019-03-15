import React, { Component, Fragment } from "react";
import Guest from "./Guest";

class GuestArea extends Component {
  render() {
    return (
      <div id="guest-area">
        <h1>Guests</h1>
        <Guest guests={this.props.guests} />
      </div>
    );
  }
}

export default GuestArea;
