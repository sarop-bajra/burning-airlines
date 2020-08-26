import React from 'react';
import axios from 'axios';

const FLIGHTS_URL = 'http://localhost:3000/planes';

class BurningAirlines extends React.Component {

  state = {
    flights: []
  };

  componentDidMount(){
    console.log('Loaded');
    axios.get(FLIGHTS_URL)
    .then(res => {
      console.log(res.data);
      this.setState({flights: res.data});

    })
    .catch( err => console.warn(err));

  }

  render() {
    return (
      <div>

          <div>
          {
            this.state.flights.reverse().map( flight => {
              return <div className="flight">
              <li key={flight.id}> Flight Name: {flight.name}
                <li>Rows: {flight.rows}</li>
                <li>Columns: {flight.columns}</li>
              </li>
              </div>
            }) // map
          }
          </div>
      </div>
    );
  } // render
} // class BurningAirlines
export default BurningAirlines;
