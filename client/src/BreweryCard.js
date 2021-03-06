import React, { Component } from 'react';
import { Card, Button, ButtonGroup } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


class BreweryCard extends Component {

  render(){
    const brewery = this.props.brewery;
    return (
      <div>
        <Card style={{ width: '100%' }}>
          <Card.Body>
            <Card.Title>{brewery.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Brewery Type: {brewery.brewery_type}</Card.Subtitle>
            <Card.Text>
            {brewery.street} {brewery.city}, {brewery.state}, {brewery.postal_code}, {brewery.country}
            </Card.Text>
            <ButtonGroup>
              <LinkContainer id='mapLink' to={{
                pathname: this.props.withMap ? '/' : `/${brewery.name}`,
                state: { brewery: brewery, googleMap: this.props.googleMap }
              }}>
                <Button variant="secondary" className="rounded-0">
                  {this.props.withMap ? 'Back to Breweries' : 'View Map' }
                </Button>
              </LinkContainer>
              <a href={brewery.website_url}>
                <Button variant="secondary" className="rounded-0">Brewery Website</Button>
              </a>
            </ButtonGroup>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default BreweryCard;
