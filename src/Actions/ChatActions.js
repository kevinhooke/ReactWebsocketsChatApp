import request from 'superagent';

var ChatActions = {

    retrieveConnectedUsers : function(){

        request
            .get('/users')
            .set('Accept', 'application/json')
            .end(function(err, res){
                console.log('/users called');

            });

    }

}