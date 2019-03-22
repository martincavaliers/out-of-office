import React, { Component } from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";

class GuestLoginForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    formErrors: { firstName: "", lastName: "" },
    firstNameValid: false,
    lastNameValid: false,
    validated: false
  };

  handleFirstNameChange = e => {
    this.setState({ firstNameValid: true });
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
    e.preventDefault();
    const isValid = this.handleValidation(
      this.state.firstName,
      this.state.lastName
    );

    if (isValid) {
      // this.setState(prevState => {
      //   return {
      //     validated: true
      //   };
      // });
      this.props.addGuest(this.state.firstName, this.state.lastName);
      this.setState({ firstName: "", lastName: "" });
    } else {
      console.log("Number in input");
    }
  };

  render() {
    // const { validated } = this.state;
    return (
      <Container id="login-form">
        <Form
          noValidate
          validated={this.state.validated}
          onSubmit={this.handleSubmit}
        >
          <Row>
            <Col lg={6}>
              <div id="first-name-div">
                <Form.Group controlId="validationCustom01">
                  {/* <Form.Label>First Name</Form.Label> */}
                  <Form.Control
                    required
                    type="text"
                    placeholder="First Name"
                    value={this.state.firstName}
                    onChange={this.handleFirstNameChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please Enter Valid Name
                  </Form.Control.Feedback>
                </Form.Group>
              </div>
            </Col>
            <Col lg={6}>
              <div id="last-name-div">
                <Form.Group controlId="validationCustom02">
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
