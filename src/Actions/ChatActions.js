import request from 'superagent';
import Dispatcher from '../Dispatchers/Dispatcher.js';

var ChatActions = {

    retrieveConnectedUsers : function(){

        request
            .get('/users')
            .set('Accept', 'application/json')
            .end(function(err, res){
                console.log('/users called: ' + JSON.stringify(res));

                Dispatcher.dispatch({
                    actionName: 'CONNECTED_USERS_UPDATE',
                    payload: res.body});
            });

    }

}
export default ChatActions;