import React, { Component, Fragment } from "react";

class Guest extends Component {
  render() {
    return (
      <div id="guest-list">
        {this.props.guests.map((person, index) => (
          <Fragment key={index + 1}>
            <div className="profile guest-profile" key={"1"}>
              <p className="person-name guest-name" key={"2"}>
                {person.firstName} {person.lastName}
              </p>
              <a href="#" className="delete-button" key={"3"}>
                X
              </a>
            </div>
          </Fragment>
        ))}
      </div>
    );
  }
}

export default Guest;
