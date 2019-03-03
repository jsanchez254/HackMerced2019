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
            // console.log("huh");
            const msgContent = res.data;
            this.setState({msgContent});
            // console.log(res.data);
        })
        axios.get("http://localhost:5000/getDATE")
        .then(res =>{
            const date = res.data;
            this.setState({date});
        })
        axios.get("http://localhost:5000/getLAT")
        .then(res =>{
            const lat = res.data;
            this.setState({lat});
        })
        axios.get("http://localhost:5000/getLNG")
        .then(res =>{
            const long = res.data;
            this.setState({long});
        })
      }

    render() { 
        return (
            <React.Fragment>
                <div class="block">
                    <table class="table is-striped is-fullwidth">
                        <thead>
                            <th>Message</th>
                            <th>Date</th>
                            <th>Lat</th>
                            <th>Long</th>
                        </thead>
                        <tbody>
                            {this.state.msgContent.map((msg, index) => 
                                <tr>
                                    <td>{this.state.msgContent[index]}</td>
                                    <td>{this.state.date[index]}</td>
                                    <td>{this.state.lat[index]}</td>
                                    <td>{this.state.long[index]}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Messenger;