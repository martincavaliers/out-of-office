import React, { Component } from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";

class GuestLoginForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    validated: true
  };

  handleFirstNameChange = e => {
    this.setState({ firstName: e.target.value });
  };

  handleLastNameChange = e => {
    this.setState({ lastName: e.target.value });
  };

  handleValidation = (value1, value2) => {
    if (!value1.match(/\d+/g) && !value2.match(/\d+/g)) {
      this.setState(prevState => {
        return {
          validated: true
        };
      });
      return true;
    } else {
      return false;
    }
  };

  handleSubmit = e => {
    const firstNameInput = document.querySelector("#firstNameInput");
    e.preventDefault();
    const isValid = this.handleValidation(
      this.state.firstName,
      this.state.lastName
    );

    if (isValid) {
      this.props.addGuest(this.state.firstName, this.state.lastName);
      this.setState({ validated: true, firstName: "", lastName: "" });
      firstNameInput.focus();
    } else {
      this.setState({ validated: false });
    }
  };

  render() {
    return (
      <Container id="login-form">
        <Form onSubmit={this.handleSubmit}>
          <Row>
            <Col lg={6}>
              <div id="first-name-div">
                <Form.Group>
                  {/* <Form.Label>First Name</Form.Label> */}
                  <Form.Control
                    required={this.state.isFirefox}
                    id="firstNameInput"
                    type="text"
                    placeholder="First Name"
                    value={this.state.firstName}
                    onChange={this.handleFirstNameChange}
                  />
                </Form.Group>
              </div>
            </Col>
            <Col lg={6}>
              <div id="last-name-div">
                <Form.Group>
                  {/* <Form.Label>Last Name</Form.Label> */}
                  <Form.Control
                    required
                    type="text"
                    placeholder="Last Name"
                    value={this.state.lastName}
                    onChange={this.handleLastNameChange}
                  />
                </Form.Group>
              </div>
            </Col>
          </Row>
          <Row>
            <Col id="error-span">
              {this.state.validated ? (
                <span />
              ) : (
                <span>Please enter valid name</span>
              )}
            </Col>
          </Row>
          <Row>
            <Col>
              <div id="submit-button">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}

export default GuestLoginForm;
