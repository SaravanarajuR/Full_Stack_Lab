import React, { Component } from "react";
import "./index.css";

class App extends Component {
  state = {
    cu: "",
    charge: "",
    fixed: "",
    amount: "",
    sub: "",
  };
  handleSubmit = () => {
    const units = document.getElementById("input").value;
    const fixed =
      units > 100 && units <= 200
        ? [100, units > 150 ? 3.75 * (units - 150) : 0]
        : units > 200 && units <= 400
        ? [250, units > 350 ? 3.75 * (units - 350) : 0]
        : units > 400 && units <= 600
        ? [300, units > 450 ? 4.25 * (units - 450) : 0]
        : units > 600
        ? [400, 5 * (units - 600)]
        : 0;
    this.setState({
      cu: units,
      sub: 250,
      fixed: fixed[0],
      charge: fixed[1],
      amount: fixed[0] + fixed[1] - 250,
    });
  };
  render() {
    return (
      <div>
        <form>
          <div>
            <label htmlFor="input">Enter the Consumed units</label>
            <input id="input" type="number" />
          </div>
          <p onClick={this.handleSubmit}>Submit</p>
        </form>
        <div id="outputDiv">
          <div className="input">
            <input className="consume head" value="Consumed Units: " disabled />
            <input
              className="consume out"
              value={this.state.cu}
              id="consume"
              disabled
            />
          </div>
          <div className="input">
            <input className="head" value="Current Charges: " disabled />
            <input
              className="out"
              value={this.state.charge}
              id="current"
              disabled
            />
          </div>
          <div className="input">
            <input className="head" value="Fixed Charges: " disabled />
            <input
              className="out"
              value={this.state.fixed}
              id="fixed"
              disabled
            />
          </div>
          <div className="input">
            <input className="head" value="Subsidy Rs: " disabled />
            <input className="out" value={this.state.sub} id="new" disabled />
          </div>
          <div className="input">
            <input className="head" value="Net Amount Rs:" disabled />
            <input
              className="out"
              value={this.state.amount}
              id="net"
              disabled
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
