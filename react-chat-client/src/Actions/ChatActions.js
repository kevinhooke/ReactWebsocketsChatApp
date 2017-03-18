import request from 'superagent';

var ChatActions = {

    retrieveConnectedUsers : function(){

        request
            .get('http://localhost:8090/users')
            .set('Accept', 'application/json')
            .end(function(err, res){


            });

    }

}