import React, { Component } from 'react';

import { Link} from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import axios from "axios";

class navBar extends Component { 
    state = {
        userName: ""
    }
    componentDidMount(){
        axios.get("http://localhost:5000/auth")
        .then(res =>{
            console.log("coolaid ",  res.data);
            const userName = res.data;
            this.setState({userName});
        })
    }
    render() { 
        return (
            <React.Fragment>
                <nav className = "navbar is-info">
                    <div className = "navbar-end">
                        <Link  className = "navbar-item" to = "/post">
                            <Icon name='pencil alternate'  size = "large"/> <span>Post Comment</span>
                        </Link>
                        <Link  className = "navbar-item" to = "/map">
                            <Icon name='map outline'  size = "large"/> <span>Map</span>
                        </Link>
                        <Link  className = "navbar-item" to = "/messenger">
                            <Icon name='comment outline'  size = "large"/> <span>Messages</span>
                        </Link>
                
                        <div className = "navbar-item has-dropdown is-hoverable"  >
                            <div className = "navbar-link">
                                <Icon size = "large" name='user circle' /><span>{this.state.userName}</span>
                            </div>
                            <div className = "navbar-dropdown">
                                <Link to = "/">
                                    <a className = "navbar-item">
                                        <Icon size = "large" name='sign out'/><span>Sign Out</span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>                
                </nav>
            </React.Fragment>
          );
    }
}
 
export default navBar;