import React from 'react';
import axios from 'axios';


class BurningAirlines extends React.Component {

  state = {
    flights: []
  };

  componentDidMount(){
    console.log('Loaded');
    axios.get('https://api.mocki.io/v1/b043df5a')
    .then(res => {
      console.log(res.data);
      this.setState({flights: res.data});

    })
    .catch( err => console.warn(err));

  }

  render() {
    return (
      <div className="ba">
        <h1>Burning Airlines</h1>
          <div>
          {
            // this.state.flights.reverse().map( flight => {return <div className="flight" key={ flight.city }>{ flight.content }</div>})

            this.state.flights.map( flight => {
              return <li key={ flight.city }>{flight.name}</li>
            }) // map
          }
          </div>
      </div>
    );
  } // render
} // class BurningAirlines
export default BurningAirlines;
