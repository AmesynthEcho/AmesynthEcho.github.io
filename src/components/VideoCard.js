import React, {Component} from 'react';
import { Container, Button } from 'react-bootstrap';
import {songs} from "../js/songs";
import "../css/Card.css";

class VideoCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postObject : {
                datapath: ""
            }
        };
    }

    componentDidMount() {
        let postObject = this.state.postObject;
        postObject["datapath"] = this.props.datapath;
    }

    render() {
        return(
            <div>
                {songs.map((data, key) => {
                    return (
                        <div className="card-cont card">
                            <div className="video" key={data.link}>
                                <iframe
                                    title="Youtube"
                                    aria-hidden="true"
                                    className="embed-vid"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    webkitallowfullscreen="true"
                                    mozallowfullscreen="true"
                                    srcDoc={`<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/${data.link}/?autoplay=1><img src=https://img.youtube.com/vi/${data.link}/hqdefault.jpg><span>▶</span></a>`}
                                ></iframe>
                            </div>
                            <div className="description">
                                <h3>{data.title}</h3>
                                <p>{data.subtitle}</p>
                            </div>
                            {/* <div className="tags">
                                <Button>{data.category}</Button>
                            </div> */}
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default VideoCard