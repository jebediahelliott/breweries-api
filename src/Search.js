import React, { Component } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

class Search extends Component {



  render() {
    return (
      <div>
      <InputGroup size="lg">
        <InputGroup.Prepend>
          <InputGroup.Text id="inputGroup-sizing-lg">Choose A City</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
        <InputGroup.Append>
          <Button variant="secondary">Submit</Button>
        </InputGroup.Append>
      </InputGroup>
      </div>
    )
  }
}

export default Search;
