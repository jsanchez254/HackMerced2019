import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

import GoogleMapReact from 'google-map-react';
// import GoogleApiWrapper from 'google-maps-react';

 
const AnyReactComponent = ({ text }) => <div>{text}</div>;

 
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

  test =() =>{
    console.log("We got something")
  }

  // navigator.geolocation.getCurrentPosition(function(position) {
  //   var pos = {
  //     lat: position.coords.latitude,
  //     lng: position.coords.longitude
  //   };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
      {this.test()}
      <button onClick={() =>this.test()}>Click me</button>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDKg5413ZLcyIicH6ybYlh_fFHSf1BnqQQ" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          // {}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text={'Kreyser Avrora'}
          />
        </GoogleMapReact>
      </div>
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