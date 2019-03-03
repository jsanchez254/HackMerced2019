import React, { Component } from 'react';

import { Link, Redirect } from 'react-router-dom';

import JIJI from "../assets/img/jijiS.gif";
import axios from 'axios';

class LogIn extends Component {
    state = {
        userName : "",
        password: "",
        exists: "nope"
    }

    handlePass = () =>{
        console.log(typeof this.state.exists);
        if(this.state.exists == true){
            return (<Redirect to = "/post"/>);
        }
        else if(this.state.exists == false && this.state.exists != "nope"){
            return (<span className = "wrong">Wrong Password or User Name...try again</span>)
        }
        return;
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
        console.log(event.target.value);
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        const userInfo = {
            userName: this.state.userName,
            password: this.state.password
        }
        axios.post("http://localhost:5000/auth", {userInfo})
        .then (res => {
            console.log(res.data);
            const exists = res.data;
            this.setState({exists});
        })
    }

    render() { 

        return (
            <React.Fragment>
                <section className = "hero is-success is-fullheight">
                        <div className  ="hero-body"> 
                            <div className = "container">
                                <div className = "columns is-centered">
                                    <div className = "column is-5-tablet is-3-desktop is-3-widescreen">
                                        <form onSubmit = {this.handleSubmit} className = "box">
                                            <div className="field has-text-centered">
                                                <img src= {JIJI} width="167"/>
                                            </div>
                                            
                                            <div className = "field ">
                                                <label className = "label"> User Name </label>                                                    
                                                <input name = "userName" className = "input"
                                                onChange = {this.handleChange
                                                } placeholder = "Enter User Name"/>                                                                                    
                                            </div>
                                            
                                            <div className = "field ">
                                                <label className = "label"> Password </label>                                                  
                                                <input name = "password" className = "input" type = "password"
                                                onChange = {this.handleChange} placeholder = "Enter Password"/>                                                         
                                            </div>
                                            
                                        
                                            <div className = "field">
                                                <div className = "columns">
                                                        <div className = "column is-5">
                                                            {/* <Link to = "/post">  */}
                                                                <button type = "submit" value = "Submit" className = "button is-success">
                                                                    Login
                                                                </button>
                                                            {/* </Link>   */}
                                                        </div>
                                                        <div className = "column is-3">
                                                            <Link to = "/createAccount">
                                                                <button className = "button is-info">Create Account...</button>
                                                            </Link>
                                                        </div>
                                                </div>
                                                {this.handlePass()}
                                            </div>

                                             <div>
                                                
                                            </div>
                                        </form>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </section>
            </React.Fragment>
          );
    }
}
 
export default LogIn;