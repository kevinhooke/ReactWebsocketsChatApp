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
        console.log("onClickHandler:");

        var ws = new WebSocket('ws://localhost:8080');

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