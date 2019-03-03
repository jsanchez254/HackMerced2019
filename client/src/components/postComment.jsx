import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import axios from "axios";

//IMPORT SEMANTIC
import {Divider, Icon} from "semantic-ui-react";

//IMPORT JS
import {getDate} from "../assets/js/getDate";

//IMPORT JIJI!!!
import JIJI from "../assets/img/jiji.gif";

class postComment extends Component {
    state = { 
        userLocation: { lat: 37.3638376, lng: -120.4288427 }, 
        loading: true,
        zoom : 15,
        comment: "",
        date: "",
        user: 1,
        IconName: "nintendo switch",
        submitted: false
    };

    submitted (){
        if(this.state.submitted){
            return (
                <React.Fragment>                                          
                    <h1 className = "submitted">SUBMITTED!!! <img id = "jiji" src = {JIJI}/></h1>                    
                </React.Fragment>
            )
        }
        return 
    }

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
            date: getDate(),
            iconName: this.state.IconName
        }

        axios.post("http://localhost:5000/postComment", {postComment})
        .then(res =>{
            console.log(res.data);
            const submitted = true;
            this.setState({submitted});
        })
    }

    pickIcon = (name) =>{
        const IconName = name;
        this.setState({IconName});
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
                <h1 className = "cordenadas">Latitude: {this.state.userLocation.lat} | Longitude: {this.state.userLocation.lng}</h1><br/>
                <div className = "columns">
                    <div className = "column is-6">
                        <h1 className = "title">Pick Icon To be Used:</h1>
                    </div>
                    <div className = "column is-6">
                        <h1 className = "title">Current Icon: <Icon className = "currentIcon" size = "large" name = {this.state.IconName}/></h1>
                    </div>
                </div>
                <div className = "columns">
                    <div className = "column is-2">
                        <Icon onClick = {() => this.pickIcon("nintendo switch")} className = "pickIcon" size = "huge" name = "nintendo switch"/>
                    </div>
                    <div className = "column is-2">
                        <Icon onClick = {() => this.pickIcon("thumbs down")} className = "pickIcon" size = "huge" name = "thumbs down"/>
                    </div>
                    <div className = "column is-2">
                        <Icon onClick = {() => this.pickIcon("thumbs up")} className = "pickIcon" size = "huge" name = "thumbs up"/>
                    </div>
                    <div className = "column is-2">
                        <Icon onClick = {() => this.pickIcon("envelope")} className = "pickIcon" size = "huge" name = "envelope"/>
                    </div>
                    <div className = "column is-2">
                        <Icon onClick = {() => this.pickIcon("industry")} className = "pickIcon" size = "huge" name = "industry"/>
                    </div>
                    <div className = "column is-2">
                        <Icon onClick = {() => this.pickIcon("chess rook")} className = "pickIcon" size = "huge" name = "chess rook"/>
                    </div>
                </div>
                <div className = "columns">
                    <div className = "column is-2">
                        <Icon onClick = {() => this.pickIcon("bath")} className = "pickIcon" size = "huge" name = "bath"/>
                    </div>
                    <div className = "column is-2">
                        <Icon onClick = {() => this.pickIcon("hand peace")} className = "pickIcon" size = "huge" name = "hand peace"/>
                    </div>
                    <div className = "column is-2">
                        <Icon onClick = {() => this.pickIcon("eye")} className = "pickIcon" size = "huge" name = "eye"/>
                    </div>
                    <div className = "column is-2">
                        <Icon onClick = {() => this.pickIcon("heart")} className = "pickIcon" size = "huge" name = "heart"/>
                    </div>
                    <div className = "column is-2">
                        <Icon onClick = {() => this.pickIcon("bus")} className = "pickIcon" size = "huge" name = "bus"/>
                    </div>
                    <div className = "column is-2">
                        <Icon onClick = {() => this.pickIcon("rocket")} className = "pickIcon" size = "huge" name = "rocket"/>
                    </div>
                </div>
                <Divider/>
                {this.submitted()}
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