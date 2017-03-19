import request from 'superagent';

var ChatActions = {

    retrieveConnectedUsers : function(){

        request
            .get('http://' + window.location.hostname + ':8080/users')
            .set('Accept', 'application/json')
            .end(function(err, res){


            });

    }

}