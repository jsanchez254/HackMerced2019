import React, { Component } from 'react';

//IMPORT SEMANTIC UI
import {Icon} from "semantic-ui-react";
import axios from 'axios';


class renderMapDots extends Component {

    state = {
        reply : "",
        replies: []
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
    }

     //HANDLE FORM
    handleChange = (event) => {
        this.setState({[event.target.name] : event.target.value});
        console.log(event.target.value);
    }

    handleSubmit = (event) =>{
        event.preventDefault();
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
                <div className = "popup" onClick = {()=> this.props.clickEvent(this.props.message, this.props.msgID , this.props.date)} >
                    <Icon size = "huge" className = "location1" name = "star"/>
                    <div className = "popuptext" id = "myPopup">
                            <h1 className = "user">User 123Demo:</h1>
                            <br/>
                            <div className = "field">
                                    <span id = "userMessage">{this.props.message}</span>
                            </div>
                            <div className = "replyBox">
                            <br/>
                                {this.state.replies.map((msg, index) => 
                                        <div className = "replies">UserTEST : {msg}</div>
                                )}
                            </div>
                        <form id = "formMap" onSubmit  = {this.handleSubmit}>  
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
                                                        <button type = "submit" value = "Submit" className="button is-success">REPLY</button>
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