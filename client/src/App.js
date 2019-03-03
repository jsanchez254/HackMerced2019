import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

//IMPORT COMPONENTS
import NavBar from "./components/navBar";
import Map from "./components/map";
import Messenger from "./components/messenger";
import PostQuestion from "./components/postComment";
import LogIn from "./components/logIn";
import CreateAccount from "./components/createAccount";

//IMPORT CSS
import "./assets/css/container.css";

//IMPORT SEMANTIC UI
import {Container} from "semantic-ui-react";

class App extends Component {
  render() {
    return (
        <React.Fragment>
          <Router>
            <div>
              <Route exact path = "/" component = {LogIn}/>
              <Route path = {["/map", "/post", "/messenger"]}   component = {NavBar}/>
              <Route exact path  = '/map' component = {Map}/>
              <Route exact path  = '/createAccount' component = {CreateAccount}/>
              <Container>
                <Route exact path  = '/post' component = {PostQuestion}/>
                <Route path  = '/messenger' component = {Messenger}/>
              </Container>
            </div>
          </Router>
      </React.Fragment>
    );
  }
}

export default App;
