import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => 
(
  <React.Fragment>
    <h1 className = "title">hhhh</h1>
    <h1>popopopopo</h1>
    </React.Fragment>
);

class SimpleMap extends Component {
  state = { 
    userLocation: { lat: 37.3638376, lng: -120.4288427 }, 
    loading: true,
    zoom : 15
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
  }

  render() {
    return (
      // Important! Always set the container height explicitly
    <React.Fragment>
        <h1>{this.state.userLocation.lat}</h1>
        <h1>{this.state.userLocation.lng}</h1>
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyDKg5413ZLcyIicH6ybYlh_fFHSf1BnqQQ" }}
            defaultCenter={this.state.userLocation}
            defaultZoom={this.state.zoom}
            >
            {/* just for text and DOM stuff */}
            <AnyReactComponent
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