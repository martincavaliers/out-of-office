import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class GuestLoginForm extends Component {
  render() {
    return (
      <div id="login-form">
        <Form>
          <div id="first-name-div">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="First Name" />
            </Form.Group>
          </div>

          <div id="last-name-div">
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Last Name" />
            </Form.Group>
          </div>
          <Button id="submit-button" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default GuestLoginForm;
