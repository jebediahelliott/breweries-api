import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import GoogleMapReact from 'google-map-react';
import MapMarker from './MapMarker'


class Brewery extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 15
  };

  render() {
    const brewery = this.props.location.state
    console.log(brewery);
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
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
          defaultCenter={{
            lat: parseFloat(brewery.latitude),
            lng: parseFloat(brewery.longitude)
          }}
          defaultZoom={this.props.zoom}
        >
          <MapMarker
            lat={parseFloat(brewery.latitude)}
            lng={parseFloat(brewery.longitude)}
            text={brewery.name}
            />
        </GoogleMapReact>
        </div>
      </div>
    )
  }
}

export default Brewery;
