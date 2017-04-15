import React, { Component } from 'react';
import ChatStore from '../Stores/ChatStore';

class ConnectedUserListComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    handleConnectedUsersChange = () => {
        var usersFromStore = ChatStore.getUsers();
        this.setState({ users : usersFromStore});
    }

    componentWillMount = () => {
        ChatStore.addChangeListener(this.handleConnectedUsersChange);
    }




    render(){
        var users = "";
        for(var user in this.state.users){
            users += "<li>" + user + "</li>";
        }

        return (
            <div>
                <div>Currently Connected Users:</div>
                <div>
                    <ul>
                        {users}
                    </ul>
                </div>
            </div>
        )
    }
}

export default ConnectedUserListComponent;
