import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

import FlightSearchResults from './FlightSearchResults';

const FLIGHTS_URL = 'http://localhost:3000/flights';

class Search extends React.Component {

  state = {
    origin: '',
    destination: '',
    searchedFlights: [],
    flights: []
  };


  handleChangeOrigin = (ev) => {
    this.setState({origin: ev.target.value});
    console.log(this.state.origin);
  };
  
  handleChangeDestination = (ev) => {
    this.setState({destination: ev.target.value});
    console.log(this.state.destination);
  };
  
  handleSubmit = (ev) => {
    ev.preventDefault();
    console.log(this.state.destination);
    console.log(this.state.origin);
    axios.get(FLIGHTS_URL, {
      params: {
        origin: this.state.origin,
        destination: this.state.destination
      }
    })
    .then(res => {
      console.log(res.data);
      this.setState({
        searchedFlights: res.data
      });
    })
    .catch(err => console.warn(err));
  };

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>

          <label>
            Origin:
            <select onChange={this.handleChangeOrigin}>
            <option value="">Select...</option>
            <option value="Sydney">Sydney</option>
            <option value="Melbourne">Melbourne</option>
            <option value="Adelaide">Adelaide</option>
            <option value="Perth">Perth</option>
            <option value="Hobart">Hobart</option>
            <option value="Canberra">Canberra</option>
            <option value="Brisbane">Brisbane</option>
            </select>
            </label>
          <br/>

          <label>
            Destination:
            <select onChange={this.handleChangeDestination}>
            <option value="">Select...</option>
            <option value="Sydney">Sydney</option>
            <option value="Melbourne">Melbourne</option>
            <option value="Adelaide">Adelaide</option>
            <option value="Perth">Perth</option>
            <option value="Hobart">Hobart</option>
            <option value="Canberra">Canberra</option>
            <option value="Brisbane">Brisbane</option>
            </select>
          </label>
          <br/>
          <input type="submit" value="Search" />
        </form>

        {
          (this.state.flights.length > 0)
          &&
          <FlightSearchResults flights={this.state.flights}/>
        }

        <p>{this.state.origin}</p>
        <p>{this.state.destination}</p>

        <div>
        <table class="table">
        <thead>
            <th>Date</th>
            <th>Flight No.</th>
            <th>From</th>
            <th>To</th>
            <th>Plane</th>
            <th>Total Seats</th>
            <th>Booked Seats</th>
        </thead>
          {
            this.state.searchedFlights.map( flight => (<Link to={`/flight/${flight.id}`}>
              <tbody>
              <td>{flight.date}</td>
              <td>{flight.id}</td>
              <td>{flight.origin}</td>
              <td>{flight.destination}</td>
              {/* <td>{flight.plane.name}</td>
              <td>{flight.plane.columns * flight.plane.rows}</td>
              <td>{flight.reservations.length}</td> */}
              </tbody>
            </Link>))
          }
        </table>
        </div>
      </div>
    );

  }

}

export default Search;
