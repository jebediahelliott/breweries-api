import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import axios from 'axios';

class BreweryList extends Component {
  constructor() {
    super()
    this.state = {
      breweries: []
    }
  }

  componentDidMount() {
    axios.get('https://api.openbrewerydb.org/breweries?by_city=harrisburg')
    .then(res => this.setState({
      breweries: res.data
    }))
    .catch(res => console.log(res.errors))
  }

  render(){
    return(
      <Card style={{ width: '100%' }}>
        <Card.Body>
          <Card.Title>Breweries of Harrisburg Pennsylvania</Card.Title>
        </Card.Body>
      </Card>
    )
  }
}

export default BreweryList;
