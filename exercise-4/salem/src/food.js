import React, { Component } from "react";

class Food extends Component {
  render() {
    return (
      <div className="prod">
        <img src={this.props.src} alt={this.props.className} />
        <h3>{this.props.name}</h3>
        <button className={this.props.className} onClick={this.props.change}>
          Buy
        </button>
        <input value={`Stock-${this.props.count}`} disabled />
      </div>
    );
  }
}

export default Food;
