import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import BreweryCard from './BreweryCard'
import axios from 'axios';

class BreweryList extends Component {
  constructor() {
    super()
    this.state = {
      breweries: null,
      googleMap: null
    }
  }

  componentDidMount() {
    axios.get('/breweries')
    .then(res => {
      this.setState({
        breweries: res.data.breweries,
        googleMap: res.data.google_map
      })
    })
    .catch(res => console.log(res))
  }

  listBreweries = (breweries) => {
    return breweries.map(brewery => <BreweryCard key={brewery.id} googleMap={this.state.googleMap} brewery={brewery} />)
  }

  render(){
    return (
      <div>
        <Card style={{ width: '100%' }}>
          <Card.Body>
            <Card.Title>Breweries of Harrisburg Pennsylvania</Card.Title>
          </Card.Body>
        </Card>
        { this.state.breweries ? this.listBreweries(this.state.breweries) : null }
      </div>
    )
  }
}

export default BreweryList;
