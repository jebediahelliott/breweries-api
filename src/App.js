import React from 'react';
import './App.css';
import BreweryList from './BreweryList'
import Brewery from './Brewery'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={BreweryList} />
          <Route path='/:brewery' component={Brewery} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
