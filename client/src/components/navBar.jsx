import React, { Component } from 'react';
import axios from "axios";

class navBar extends Component {
    
    state = {
        test: ""
    }

    componentDidMount (){
        axios.get("http://localhost:5000/test")
        .then(res => {
            const test = res.data
            this.setState({test})
        })
    }
    
    render() { 
        return (
            <React.Fragment>
                <h1>{this.state.test}</h1>
            </React.Fragment>
          );
    }
}
 
export default navBar;