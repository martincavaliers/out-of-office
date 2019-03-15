import React, { Component } from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";

class GuestLoginForm extends Component {
  state = {
    firstName: "",
    lastName: ""
  };

  handleFirstNameChange = e => {
    this.setState({ firstName: e.target.value });
  };

  handleLastNameChange = e => {
    this.setState({ lastName: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("submitting");
    this.props.addGuest(this.state.firstName, this.state.lastName);
    this.setState({ firstName: "", lastName: "" });
  };

  render() {
    return (
      <Container id="login-form">
        <Form onSubmit={this.handleSubmit}>
          <Row>
            <Col lg={6}>
              <div id="first-name-div">
                <Form.Group controlId="formBasicEmail">
                  {/* <Form.Label>First Name</Form.Label> */}
                  <Form.Control
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
                <Form.Group controlId="formBasicPassword">
                  {/* <Form.Label>Last Name</Form.Label> */}
                  <Form.Control
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
