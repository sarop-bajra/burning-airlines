import React from 'react';
import './App.css';

import { Route, Link, HashRouter as Router } from 'react-router-dom';

import Home from './components/Home';
import BurningAirlines from './components/BurningAirlines';
import Flight from './components/Flight';
import Search from './components/Search';


class App extends React.Component {
  render(){

    return (
      <div className="App">
      <h1>Burning Airlines</h1>
      <hr/>
      <Router>
        <nav>
          <Link to="/">Home</Link> | &nbsp;
          <Link to="/burningairlines">BurningAirlines</Link> | &nbsp;
          <Link to="/flight">Flight</Link> | &nbsp;
          <Link to="/search">Search</Link> | &nbsp;

        </nav>
          <Route exact path="/" component={ Home }/>
          <Route exact path="/burningairlines" component={ BurningAirlines }/>
          <Route exact path="/flight/:query" component={ Flight }/>
          <Route exact path="/search" component={ Search }/>
      </Router>
      &copy; 2020 Flamin' Gallahs
      </div>
    ); // return
  } // render
} // class App

export default App;
