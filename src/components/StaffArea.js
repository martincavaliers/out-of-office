import React, { Fragment, Component } from "react";
import StaffMember from "./StaffMember";

class StaffArea extends Component {
  render() {
    return (
      <div id="staff-area">
        <h1>Staff</h1>
        <StaffMember staff={this.props.staff} />
      </div>
    );
  }
}

export default StaffArea;
