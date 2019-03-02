import React, { Component } from 'react';
import {Icon} from "semantic-ui-react";


//IMPORT COMPONENTS
import NavBar from "./components/navBar";
import Map from "./components/map";
import Messenger from "./components/messenger";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Icon name = "user"/>
        <h1>HERE WE GO</h1>
        <NavBar/>
        <Map/>
        <Messenger/>
      </React.Fragment>
    );
  }
}

export default App;
