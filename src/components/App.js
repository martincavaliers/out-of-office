import React, { Component } from "react";
import "../App.css";
import MainArea from "./MainArea";

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
    ]
  };

  render() {
    return (
      <div className="App">
        <MainArea />
      </div>
    );
  }
}

export default App;
