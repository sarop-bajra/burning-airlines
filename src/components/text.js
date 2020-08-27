render() {
    return (
      <div>
        <h2>Seat Map</h2>
        <p>Please choose an available seat</p>
        <div className="grid-container" >
          {/* make a row for number of rows */}
          { [...Array(this.props.rows)].map((e, i) =>
            <div className="grid-row" key={i}>
              {/* row letter */}
              <span className="row-num">{ String.fromCharCode(i+65) }</span>
              {/*  make seat re num of cols */}
              { [...Array(this.props.cols)].map((e, j) =>
                <Seat
                  key={`${String.fromCharCode(i+65)}${j+1}`}
                  seatId={`${String.fromCharCode(i+65)}${j+1}`}
                  takenSeats={ this.props.takenSeats }
                  getSelectedSeat={ this.getSelectedSeat }
                  selectedSeat={ this.state.selectedSeat }
                />
              ) }
            </div>
          ) }
        </div>
        <p>Selected Seat: { this.state.selectedSeat }</p>
      </div>
    );
  }
}
