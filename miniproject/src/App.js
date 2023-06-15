import {Component } from 'react';
import Authenticate from "./auth.js";
import "./index.css";
import {Route,Routes} from "react-router-dom";

class App extends Component {
  render(){
  return (
    <div className="App">
      <Authenticate/>
    </div>
  )}
}

export default App;
