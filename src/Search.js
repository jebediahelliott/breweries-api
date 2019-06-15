import React, { Component } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import axios from 'axios';

class Search extends Component {
  constructor(props){
    super(props)
    this.state = {
      searchTerm: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let parsedTerm = this.state.searchTerm.replace(/ /g, '_');
    axios.get(`https://api.openbrewerydb.org/breweries?by_city=${parsedTerm}`)
    .then(res => console.log(res))
    .catch(res => console.log(res.errors))
    this.setState({
      searchTerm: ''
    })
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  render() {
    return (
      <div>
      <InputGroup size="lg">
        <InputGroup.Prepend>
          <InputGroup.Text id="inputGroup-sizing-lg">Choose A City</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl aria-label="Large" onChange={this.handleChange} value={this.state.searchTerm} aria-describedby="inputGroup-sizing-sm" />
        <InputGroup.Append>
          <Button variant="secondary" onClick={this.handleSubmit}>Submit</Button>
        </InputGroup.Append>
      </InputGroup>
      </div>
    )
  }
}

export default Search;
