import React, { Component } from 'react';

class ConnectButton extends Component {

    constructor(props){
        super(props);
        this.state = {
            name : ""
        }

    }

    onChangeHandler = (e) => {
        this.setState({ name : e.target.value });
    }

    onClickHandler = () => {
        console.log("onClickHandler:" + window.location.hostname);
        //  + ':8080'
        console.log("protocol: " + window.location.protocol);
        var ws = new WebSocket(window.location.protocol == 'https:' ? 'wss://' : 'ws://'
             + window.location.host);
        //var ws = new WebSocket('ws://127.0.0.1:8000');

        // ws.onopen = function () {
        //     ws.send(this.state.name);
        // };

        ws.onopen = () => {
            ws.send(this.state.name);
        };

        ws.onmessage = (data, flags) => {
            console.log("message received");
        };
    }

    render(){
        return (
            <div>
                <label>Your name:</label>
                <input type="text" value={this.state.name} onChange={this.onChangeHandler.bind(this)}/>
                <button onClick={this.onClickHandler.bind()}>Connect</button>
            </div>
        )
    }
}

export default ConnectButton