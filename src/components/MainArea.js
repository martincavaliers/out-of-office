import React, { Component } from "react";
import GuestLoginForm from "./GuestLoginForm";

class MainArea extends Component {
  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <h3>If you are a guest then please type your name below and log in</h3>
        <GuestLoginForm addGuest={this.props.addGuest} />
      </div>
    );
  }
}

export default MainArea;
