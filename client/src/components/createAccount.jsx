import React, { Component } from 'react';

import { Link} from 'react-router-dom';

//IMPORT SEMANTIC UI
import { Icon } from 'semantic-ui-react'

//IMPORT AXIOS
import axios from "axios";

import JIJI from "../assets/img/jijiS.gif";

class createAccount extends Component {
    state = { 
     }


     handleChange = (event) =>{
        this.setState({[event.target.name]: event.target.value});
     }

     handleSubmit = (event) =>{
        event.preventDefault();
     }
    render() { 
        return (
            <React.Fragment>
               <section className = "hero is-info is-fullheight">
                    <Link to = "/">
                        <button className = "button is-success"><Icon name = "arrow alternate circle left"/>&nbsp;&nbsp;Back To Log In</button>
                    </Link>
                        <div className  ="hero-body"> 
                            <div className = "container">
                                <div className = "columns is-centered">
                                    <div className = "column is-8">
                                        <form onSubmit = {this.handleSubmit} className = "box">
                                            <div className="field has-text-centered">
                                                <img src= {JIJI} width="167"/>
                                            </div>
                                                                                                                                                                                    
                                            <div className = "field ">
                                                <label className = "label"> User Name: </label>
                                                <input name = "userName" className = "input"
                                                onChange = {this.handleChange
                                                } placeholder = "Enter User Name"/>                                                                                                        
                                            </div>

                                            <div className = "field ">
                                                <label className = "label"> Email: </label>                                                   
                                                <input name = "email" className = "input" type = "email"
                                                onChange = {this.handleChange
                                                } placeholder = "Enter Email"/>                                                                                                               
                                            </div>

                                            <div className = "field ">
                                                <label className = "label"> Password: </label>                                                    
                                                <input name = "password" className = "input" type = "email"
                                                onChange = {this.handleChange
                                                } placeholder = "Enter Email"/>                                                                                                            
                                            </div>                                                                                                                             
                                            <div className = "field">
                                                <button onClick={this.handleSubmit}   type = "submit" value = "Submit" 
                                                className = "button is-success">
                                                    SUBMIT
                                                </button>
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
 
export default createAccount;