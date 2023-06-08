import React, { Component } from "react";
import { v4 } from "uuid";
import Book from "./booking";

class Taxi extends Component {
  constructor() {
    super();
    this.state = {
      input: null,
      cities: [
        "Anna nagar",
        "Saithapet",
        "Vadapalani",
        "Porur",
        "Central Railway Station",
        "Egmore",
        "Alandur",
        "T Nagar",
        "Kotturpuram",
        "Guindy",
        "Mambalam",
        "Thenampet",
        "Rayapet",
      ],
      id: "",
      source: false,
      dest: false,
      time: false,
      km: 0,
      cost: "Enter source and destination",
      booked: false,
      vehicle: false,
      warning: "",
    };
  }
  handleChange = (e) => {
    this.setState({ input: e.target.value.toUpperCase() });
  };

  handleSelect = (e) => {
    if (e.target.id === "source" || e.target.id === "dest") {
      const citiesModified = this.state.cities.filter((k) => {
        return e.target.value === k ? 0 : 1;
      });
      this.setState({ cities: citiesModified });
      this.setState(() => {
        return e.target.id === "dest"
          ? { dest: e.target.value }
          : { source: e.target.value };
      });
    }

    this.setState({ time: e.target.value === "" ? false : e.target.value });

    if (this.state.source && this.state.dest) {
      if (!this.state.km > 0) {
        this.setState({ km: Math.floor(Math.random() * 40) + 1 });
      }
      if (document.getElementById("car").value !== "") {
        const car = document.getElementById("car").value.split("-");
        this.setState({
          cost: Number(car[1]) * this.state.km,
          vehicle: car[0],
        });
      }
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (
      this.state.source &&
      this.state.dest &&
      this.state.time &&
      this.state.vehicle
    ) {
      this.setState({
        time: document.getElementById("time").value,
        id: v4(),
        booked: true,
      });
    } else {
      this.setState({ warning: "Fill all fields to Continue" });
    }
  };

  handleCities = () => {
    const suggest = this.state.cities.filter((k) => {
      return k.toUpperCase().startsWith(this.state.input) ? 1 : 0;
    });
    return suggest.map((k) => {
      return <option key={k} value={k} />;
    });
  };

  render() {
    return (
      <div className="taxiParent">
        {this.state.booked ? (
          <Book book={this.state} />
        ) : (
          <form className="taxi">
            <input
              placeholder="Source"
              id="source"
              list="cities"
              onSelect={this.handleSelect}
              onChange={this.handleChange}
              autoComplete="off"
              required
            />
            <datalist id="cities">{this.handleCities()}</datalist>
            <input
              placeholder="destination"
              id="dest"
              list="cities"
              onChange={this.handleChange}
              onSelect={this.handleSelect}
              autoComplete="off"
              required
            />
            <input id="time" type="time" required></input>
            <input id="km" value={this.state.km} disabled />
            <select
              placeholder="Car type"
              id="car"
              onChange={this.handleSelect}
              autoComplete="off"
              required
            >
              <option value="" default></option>
              <option value="Sedan-15">Sedan</option>
              <option value="SUV-20">SUV</option>
              <option value="Compact-25">Compact</option>
            </select>
            <input id="cost" value={this.state.cost} disabled />
            {this.state.warning !== "" ? (
              <input id="warn" value={this.state.warning} disabled />
            ) : (
              ""
            )}
            <button onClick={this.handleSubmit}>Book</button>
          </form>
        )}
      </div>
    );
  }
}

export default Taxi;
