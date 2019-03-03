import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import axios from "axios";

//IMPORT COMPONENTS
import RenderMapDots from "./renderMapDots";

//IMPORT JS
import {popOut} from "../assets/js/editMapDots";
 
class SimpleMap extends Component {
  state = { 
    userLocation: { lat: 37.3638376, lng: -120.4288427 }, 
    loading: true,
    zoom : 15,
    latitude: [],
    longitud : [],
    date: [],
    message: [],
    msgID: [],
    userID: [],
    testlng: -120.42929,
    testlat: 37.36384,
    icons: [],
    Markers: ""
  };

  // handleMapClick = (event) =>{

  //   popOut(event);
  // }

// function called before compent is mounted
// allows data to be stored in variables before render
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
    //NOW LETS FETCH SOME DATA
    axios.get("http://localhost:5000/getMessages")
        .then(res =>{
            const message = res.data;
            this.setState({message});
    })
    axios.get("http://localhost:5000/getLAT")
    .then(res =>{
        const latitude = res.data;
        this.setState({latitude});
    })
    axios.get("http://localhost:5000/getLNG")
    .then(res =>{
        const longitud = res.data;
        this.setState({longitud});
    })
    axios.get("http://localhost:5000/getDATE")
    .then(res =>{
        const date = res.data;
        this.setState({date});
    })

    axios.get("http://localhost:5000/UserID")
    .then(res =>{
        const userID = res.data;
        this.setState({userID});
    })

    axios.get("http://localhost:5000/getIcon")
    .then(res =>{
        const icons = res.data;
        this.setState({icons});
    })

    axios.get("http://localhost:5000/getMSGID")
    .then(res =>{
        const msgID = res.data;
        this.setState({msgID});
        const Markers = 
        this.state.message.map((m, index) => 
          <RenderMapDots
            // clickEvent = {this.handleMapClick}
            key={index}
            lat={this.state.latitude[index]}
            lng={this.state.longitud[index]}
            text = {this.state.latitude[index]}
            message ={this.state.message[index]}
            date = {this.state.date[index]}
            msgID = {this.state.msgID[index]}
            icon = {this.state.icons[index]}
            userID = {this.state.userID[index]}
          />
        );
        this.setState({Markers})
        
    })
  }

  render() {
    return (
      // Important! Always set the container height explicitly
    <React.Fragment>
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact 
              bootstrapURLKeys={{ key: "AIzaSyDKg5413ZLcyIicH6ybYlh_fFHSf1BnqQQ" }}
              defaultCenter={this.state.userLocation}
              defaultZoom={this.state.zoom}
            >
            {this.state.Markers}
            </GoogleMapReact>

        </div>
    </React.Fragment>
    );
  }
}
 
export default SimpleMap;