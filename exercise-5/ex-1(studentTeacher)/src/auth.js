import { Component } from "react";
import Teacher from "./teacher.js";
import Student from "./student.js";

class Auth extends Component {
  constructor() {
    super();
    this.state = {
      date: "",
      slots: [],
      booked: { Monday: [], Wednesday: [], Thursday: [], Friday: [] },
      isAuthenticated: false,
      role: "",
      data: {},
      slotDetails: {
        Monday: { time: 4, slots: 8 },
        Wednesday: { time: 1, slots: 4 },
        Thursday: { time: 3, slots: 12 },
        Friday: { time: 4, slots: 4 },
      },
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    document.addEventListener("submit", (e) => {
      e.preventDefault();
      const rollno = document.getElementById("un").value;
      const username = document.getElementById("un").value;
      const role = this.state.role;
      const password = document.getElementById("pass").value;
      const auth = {
        teacher: { name: "teacher", pass: "teacher" },
        student: { name: rollno, pass: rollno },
      };
      if (role !== "") {
        if (
          username === auth[`${role}`]["name"] &&
          password === auth[`${role}`]["pass"]
        ) {
          this.setState({ isAuthenticated: true });
        } else {
          alert("Wrong Credentials");
        }
      }
    });
    let slot = {};
    for (let i of Object.keys(this.state.slotDetails)) {
      slot[i] = {};
      for (let k = 0; k < this.state.slotDetails[i].slots; k++) {
        slot[i][k + 1] = false;
      }
    }
    this.setState({ slots: slot });
  }

  handleSubmit = () => {
    const data = this.state.data;
    const count = Object.keys(data).length;
    try {
      const day = document.getElementById("day").value;
      const time = document.getElementById("slots").value;
      data[count] = {
        mem1: {
          name: document.getElementById("name1").value,
          roll: document.getElementById("rollno1").value,
        },
        mem2: {
          name: document.getElementById("name2").value,
          roll: document.getElementById("rollno2").value,
        },
        mem3: {
          name: document.getElementById("name3").value,
          roll: document.getElementById("rollno3").value,
        },
        pname: document.getElementById("pname").value,
        slot: `${day}:${time}`,
      };
      document.getElementById("form").reset();
      this.setState({
        data: data,
        booked: {
          ...this.state.booked,
          [`${day}`]: [...this.state.booked[`${day}`], time],
        },
      });
    } catch (err) {
      document.getElementById("error").style.visibility = "visible";
      setTimeout(() => {
        document.getElementById("error").style.visibility = "hidden";
      }, 2000);
    }
  };

  handleRender = () => {
    return this.state.role === "teacher" ? (
      <Teacher data={this.state.data} logout={this.logout} />
    ) : (
      <Student
        data={this.state.data}
        logout={this.logout}
        onSubmit={this.handleSubmit}
        slots={this.state.slots}
        details={this.state.slotDetails}
        booked={this.state.booked}
      />
    );
  };
  logout = (e) => {
    e.preventDefault();
    this.setState({ isAuthenticated: false });
  };
  handleChange(e) {
    this.setState({
      role: e.target.id,
    });
  }
  render() {
    return this.state.isAuthenticated ? (
      this.handleRender()
    ) : (
      <div className="authParent" id="page">
        <div className="childOne">
          <p>Choose Your Role</p>
          <div className="role">
            <button onClick={this.handleChange} id="student">
              Student
            </button>
            <button onClick={this.handleChange} id="teacher">
              Teacher
            </button>
          </div>
        </div>
        <form className="form">
          <p>Login</p>
          <input placeholder="user name" id="un" />
          <input placeholder="password" id="pass" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Auth;
