import React, { Component } from "react";

class Book extends Component {
  render() {
    return (
      <div className="book">
        <div className="container">
          <h4>Booking ID </h4>
          <h4>{this.props.book.id}</h4>
        </div>
        <div className="container">
          <h4>
            {this.props.book.source} to {this.props.book.dest}
          </h4>
        </div>
        <div className="container">
          <input className="head" value="Pick Up Time" disabled />
          <input className="body" value={this.props.book.time} disabled />
        </div>
        <div className="container">
          <input className="head" value="Total KM to cover" disabled />
          <input className="body" value={this.props.book.km} disabled />
        </div>
        <div className="container">
          <input className="head" value=" Vehicle type" disabled />
          <input className="body" value={this.props.book.vehicle} disabled />
        </div>
        <div className="container">
          <input className="head" value="Trip Cost" disabled />
          <input className="body" value={this.props.book.cost} disabled />
        </div>
      </div>
    );
  }
}

export default Book;
