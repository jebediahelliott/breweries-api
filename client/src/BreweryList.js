import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import BreweryCard from './BreweryCard'

class BreweryList extends Component {

  listBreweries = (breweries) => {
    return breweries.map(brewery => <BreweryCard key={brewery.id} googleMap={this.props.googleMap} brewery={brewery} />)
  }

  render(){
    return (
      <div>
        <Card style={{ width: '100%' }}>
          <Card.Body>
            <Card.Title>Breweries of Harrisburg Pennsylvania</Card.Title>
          </Card.Body>
        </Card>
        { this.props.breweries ? this.listBreweries(this.props.breweries) : null }
      </div>
    )
  }
}

export default BreweryList;
