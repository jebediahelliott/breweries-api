import React from 'react';
import './App.css';
import BreweryList from './BreweryList';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
          <Route path='/' exact component={BreweryList} />
          <Route path='/:brewery' render={({location}) => console.log(location.state)} />
      </Router>
    </div>
  );
}

export default App;
