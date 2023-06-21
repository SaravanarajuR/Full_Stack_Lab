import React, { Component } from "react";

class Student extends Component {
  state = {
    day: "",
  };
  changeDay = (e) => {
    this.setState({ day: e.target.value });
  };
  handleDays = () => {
    return Object.keys(this.props.details).map((b) => {
      return <option value={b}>{b}</option>;
    });
  };
  handleSlots = () => {
    let slots = [];
    let hours = this.props.details[this.state.day].time;
    let mins = 0;
    for (let i = 1; i <= this.props.details[this.state.day].slots; i++) {
      if (mins > 60) {
        hours++;
        mins = 15;
        slots.push(`${hours}:${mins}`);
      } else {
        slots.push(`${hours}:${mins}`);
      }
      mins += 15;
    }
    return slots.map((b, ind) => {
      return <option value={ind}>{b}</option>;
    });
  };
  render() {
    return (
      <div className="studentParent">
        <div className="input">
          <p>Member 1</p>
          <input type="text" id="name1" placeholder="Name" />
          <input type="text" id="rollno1" placeholder="Roll Number" />
        </div>
        <div className="input">
          <p>Member 2</p>
          <input type="text" id="name2" placeholder="Name" />
          <input type="text" id="rollno2" placeholder="Roll Number" />
        </div>
        <div className="input">
          <p>Member 3</p>
          <input type="text" id="name3" placeholder="Name" />
          <input type="text" id="rollno3" placeholder="Roll Number" />
        </div>
        <div className="input">
          <input placeholder="Project title" id="pname" />
        </div>
        <select onChange={this.changeDay}>
          <option value=""></option>
          {this.handleDays()}
        </select>
        <div>
          <select id="slots">
            <option value=""></option>
            {this.state.day !== "" ? this.handleSlots() : ""}
          </select>
        </div>
        <div className="input">
          <button onClick={this.props.logout}>Logout</button>
          <button onClick={this.props.onSubmit}>submit</button>
        </div>
      </div>
    );
  }
}

export default Student;
