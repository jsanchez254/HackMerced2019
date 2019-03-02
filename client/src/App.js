import React, { Component } from 'react';
import {Icon} from "semantic-ui-react";

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';


//IMPORT COMPONENTS
import NavBar from "./components/navBar";
import Map from "./components/map";
import Messenger from "./components/messenger";

//IMPORT SEMANTIC UI
import {Container} from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Icon name = "user"/>
        <h1>HERE WE GO</h1>
        <NavBar/>
        <Map/>
        <Messenger/>
        <React.Fragment>
          <Router>
            <div>
              <Route path = "/" component = {NavBar}/>
              <Route exact path  = {['/map', '/']} component = {Map}/>
              <Route exact path  = {['/map', '/']} component = {Map}/>
              <Container>
                {/* <Route path = "/postNewQuestion" component = {postNewQuestion} /> */}
              </Container>
            </div>
          </Router>
      </React.Fragment>
    );
  }
}

export default App;
