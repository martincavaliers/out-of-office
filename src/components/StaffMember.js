import React, { Component, Fragment } from "react";
import { Badge } from "react-bootstrap";

class StaffMember extends Component {
  render() {
    return (
      <div id="staff-list">
        {this.props.staff.map((person, index) => (
          <Fragment>
            <div className="profile staff-profile">
              {person.inOffice ? (
                <Badge className="indicator" pill variant="success">
                  In
                </Badge>
              ) : (
                <Badge className="indicator" pill variant="danger">
                  Out
                </Badge>
              )}
              <p className="person-name staff-name">
                {person.firstName} {person.lastName}
              </p>
            </div>
          </Fragment>
        ))}
      </div>
    );
  }
}

export default StaffMember;
