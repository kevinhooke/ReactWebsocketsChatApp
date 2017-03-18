import React, { Component } from 'react';
import ChatStore from '../Stores/ChatStore';

class ConnectedUserListComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userNames: []
        }
    }

    handleUserNameChange(){
        var users = ChatStore.getUsers();
        this.setState({ userName : users});
    }

    componentWillMount(){
        ChatStore.addChangeListener(this.handleUserNameChange);
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
