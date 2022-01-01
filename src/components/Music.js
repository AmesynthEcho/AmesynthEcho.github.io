import React, {Component} from 'react';
import '../css/Home.css'
import {Container} from 'react-bootstrap';

class Music extends Component {
    render () {
        return(
            <div className="content">
                <div className="banner">
                <Container className="home-content">
                    <h1 className="title">Music</h1>
                    {/* <h3 className="subtitle">software engineer // digital artist // graphic designer // twitch affiliate</h3> */}
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