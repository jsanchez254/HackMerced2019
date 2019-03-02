import React, { Component } from 'react';

import {Icon} from "semantic-ui-react";

//IMPORT COMPONENTS
import NavBar from "./components/navBar";
import Map from "./components/map";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar/>
        <Map/>
      </React.Fragment>
    );
  }
}

export default App;
