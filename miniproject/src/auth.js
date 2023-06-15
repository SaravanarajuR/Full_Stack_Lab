import { Component } from "react";
import Teacher from "./teacher";
import Student from "./student";
import {Navigate} from "react-router-dom";

class Auth extends Component
{
    constructor(){
        super();
        this.state={
            isAuthenticated:false,
            role:''
        }
        this.handleChange=this.handleChange.bind(this);
}

componentDidMount(){ 
    document.addEventListener("submit",(e)=>{
        e.preventDefault();
        const rollno=document.getElementById("un").value;
        const username=document.getElementById("un").value;
        const role=this.state.role;
        const password=document.getElementById("pass").value;
        const auth={'teacher':{'name':'teacher','pass':'teacher'},
        'student':{'name':rollno,'pass':rollno}}
        if(role!==''){
            return username===auth[`${role}`]['name'] &&
            password===auth[`${role}`]['pass']?
            ()=>{this.setState({isAuthenticated:true});role==="teacher"?<Navigate to="/teacher"/>:<Navigate to="/student"/> }:alert("Wrong Credentials")
        }
    })
}

    handleChange(e){
        this.setState({role:e.target.id});
    }
    render(){
        return(
        <div className="authParent" id="page">
            <div className="childOne">
            <p>Choose Your Role</p>
            <div className="role">
                <button onClick={this.handleChange} id="student">Student</button>
                <button onClick={this.handleChange} id="teacher">Teacher</button>
            </div>
            </div>
            <form className="form">
                <p>Login</p>
            <input placeholder="user name" id="un"/>
                <input placeholder="password" id="pass"/>
                <button>Submit</button>
            </form>
        </div>
        )
    }
}

export default Auth;