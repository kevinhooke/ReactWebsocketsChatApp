import AppDispatcher from '../Dispatchers/Dispatcher';
import EventEmitter from 'events';
var connectedUsers = [];

class ChatStore extends EventEmitter {

    constructor() {
        super();
        this.payload = AppDispatcher.register(this.handleAction.bind(this));
    }

    addChangeListener(callback) {
        this.on('change', callback);
    }

    removeChangeListener(callback) {
        this.removeListener('change', callback);
    }

    getUsers(){
        return connectedUsers;
    }

    handleAction(action) {

        switch (action.actionName) {

            case 'USER_UPDATE':
                console.log("ChatStore USER_UPDATE!");
                connectedUsers = action.users;
                this.emit('change');
                break;
        }
    }

}

export default new ChatStore();