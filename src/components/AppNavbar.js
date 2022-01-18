import {Container, Navbar, Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import React, {Component} from 'react';
import {FaTwitter, FaTwitch} from 'react-icons/fa';

import '../css/Navbar.css'

class AppNavbar extends Component {
    render() {
        return(
            <Navbar collapseOnSelect expand="md" variant="dark" sticky="top">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink className="navbar-link" to="/">Home</NavLink>
                            {/* <NavLink className="navbar-link" to="/#about">About</NavLink> */}
                            <NavLink className="navbar-link" to="/portfolio">Portfolio</NavLink>
                            <NavLink className="navbar-link" to="/music">Music</NavLink>
                            <NavLink className="navbar-link" to="/commissions">Commissions</NavLink>
                            <NavLink className="navbar-link" to="tos">ToS</NavLink>

                            <div className="social-icons">
                                <a className="navbar-link" href="https://twitter.com/AmesynthEcho"><FaTwitter/></a>
                                <a className="navbar-link" href="https://www.twitch.tv/amesynth"><FaTwitch/></a>
                            </div>
                        </Nav> 
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default AppNavbar