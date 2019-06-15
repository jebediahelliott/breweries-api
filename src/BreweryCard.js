import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class BreweryCard extends Component {

  render(){
    const brewery = this.props.brewery;
    return(
      <Card style={{ width: '100%' }}>
        <Card.Body>
          <Card.Link href="#">
            <Card.Title>{brewery.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{brewery.brewery_type}</Card.Subtitle>
            <Card.Text>
            {brewery.street} {brewery.city}, {brewery.state}, {brewery.postal_code}, {brewery.country}
            </Card.Text>
          </Card.Link>
          <Card.Link href={brewery.website_url}>{brewery.website_url}</Card.Link>
        </Card.Body>
      </Card>
    )
  }
}

export default BreweryCard;
