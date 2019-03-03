import React, { Component } from 'react';

//IMPORT SEMANTIC UI
import {Icon} from "semantic-ui-react";

//IMPORT JS
import {renderDots} from "../assets/js/editMapDots";

class renderMapDots extends Component {
    handleDots = () =>{
        renderDots(this.props.message, this.props.msgID , this.props.date);
    }
    render() { 
        return (
            <React.Fragment>
                <h1 className = "title"><Icon className = "location1" name = "star"/></h1>
                <div>
                    <p className = "mapBox"></p>
                </div>
                {this.handleDots()}
            </React.Fragment>
          );
    }
}
 
export default renderMapDots;