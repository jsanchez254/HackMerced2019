import React, { Component } from 'react';
import axios from "axios";

import { Link} from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

class navBar extends Component { 
    render() { 
        return (
            <React.Fragment>
                <nav className = "navbar is-success">
                    <div className = "navbar-end">
                        <Link  className = "navbar-item" to = "/map">
                            <Icon name='map outline'  size = "large"/> <span>Map</span>
                        </Link>
                        <Link  className = "navbar-item" to = "/map">
                            <Icon name='comment outline'  size = "large"/> <span>Messages</span>
                        </Link>
                    </div>
                </nav>
            </React.Fragment>
          );
    }
}
 
export default navBar;