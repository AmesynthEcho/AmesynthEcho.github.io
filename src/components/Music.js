import React, {Component} from 'react';
import {Container} from 'react-bootstrap';

import VideoCard from './VideoCard';

class Music extends Component {
    render () {
        return(
            <div className="content">
                <div className="banner">
                <Container className="home-content">
                    <h1 className="title">Music</h1>
                    <h3 className="subtitle">It's really a coin toss for cursed vs not cursed.</h3>
                </Container>
                </div>
                <Container className="body">
                    <h2>Mashups</h2>
                    <hr/>
                    <VideoCard/>
                </Container>
            </div>
        );
    }
}

export default Music