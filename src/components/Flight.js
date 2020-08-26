import React from 'react';
import axios from 'axios';

const FLIGHTS_URL = 'http://localhost:3000/flights';
const PLANES_URL = 'http://localhost:3000/planes';

class Flight extends React.Component {

  state = {
    origin:'',
    destination:'',
    flights: [],
    planes: []
  };

  componentDidMount(){
    console.log('Loaded');
    axios.get(PLANES_URL)
    .then(res => {
      console.log(res.data);
      this.setState({planes: res.data});

    })
    .catch( err => console.warn(err));

  }

  handleChangeOrigin = (ev) => {
    console.log(ev.target.value);

  }

  handleChangeDestination = (ev) => {
    console.log(ev.target.value);

  }

  handleSubmit = (ev) => {



  }

  handleInput = (ev) => {

  }

  render(){
    return(
      <div>
      <h2>Seat Map</h2>
        <p>Please choose an available seat</p>
        <h3>{}</h3>


      </div>
    ); // return

  } // render

} // Flight

export default Flight;
