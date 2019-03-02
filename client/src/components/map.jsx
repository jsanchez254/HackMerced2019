import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import axios from "axios";

//IMPORT COMPONENTS
import RenderMapDots from "./renderMapDots";
 
class SimpleMap extends Component {
  state = { 
    userLocation: { lat: 37.3638376, lng: -120.4288427 }, 
    loading: true,
    zoom : 15,
    latitude: [],
    longitud : [],
    date: [],
    message: []
  };

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
              
              <RenderMapDots
                  lat={this.state.userLocation.lat}
                  lng={this.state.userLocation.lng}
                  text={this.state.userLocation.lat}
              />
            </GoogleMapReact>

        </div>
    </React.Fragment>
    );
  }
}
 
export default SimpleMap;