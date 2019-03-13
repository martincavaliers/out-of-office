import React, { Component } from "react";

class StaffArea extends Component {
  render() {
    return (
      <div id="staff-area">
        <h1>Staff</h1>
        <div>
          {this.props.staff.map(person => (
            <p>
              {person.firstName} {person.lastName}
            </p>
          ))}
        </div>
      </div>
    );
  }
}

export default StaffArea;
