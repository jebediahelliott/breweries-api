import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class BreweryList extends Component {

  render(){
    return(
      <Card style={{ width: '100%' }}>
        <Card.Body>
          <Card.Title>Breweries in City</Card.Title>
        </Card.Body>
      </Card>
    )
  }
}

export default BreweryList;
