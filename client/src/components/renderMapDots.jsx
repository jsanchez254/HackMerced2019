import React, { Component } from 'react';

//IMPORT COMPONENT
import Map from "./map";
import axios from 'axios';

class renderMapDots extends Component {
    render() { 
        return (
            <React.Fragment>
                {/* {this.state.message.map((msg, index) => 
                    <Map message = {this.state.message[index]} latitude = {this.state.latitude} 
                    date = {this.state.date} longitud = {this.state.longitud} key = {index}/>)
                } */}
                <h1 className = "title">COOL</h1>
 
            </React.Fragment>
          );
    }
}
 
export default renderMapDots;