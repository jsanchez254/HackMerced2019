import React, { Component } from 'react';

import { Link, Redirect } from 'react-router-dom';

import JIJI from "../assets/img/jijiS.gif";

class LogIn extends Component {
    state = {  }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit = (event) =>{
        event.preventDefault();
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
                                                <label className = "label"> Email </label>                                                    
                                                <input name = "userName" className = "input" type = "email"
                                                onChange = {this.handleChange
                                                } placeholder = "Enter Email"/>                                                                                    
                                            </div>
                                            
                                            <div className = "field ">
                                                <label className = "label"> Password </label>                                                  
                                                <input name = "password" className = "input" type = "password"
                                                onChange = {this.handleChange} placeholder = "Enter Password"/>                                                         
                                            </div>
                                            
                                        
                                            <div className = "field">
                                                <div className = "columns">
                                                        <div className = "column is-5">
                                                            <Link to = "/post"> 
                                                                <button  type = "submit" value = "Submit" className = "button is-success">
                                                                    Login
                                                                </button>
                                                            </Link>  
                                                        </div>
                                                        <div className = "column is-3">
                                                            <Link to = "/createAccount">
                                                                <button className = "button is-info">Create Account...</button>
                                                            </Link>
                                                        </div>
                                                </div>
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