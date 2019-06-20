import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import GoogleMapReact from 'google-map-react';
import MapMarker from './MapMarker'
import BreweryCard from './BreweryCard'


class Brewery extends Component {
  static defaultProps = {
    center: {
      lat: 40.2732,
      lng: -76.8867
    },
    zoom: 15
  };
  // TODO: Account for no lat/long

  render() {
    const brewery = this.props.location.state.brewery
    let center
    if (brewery.latitude && brewery.longitude) {
      center = {
        lat: parseFloat(brewery.latitude),
        lng: parseFloat(brewery.longitude)
      }
    }else {
      center = this.props.center
    }
    return (
      <div>
        <BreweryCard brewery={brewery} withMap={true} />
        <div style={{ height: '60vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: this.props.location.state.googleMap }}
          defaultCenter={center}
          defaultZoom={this.props.zoom}
        >
          {(brewery.latitude && brewery.longitude) ? (
            <MapMarker
              lat={center.lat}
              lng={center.lng}
              text={brewery.name}
              />
          ) : (
            <MapMarker
              lat={center.lat}
              lng={center.lng}
              text="This brewery doesn't have a location yet"
              />
          )}
        </GoogleMapReact>
        </div>
      </div>
    )
  }
}

export default Brewery;
