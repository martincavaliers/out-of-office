import React, { Component, Fragment } from "react";
import Guest from "./Guest";

class GuestArea extends Component {
  render() {
    return (
      <div id="guest-area">
        <Fragment>
          <h1>Guests</h1>
        </Fragment>
        <Fragment>
          {this.props.guests.map((person, index) => (
            <Guest
              firstName={person.firstName}
              lastName={person.lastName}
              key={index + 1}
              id={person.id}
              removeGuest={this.props.removeGuest}
            />
          ))}
        </Fragment>
      </div>
    );
  }
}

export default GuestArea;
