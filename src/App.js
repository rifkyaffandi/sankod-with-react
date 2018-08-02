import React, { Component } from "react";
import NavBar from "./component/Navbar";
import JumBotron from "./component/Jumbotron";
import CardSa from "./component/Card";
import CardSa2 from "./component/Card-ke-2";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <JumBotron />
        <CardSa />
        <CardSa2 />
      </div>
    );
  }
}

export default App;
