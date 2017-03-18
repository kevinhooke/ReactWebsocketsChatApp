import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import {Bootstrap, Grid, Row, Col} from 'react-bootstrap';
import ConnectButton from '../Components/ConnectButton';
import ConnectedUserListComponent from '../Components/ConnectedUserListComponent'

class App extends Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col md={12}>
                        <h2>Chat App</h2>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <ConnectButton/>
                    </Col>
                    <Col md={8}>
                        <ConnectedUserListComponent/>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default App;
