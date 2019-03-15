import React, { Component, Fragment } from "react";

class GuestArea extends Component {
  render() {
    return (
      <div id="guest-area">
        <h1>Guests</h1>
        <div id="guest-list">
          {this.props.guests.map((person, index) => (
            <Fragment>
              <div className="profile guest-profile">
                <p className="person-name guest-name">
                  {person.firstName} {person.lastName}
                </p>
                <a href="#" className="delete-button">
                  X
                </a>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    );
  }
}

export default GuestArea;
