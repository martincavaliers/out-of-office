import React, { Fragment, Component } from "react";
import { Badge } from "react-bootstrap";

class StaffArea extends Component {
  render() {
    return (
      <div id="staff-area">
        <h1>Staff</h1>
        <div id="staff-list">
          {this.props.staff.map((person, index) => (
            <Fragment>
              <div className="profile">
                <Badge className="indicator" pill variant="success">
                  In
                </Badge>
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

export default StaffArea;
