import React, {Component} from 'react';
import {Container} from 'react-bootstrap';

class Portfolio extends Component {
    render () {
        return(
            <div className="banner">
            <Container className="home-content">
                <h1 className="title">Portfolio</h1>
                {/* <h3 className="subtitle">software engineer // digital artist // graphic designer // twitch affiliate</h3> */}
            </Container>
            </div>
            // <p>hi</p>
        );
    }
}

export default Portfolio