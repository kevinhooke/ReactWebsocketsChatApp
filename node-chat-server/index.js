const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080, headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "http://localhost:3000",
    "Access-Control-Allow-Methods": "PUT, GET, POST, DELETE, OPTIONS"
} });

wss.on('connection', function connection(ws) {
    console.log("connection ...");

    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
    });

    ws.send('something');
});