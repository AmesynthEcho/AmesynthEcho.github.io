import React, {Component} from 'react';
import {Container} from 'react-bootstrap';

class Music extends Component {
    render () {
        return(
            <div className="content">
                <div className="banner">
                <Container className="home-content">
                    <h1 className="title">Music</h1>
                </Container>
                </div>
                <Container className="body">
                    <h2>Mashups</h2>
                    <hr/>
                    <p>It's really a coin toss for cursed vs not cursed.</p>
                </Container>
            </div>
        );
    }
}

export default Music