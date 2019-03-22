import React, { Component, Fragment } from "react";
import { Badge } from "react-bootstrap";
import PropTypes from "prop-types";

class StaffMember extends Component {
  render() {
    return (
      <div id="staff-list">
        <Fragment>
          <div className="profile staff-profile">
            {this.props.inOffice ? (
              <Badge className="indicator" pill variant="success">
                In
              </Badge>
            ) : (
              <Badge className="indicator" pill variant="danger">
                Out
              </Badge>
            )}
            <p className="person-name staff-name">
              {this.props.firstName} {this.props.lastName}
            </p>
          </div>
        </Fragment>
      </div>
    );
  }
}

StaffMember.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  inOffice: PropTypes.bool
};

export default StaffMember;
