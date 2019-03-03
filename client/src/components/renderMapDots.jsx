import React, { Component } from 'react';

//IMPORT SEMANTIC UI
import {Icon} from "semantic-ui-react";
import axios from 'axios';

import {popOut} from "../assets/js/editMapDots";

class renderMapDots extends Component {

    state = {
        reply : "",
        replies: [],
        userName : ""
    }

    componentDidMount (){
        const msgID = {
            realMsgID: this.props.msgID
        }
        axios.post("http://localhost:5000/getReplies" , {msgID})
        .then(res =>{
            const replies = res.data;
            this.setState({replies}); 
            console.log("HERE ", res.data);
        })
        const userID = {
            user: this.props.userID
        }

        axios.post("http://localhost:5000/getUserName" , {userID})
        .then(res =>{
            const userName = res.data;
            this.setState({userName}); 
            console.log("HERE ", res.data);
        })
    }

    fetchRepliesAgain = () => {
        const msgID = {
            realMsgID: this.props.msgID
        }
        setTimeout(() =>
            axios.post("http://localhost:5000/getReplies" , {msgID})
            .then(res =>{
                const replies = res.data;
                this.setState({replies}); 
                console.log("wooorks??");
                console.log("HERE ", res.data);
            }), 100)
    }

     //HANDLE FORM
    handleChange = (event) => {
        this.setState({[event.target.name] : event.target.value});
        console.log(event.target.value);
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        this.fetchRepliesAgain();
        const rep ={
            msgID: this.props.msgID,
            replay: this.state.reply,
            userID : this.props.userID
        }
        axios.post("http://localhost:5000/postReply", {rep})
        .then(res => {
            console.log(res.data);
        })
    }
    render() {

        return (
            <React.Fragment>
                <div className = "popup">
                    <Icon onClick = {()=> popOut(this.props.msgID)} size = "huge" className = "location1" name = {this.props.icon}/>
                    <div className = "popuptext" id = "myPopup">
                            
                            <div className = "columns">
                                <div className = "column is-6">
                                    <h1 className = "user22">{this.state.userName}</h1>
                                </div>
                                <div className = "column is-6">
                                    <h1 className = "user22"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    {this.props.date} </h1>
                                </div>
                            </div>

                            <br/>
                            <div className = "field">
                                    <span id = "userMessage">{this.props.message}</span>
                            </div>
                            <div className = "replyBox">
                            <br/>
                                {this.state.replies.slice(0).reverse().map((msg, index) => 
                                        <div className = "replies">UserTEST : {msg}</div>
                                )}
                            </div>
                        <form id = "formMap">  
                                <div className = "columns">  
                                    <div className = "column is-1"></div>   
                                        <div className = "column is-10">           
                                            <article className="media">
                                                <div className="media-content">
                                                    <div className="field">
                                                    <p className="control">
                                                        <textarea type ="text" name = "reply" className="textarea"
                                                        onChange = {this.handleChange} placeholder="Add a comment..."/>
                                                    </p>
                                                    </div>
                                                    <nav className="level">
                                                    <div className="level-left">
                                                        <div className="level-item">
                                                        <button onClick  = {this.handleSubmit}  type = "submit" value = "Submit" className="button is-success">REPLY</button>
                                                        </div>
                                                    </div>
                                                    </nav>
                                                </div>
                                            </article>
                                        </div>
                                    <div className = "column is-1"></div>
                                </div>
                        </form>
                    </div>
                </div>
            </React.Fragment>
          );
    }
}
 
export default renderMapDots;