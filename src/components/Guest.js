import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

class Guest extends Component {
  render() {
    return (
      <div id="guest-list">
        <Fragment>
          <div className="profile guest-profile">
            <p className="person-name guest-name">
              {this.props.firstName} {this.props.lastName}
            </p>
            <button
              className="delete-button"
              onClick={() => this.props.removeGuest(this.props.id)}
            >
              X
            </button>
          </div>
        </Fragment>
      </div>
    );
  }
}

Guest.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  removeGuest: PropTypes.func
};

export default Guest;
