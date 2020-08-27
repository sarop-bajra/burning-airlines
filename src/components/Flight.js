import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const FLIGHTS_URL = 'http://localhost:3000/flights';
const PLANES_URL = 'http://localhost:3000/planes';

class Flight extends React.Component {

  state = {
    origin:'',
    destination:'',
    date: '',
    planeId: 0,
    flights:[],
    planes: [],
    name:'',
    columns: 0,
    seatRow: 0,
    seatColumn: 0,
    rows: 0
  };


  createTable = () => {
    let table = [];
    for(let i = 0; i < this.state.rows; i++){
      let rows = [];
      for (let j = 0; j < this.state.columns; j++) {
        rows.push(<td onClick={this.handleClick}>{`Row ${j+1}`}</td>)
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

    axios.get(FLIGHTS_URL)
    .then(res => {
      console.log(res.data);
      this.setState({flights: res.data});

      this.state.flights.map( flight => {
        if(parseInt(this.props.match.params.query) === flight.id){
          this.setState({origin: flight.origin});
          this.setState({destination: flight.destination});
          this.setState({date: flight.date});
          this.setState({planeID: flight.plane_id});
          console.log(this.state.planeID);

        }
      });

    })
    .catch( err => console.warn(err));




    axios.get(PLANES_URL)
    .then(res => {
      console.log(res.data);
      this.setState({planes: res.data});

      this.state.planes.map( plane => {
        if(this.state.planeID === plane.id) {

          this.setState({name: plane.name});
          this.setState({columns: plane.columns});
          this.setState({rows: plane.rows});
          console.log(this.state.name);

        } // if
      }); // map

    }) // .then
    .catch( err => console.warn(err));


  } // componentDidMount

  render(){
    return(
      <div>
      <h2>Seat Map</h2>
        <p>Please choose an available seat</p>
        <h3>{this.state.name}</h3>
        <div>


        <table>
          {this.createTable()}
        </table>

        <p>{this.state.seat}</p>


        </div>


      </div>
    ); // return

  } // render

} // Flight

export default Flight;
