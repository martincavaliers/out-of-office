import React, { Component } from "react";
import StaffArea from "./StaffArea";
import GuestArea from "./GuestArea";

class SideBar extends Component {
  render() {
    return (
      <div className="sidebar">
        <StaffArea staff={this.props.staff} />

        <GuestArea
          guests={this.props.guests}
          removeGuest={this.props.removeGuest}
        />
      </div>
    );
  }
}

export default SideBar;
