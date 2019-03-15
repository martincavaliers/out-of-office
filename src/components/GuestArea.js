import React, { Component, Fragment } from "react";

class GuestArea extends Component {
  render() {
    return (
      <div id="guest-area">
        <h1>Guests</h1>
        <div id="guest-list">
          {this.props.guests.map((person, index) => (
            <Fragment>
              <div className="profile">
                <p className="person-name">
                  {person.firstName} {person.lastName}
                </p>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    );
  }
}

export default GuestArea;
