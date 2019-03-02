import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

import GoogleMapReact from 'google-map-react';
// import GoogleApiWrapper from 'google-maps-react';

 
const AnyReactComponent = ({ text }) => <div>{text}</div>;

// export class CurrentLocation extends React.Component {

//   [...]
  
//   }
//   export default CurrentLocation;
  
//   CurrentLocation.defaultProps = {
//     zoom: 14,
//     initialCenter: {
//       lat: -1.2884,
//       lng: 36.8233
//     },
//     centerAroundCurrentLocation: false,
//     visible: true
//   };
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
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
    );
  }
}
 
export default SimpleMap;