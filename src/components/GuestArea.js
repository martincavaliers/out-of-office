import React, { Component, Fragment } from "react";
import Guest from "./Guest";

class GuestArea extends Component {
  render() {
    return (
      <div id="guest-area">
        <h1>Guests</h1>
        {this.props.guests.map((person, index) => (
          <Guest
            firstName={person.firstName}
            lastName={person.lastName}
            key={index + 1}
            id={index + 1}
            removeGuest={this.props.removeGuest}
          />
        ))}
      </div>
    );
  }
}

export default GuestArea;
