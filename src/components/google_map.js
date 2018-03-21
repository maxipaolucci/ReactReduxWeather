import React, { Component } from 'react';

class GoogleMap extends Component {

  /**
   * Component lifecycle hook called once the component is render in the screen
   */
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom : 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    })
  }

  render() {
    return <div ref="map" />; //with ref I can got a reference to this html div once it is render on the screen. Using this is how we make 3rd party libs integrate with react.
  }
}

export default GoogleMap;