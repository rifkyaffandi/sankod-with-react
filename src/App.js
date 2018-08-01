import React, { Component } from "react";
import NavBar from "./component/Navbar";
import JumBotron from "./component/Jumbotron";
import CardSa from "./component/Card";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <JumBotron />
        <CardSa />
      </div>
    );
  }
}

export default App;
