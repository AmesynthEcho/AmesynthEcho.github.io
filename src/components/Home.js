import {Container} from 'react-bootstrap';
import '../css/Home.css'
import React, {Component} from 'react';

class Home extends Component {
    render () {
        return(
            <div className="content">
                <div className="banner">
                    <Container className="home-content">
                        <h1 className="title">AmesynthEcho</h1>
                        <h3 className="subtitle">software engineer // digital artist // graphic designer // twitch affiliate</h3>
                    </Container>
                </div>
                <Container className="body">
                    <h2>About Me</h2>
                    <hr/>
                    <p>Hey, I'm Amesynth (pronounced similar to Amethyst), 
                        but I also go by Ames (pronounced like a nickname for
                        Amy). I'm currently a university student studying 
                        computer science but I also do digital art and graphic 
                        design on the side.</p>

                    <h2>Equipment/Software Used</h2>
                    <hr/>
                    <h3>Visual Work</h3>
                    <ul>
                        <li>Clip Studio Paint with a Wacom Intuos</li>
                        <li>Procreate</li>
                        <li>After Effects</li>
                        <li>Premiere Pro</li>
                    </ul>
                    <h3>Audio/Music Work</h3>
                    <ul>
                        <li>Audacity</li>
                        <li>Audition</li>
                        <li>Mixcraft 8</li>
                        <li>Ableton Live</li>
                    </ul>
                    <h3>Procreate Brushes</h3>
                    <ul>
                        <li><a href="https://mattyb.gumroad.com/?recommended_by=library">Flora Vegetation Brushes</a></li>
                        <li><a href="https://procreate.brushes.work/free-130-skyline-silhouette-stamps/#google_vignette">Skyline Silhouette Stamps</a></li>
                        <li><a href="https://tatyworks.gumroad.com/?recommended_by=library">Fabric Textures Brush Set</a></li>
                        <li><a href="https://maxinevee.gumroad.com/">Maxine Vee Procreate Painting Brush Set</a></li>
                    </ul>
                </Container>
            </div>
        );
    }
}

export default Home