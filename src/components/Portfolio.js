import React, {Component} from 'react';
import {Container} from 'react-bootstrap';

class Portfolio extends Component {
    render () {
        return(
            <div className="content">
                <div className="banner">
                <Container className="home-content">
                    <h1 className="title">Portfolio</h1>
                    <h3 className="subtitle">Last Updated: January 2, 2022 (Most recent pieces can be found on Twitter)</h3>
                </Container>
                </div>
                <Container className="body">
                    
                </Container>
            </div>
        );
    }
}

export default Portfolio