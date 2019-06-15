import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { Route, Link, withRouter } from 'react-router-dom';

class BreweryCard extends Component {

  render(){
    const brewery = this.props.brewery;
    console.log(this.props);
    return(
      <div>
        <Card style={{ width: '100%' }}>
          <Card.Body>
            <Link to={{
              pathname: `/${brewery.name}`,
              state: brewery
            }}>
              <Card.Title>{brewery.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{brewery.brewery_type}</Card.Subtitle>
              <Card.Text>
              {brewery.street} {brewery.city}, {brewery.state}, {brewery.postal_code}, {brewery.country}
              </Card.Text>
            </Link>
            <Card.Link href={brewery.website_url}>{brewery.website_url}</Card.Link>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default withRouter(BreweryCard);
