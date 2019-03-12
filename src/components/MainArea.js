import React, { Component } from "react";
import GuestLoginForm from "./GuestLoginForm";

class MainArea extends Component {
  render() {
    return (
      <div className="main-area">
        <h1>Welcome</h1>
        <h3>If you are a guest then please type your name below and log in</h3>
        <GuestLoginForm />
      </div>
    );
  }
}

export default MainArea;