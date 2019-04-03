import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import "../index.scss";
import MainArea from "./MainArea";
import SideBar from "./SideBar";

class App extends Component {
  constructor(props) {
    super(props);

    // Assign state itself, and a default value for items
    this.state = {
      staff: [
        {
          firstName: "Martin",
          lastName: "Coutts",
          inOffice: true
        },
        {
          firstName: "Homer",
          lastName: "Simpson",
          inOffice: false
        },
        {
          firstName: "Kylo",
          lastName: "Ren",
          inOffice: true
        },
        {
          firstName: "Charles",
          lastName: "Xavier",
          inOffice: false
        },
        {
          firstName: "Carol",
          lastName: "Danvers",
          inOffice: false
        },
        {
          firstName: "Bobby",
          lastName: "Firmino",
          inOffice: true
        }
      ],
      guests: []
    };
  }

  // Initialise ID counter
  prevGuestId = 0;

  handleAddGuest = (firstName, lastName) => {
    this.setState(prevState => {
      return {
        guests: [
          ...prevState.guests,
          {
            firstName,
            lastName,
            id: (this.prevGuestId += 1),
            inOffice: true
          }
        ]
      };
    });
  };

  handleRemoveGuest = id => {
    console.log(id);
    this.setState(prevState => {
      return {
        guests: prevState.guests.filter(g => g.id !== id)
      };
    });
  };

  componentDidMount() {
    localStorage.setItem("staff", JSON.stringify(this.state.staff));
    this.setState(() => {
      return {
        guests: JSON.parse(localStorage.getItem("guests"))
      };
    });
  }

  componentDidUpdate() {
    localStorage.setItem("staff", JSON.stringify(this.state.staff));
    localStorage.setItem("guests", JSON.stringify(this.state.guests));
  }

  render() {
    return (
      <Row className="App" noGutters={true}>
        {/* <div className="App"> */}
        <Col lg={8} className="main-area">
          <MainArea addGuest={this.handleAddGuest} />
        </Col>

        <Col lg={4}>
          <SideBar
            staff={this.state.staff}
            guests={this.state.guests}
            removeGuest={this.handleRemoveGuest}
          />
        </Col>
        {/* </div> */}
      </Row>
    );
  }
}

export default App;
