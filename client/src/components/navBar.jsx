import React, { Component } from 'react';

import { Link} from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

class navBar extends Component { 
    render() { 
        return (
            <React.Fragment>
                <nav className = "navbar is-success">
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
                    </div>
                </nav>
            </React.Fragment>
          );
    }
}
 
export default navBar;