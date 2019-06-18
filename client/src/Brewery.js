import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import GoogleMapReact from 'google-map-react';
import MapMarker from './MapMarker'


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
        <Card style={{ width: '100%' }}>
          <Card.Body>
            <Link to='/'>Back to Breweries</Link>
              <Card.Title>{brewery.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{brewery.brewery_type}</Card.Subtitle>
              <Card.Text>
              {brewery.street} {brewery.city}, {brewery.state}, {brewery.postal_code}, {brewery.country}
              </Card.Text>
            <Card.Link href={brewery.website_url}>{brewery.website_url}</Card.Link>
          </Card.Body>
        </Card>
        <div style={{ height: '60vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: this.props.location.state.googleMap }}
          defaultCenter={center}
          defaultZoom={this.props.zoom}
        >
          {(brewery.latitude && brewery.longitude) ? (
            <MapMarker
              lat={parseFloat(brewery.latitude)}
              lng={parseFloat(brewery.longitude)}
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
