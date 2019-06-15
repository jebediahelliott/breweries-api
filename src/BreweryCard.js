import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class BreweryCard extends Component {

  render(){
    return(
      <Card style={{ width: '100%' }}>
        <Card.Body>
          <Card.Link href="#">
            <Card.Title>Brewery Name</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Brewery Type</Card.Subtitle>
            <Card.Text>
            2235 N Atherton St
            State College, Pennsylvania, 16803-1529, United States
            </Card.Text>
          </Card.Link>
        </Card.Body>
      </Card>
    )
  }
}

export default BreweryCard;
