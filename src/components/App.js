import React, { Component } from "react";
import "../index.scss";
import MainArea from "./MainArea";
import SideBar from "./SideBar";

class App extends Component {
  state = {
    staff: [
      {
        firstName: "Martin",
        lastName: "Coutts",
        inOffice: true
      },
      {
        firstName: "Lauren",
        lastName: "King",
        inOffice: false
      },
      {
        firstName: "Kylo",
        lastName: "Coutts",
        inOffice: true
      },
      {
        firstName: "Lisa",
        lastName: "Green",
        inOffice: false
      },
      {
        firstName: "Mitchell",
        lastName: "Tribisky",
        inOffice: false
      }
    ],
    guests: []
  };

  handleAddGuest = (firstName, lastName) => {
    this.setState(prevState => {
      return {
        guests: [
          ...prevState.guests,
          {
            firstName,
            lastName
          }
        ]
      };
    });
  };

  render() {
    return (
      <div className="App">
        <MainArea addGuest={this.handleAddGuest} />

        <SideBar staff={this.state.staff} guests={this.state.guests} />
      </div>
    );
  }
}

export default App;
