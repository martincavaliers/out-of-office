import React, { Component } from "react";
import StaffMember from "./StaffMember";

class StaffArea extends Component {
  render() {
    return (
      <div id="staff-area">
        <h1>Staff</h1>
        {this.props.staff.map((person, index) => (
          <StaffMember
            firstName={person.firstName}
            lastName={person.lastName}
            inOffice={person.inOffice}
            key={index + 1}
            id={index + 1}
          />
        ))}
      </div>
    );
  }
}

export default StaffArea;
