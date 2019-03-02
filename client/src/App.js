import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

//IMPORT COMPONENTS
import NavBar from "./components/navBar";
import Map from "./components/map";

//IMPORT SEMANTIC UI
import {Container} from "semantic-ui-react";

class App extends Component {
  render() {
    return (
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
