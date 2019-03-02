import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <h1 className = "title">hhhh</h1>;
 
class SimpleMap extends Component {
  state = { 
    userLocation: { lat: 70, lng: 32 }, 
    loading: true,
    zoom : 8,
    center: {
        lat: 0,
        lng: 0
    }
  };


  componentDidMount =(props) => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        const { lat, lng } = position.coords;
        this.setState({
            center: { lat: latitude, lng: longitude }
        })
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
        <h1>{this.state.center.lng1}</h1>
        <h1>{this.state.center.lat1}</h1>
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyDKg5413ZLcyIicH6ybYlh_fFHSf1BnqQQ" }}
            defaultCenter={this.state.center}
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