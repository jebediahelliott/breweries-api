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
            <Card.Subtitle className="mb-2 text-muted">{brewery.brewery_type}</Card.Subtitle>
            <Card.Text>
            {brewery.street} {brewery.city}, {brewery.state}, {brewery.postal_code}, {brewery.country}
            </Card.Text>
            <ButtonGroup vertical>
              <LinkContainer id='mapLink' to={{
                pathname: `/${brewery.name}`,
                state: { brewery: brewery, googleMap: this.props.googleMap }
              }}>
                <Button variant="outline-secondary">View Map</Button>
              </LinkContainer>
              <a href={brewery.website_url}><Button variant="outline-secondary">Brewery Website</Button></a>
            </ButtonGroup>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default BreweryCard;
