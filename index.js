const WebSocket = require('ws');
var express = require('express');
var connectedUsers = [];

const wss = new WebSocket.Server({ port: 8080, headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "http://localhost:3000",
    "Access-Control-Allow-Methods": "PUT, GET, POST, DELETE, OPTIONS"
} });

//init Websocket ws and handle incoming connect requests
wss.on('connection', function connection(ws) {
    console.log("connection ...");

    //on connect message
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
        connectedUsers.push(message);
    });

    ws.send('something');
});

//init Express REST apis
var app = express();

//init Express Router
var router = express.Router();
var port = process.env.PORT || 80;


//default/test route
router.get('/status', function(req, res) {
    res.json({ status: 'App is running!' });
});

//default/test route
router.get('/users', function(req, res) {
    res.json(connectedUsers);
});

//connect path to router
app.use("/", router);
app.use(express.static('build'))
app.listen(port, function () {
    console.log('Chat Server REST server listening on port 80!')
})