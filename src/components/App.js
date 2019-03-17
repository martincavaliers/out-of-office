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
    guests: [
      // {
      //   firstName: "Martin",
      //   lastName: "Coutts",
      //   inOffice: true,
      //   id: 1
      // },
      // {
      //   firstName: "Lauren",
      //   lastName: "King",
      //   inOffice: false,
      //   id: 2
      // },
      // {
      //   firstName: "Kylo",
      //   lastName: "Coutts",
      //   inOffice: true,
      //   id: 3
      // },
      // {
      //   firstName: "Lisa",
      //   lastName: "Green",
      //   inOffice: false,
      //   id: 4
      // },
      // {
      //   firstName: "Mitchell",
      //   lastName: "Tribisky",
      //   inOffice: false,
      //   id: 5
      // }
    ]
  };

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
      <div className="App">
        <MainArea addGuest={this.handleAddGuest} />

        <SideBar
          staff={this.state.staff}
          guests={this.state.guests}
          removeGuest={this.handleRemoveGuest}
        />
      </div>
    );
  }
}

export default App;
