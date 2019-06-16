import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

class Brewery extends Component {

  render() {
    const brewery = this.props.location.state
    return (
      <div>
        <Card style={{ width: '100%' }}>
          <Card.Body>
            <Link to='/'>Return to Breweries</Link>
              <Card.Title>{brewery.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{brewery.brewery_type}</Card.Subtitle>
              <Card.Text>
              {brewery.street} {brewery.city}, {brewery.state}, {brewery.postal_code}, {brewery.country}
              </Card.Text>
            <Card.Link href={brewery.website_url}>{brewery.website_url}</Card.Link>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default Brewery;
