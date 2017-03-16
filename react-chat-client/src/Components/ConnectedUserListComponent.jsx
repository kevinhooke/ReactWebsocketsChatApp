import React, { Component } from 'react';

class ConnectedUserListComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: ""
        }
    }

    render(){

        return (
            <div>
                Currently Connected Users
            </div>
        )
    }
}

export default ConnectedUserListComponent;
