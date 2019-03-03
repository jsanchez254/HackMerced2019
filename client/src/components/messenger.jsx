import React, { Component } from 'react';

import axios from "axios";

class Messenger extends Component {
    state = {
        test: "",
        msgContent: [],
        date: [],
        lat: [],
        long: []
      }

      componentDidMount(){
        axios.get("http://localhost:5000/getMessages")
        .then(res =>{
            console.log("huh");
            const msgContent = res.data;
            this.setState({msgContent});
            console.log(res.data);
        })
        axios.get("http://localhost:5000/getDATE")
        .then(res =>{
            // console.log("huh");
            const date = res.data;
            this.setState({date});
            console.log(res.data);
        })
        axios.get("http://localhost:5000/getLAT")
        .then(res =>{
            // console.log("huh");
            const lat = res.data;
            this.setState({lat});
            console.log(res.data);
        })
        axios.get("http://localhost:5000/getLNG")
        .then(res =>{
            // console.log("huh");
            const long = res.data;
            this.setState({long});
            console.log(res.data);
        })
      }

    render() { 
        return (
            <React.Fragment>
                <h1 class="title">Current Coordinates:</h1>
                {/* <h2>Same size?</h2> */}
                <ul>
                    {/* {this.state.msgContent.map((msg, index) => 
                        <li>{msg[index]}</li>
                        )
                    } */}
                </ul>
                <div class="block">
                    <button class="button">Don't Refresh</button>
                    <a href="" className="button is-primary">Refresh</a>
                </div>
                <div class="block">
                    <div class="box">
                        <h1 class="title">Hello</h1>
                        <p>You've discovered our messages page.</p>
                    </div>
                    <table class="table is-striped is-fullwidth">
                        <thead>
                            <th>Message</th>
                            <th>Date</th>
                            <th>Lat</th>
                            <th>Long</th>
                        </thead>
                        <tbody>
                            {/* <tr> */}
                            {this.state.msgContent.map((msg, index) => 
                                <tr>
                                {msg}
                                <td>{this.state.date[index]}</td>
                                <td>{this.state.lat[index]}</td>
                                <td>{this.state.long[index]}</td>
                                </tr>
                                )
                            }
                            
                                {/* <td>Cool</td>
                                <td>Cool2</td>
                                <td>Cool3</td>
                                <td>Cool4</td> */}
                            {/* </tr> */}
                        </tbody>
                    </table>
                </div>

            </React.Fragment>
          );
    }
}
 
export default Messenger;