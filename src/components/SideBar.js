import React, { Component } from "react";
import { Container, Jumbotron } from "react-bootstrap";

class SideBar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div id="staff-area">
          <h1>Staff</h1>
        </div>

        <div id="guest-area">
          <h1>Guests</h1>
        </div>
      </div>
    );
  }
}

export default SideBar;
