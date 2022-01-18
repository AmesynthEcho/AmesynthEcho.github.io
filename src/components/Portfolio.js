import React, {Component} from 'react';
import {Container} from 'react-bootstrap';

import PortfolioCard from './PortfolioCard';

class Portfolio extends Component {
    
    render () {
        return(
            <div className="content">
                <div className="banner">
                <Container className="home-content">
                    <h1 className="title">Portfolio</h1>
                    <h3 className="subtitle">Last Updated: January 17, 2022, roughly chronological</h3>
                </Container>
                </div>
                <Container className="body">
                    <PortfolioCard/>
                </Container>
            </div>
        );
    }
}

export default Portfolio