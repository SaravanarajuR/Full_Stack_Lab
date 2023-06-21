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
      console.log(this.props.booked[this.state.day], ind);
      if (this.props.booked[this.state.day].includes(`${ind}`)) {
        return (
          <option value={ind} className="warning" disabled>
            Booked already {b}
          </option>
        );
      } else {
        return <option value={ind}>{b}</option>;
      }
    });
  };
  render() {
    return (
      <form id="form" className="studentParent">
        <div className="input">
          <p>Member 1</p>
          <input type="text" id="name1" placeholder="Name" required />
          <input type="text" id="rollno1" placeholder="Roll Number" required />
        </div>
        <div className="input">
          <p>Member 2</p>
          <input type="text" id="name2" placeholder="Name" required />
          <input type="text" id="rollno2" placeholder="Roll Number" required />
        </div>
        <div className="input">
          <p>Member 3</p>
          <input type="text" id="name3" placeholder="Name" required />
          <input type="text" id="rollno3" placeholder="Roll Number" required />
        </div>
        <div className="input">
          <p>Project Details and Slot Booking</p>
          <input placeholder="Project title" id="pname" required />
        </div>
        <select id="day" onChange={this.changeDay} required>
          <option value="">Choose a day</option>
          {this.handleDays()}
        </select>
        <div>
          <select id="slots" required>
            <option value="">Choose a slot</option>
            {this.state.day !== "" ? this.handleSlots() : ""}
          </select>
        </div>
        <div className="inputBtn">
          <button onClick={this.props.logout}>Logout</button>
          <button
            onClick={(e) => {
              e.preventDefault();
              this.props.onSubmit();
            }}
          >
            submit
          </button>
        </div>

        <p id="error">Fill out all fields</p>
      </form>
    );
  }
}

export default Student;
