import React, { Component } from 'react';
import './App.css';
import BreweryList from './BreweryList';
import Brewery from './Brewery';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props)
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
    .catch(res => "Render Error Message")
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path='/' exact render={() => <BreweryList breweries={this.state.breweries} googleMap={this.state.googleMap} />} />
            <Route path='/:brewery' component={Brewery} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
