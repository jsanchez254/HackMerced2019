import React, { Component } from 'react';

//IMPORT SEMANTIC UI
import {Icon} from "semantic-ui-react";


class renderMapDots extends Component {

     //HANDLE FORM
    handleChange = (event) => {
        this.setState({[event.target.name] : event.target.value});
    }

    handleSubmit = (event) =>{
        // axios.post()
    }
    render() {

        return (
            <React.Fragment>
                <div className = "popup" onClick = {()=> this.props.clickEvent(this.props.message, this.props.msgID , this.props.date)} >
                    <Icon size = "huge" className = "location1" name = "star"/>
                    <form className = "popuptext" id = "myPopup">
                        <h1 className = "user">User 123Demo:</h1>
                        <br/>
                        <div className = "field">
                                <span id = "userMessage">{this.props.message}</span>
                        </div>
                                <article className="media">
                                    <div className="media-content">
                                        <div className="field">
                                        <p className="control">
                                            <textarea type ="text" name = "comment" className="textarea"
                                            onChange = {this.handleChange} placeholder="Add a comment..."/>
                                        </p>
                                        </div>
                                        <nav className="level">
                                        <div className="level-left">
                                            <div className="level-item">
                                            <button type = "submit" value = "Submit" className="button is-success">Reply</button>
                                            </div>
                                        </div>
                                        </nav>
                                    </div>
                                </article>
                    </form>
                </div>
            </React.Fragment>
          );
    }
}
 
export default renderMapDots;