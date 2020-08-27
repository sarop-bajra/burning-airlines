import React from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';

const FLIGHTS_URL = 'http://localhost:3000/flightresults';
const PLANES_URL = 'http://localhost:3000/planes';

class Flight extends React.Component {

  state = {
    origin: '',
    destination: '',
    date: '',
    planeId: 0,
    name:'',
    columns: 0,
    rows: 0,
    seatRow: 0,
    seatColumn: 0
  };


  createTable = () => {
    let table = [];
    for(let i = 0; i < this.state.rows; i++){
      let rows = [];
      for (let j = 0; j < this.state.columns; j++) {
        rows.push(<td className="seat" onClick={this.handleClick}>{`${String.fromCharCode(j+65)}${i+1}`}</td>)
      }
      table.push(<tr>{rows}</tr>)
    }
    return table
  } // create table

  handleClick = (ev) => {
    console.log(ev.target.value);
    this.setState({seat:ev.target.value})
    console.log(this.state.seat);
  }

  componentDidMount(){
    console.log('Loaded');
    axios.get(FLIGHTS_URL, {
      params: {
        flightId: this.props.match.params.query
      }
    })
    .then(res => {
      console.log(res.data);
      this.setState({origin: res.data[0].origin});
      this.setState({destination: res.data[0].destination});
      this.setState({date: res.data[0].date});
      this.setState({planeId: parseInt(res.data[0].plane_id)});
      this.setState({name: res.data[0].plane.name});
      this.setState({columns: res.data[0].plane.columns});
      this.setState({rows: res.data[0].plane.rows});
      console.log(res.data[0].plane.columns);
      console.log(res.data[0].plane.rows);
    })
    .catch( err => console.warn(err));

  } // componentDidMount

  render(){
    return(
      <div>
      <h2>Seat Map</h2>
        <p>Please choose an available seat</p>
        <div>
          <p>Date: {this.state.date}</p>
          <p>From: {this.state.origin}</p>
          <p>To: {this.state.destination}</p>
        </div>
        <h3>{this.state.name}</h3>
        <div>

          <table className="seat_map">
            {this.createTable()}
          </table>
          <p>{this.state.seat}</p>

        </div>

      </div>
    ); // return

  } // render

} // Flight

export default Flight;
