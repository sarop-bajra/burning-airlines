import React from 'react';
import axios from 'axios';

const PLANES_URL = 'http://localhost:3000/planes';

class BurningAirlines extends React.Component {

  state = {
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

  render() {
    return (
      <div>

          <div>
          {
            this.state.planes.reverse().map( plane => {
              return <div className="flight">
              <li key={plane.id}> Plane Name: {plane.name}
                <li>Rows: {plane.rows}</li>
                <li>Columns: {plane.columns}</li>
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
