import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import axios from "axios";

//IMPORT SEMANTIC
import {Divider} from "semantic-ui-react";

//IMPORT JS
import {getDate} from "../assets/js/getDate";

class postComment extends Component {
    state = { 
        userLocation: { lat: 37.3638376, lng: -120.4288427 }, 
        loading: true,
        zoom : 15,
        comment: "",
        date: "",
        user: 1
    };

    handleChange = (event) =>{
        this.setState({comment: event.target.value});
        console.log(event.target.value);
    }

    handleSubmit = (event) =>{
        event.preventDefault();

        const postComment = {
            comment: this.state.comment,
            lat: this.state.userLocation.lat,
            lng: this.state.userLocation.lng,
            user: this.state.user,
            date: getDate()
        }

        axios.post("http://localhost:5000/postComment", {postComment})
        .then(res =>{
            console.log(res.data);
        })
    }

    componentDidMount =(props) => {
        navigator.geolocation.getCurrentPosition(
          position => {
            const { latitude, longitude } = position.coords;
            this.setState({
              userLocation: { lat: latitude, lng: longitude },
              loading: false
            });
          },
          () => {
            this.setState({ loading: false });
          }
        );
    }
    render() { 
        return (
            <React.Fragment>
                <h1 className = "title">Current Coordinates:</h1>
                <h1 className = "cordenadas">{this.state.userLocation.lat} , {this.state.userLocation.lng}</h1><br/>
                <Divider/>
                <form onSubmit ={this.handleSubmit}>
                <article className="media">
                    <div className="media-content">
                        <div className="field">
                        <p className="control">
                            <textarea type ="text" name = "comment" className="textarea"
                            onChange = {this.handleChange} placeholder="Add a comment..."/>
                        </p>
                        </div>
                        <nav className="level">
                        <div className="level-left">
                            <div className="level-item">
                            <button type = "submit" value = "Submit" className="button is-success">Submit</button>
                            </div>
                        </div>
                        </nav>
                    </div>
                </article>
            </form>
            </React.Fragment>
          );
    }
}
 
export default postComment;