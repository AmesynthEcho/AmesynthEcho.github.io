import React, {Component} from 'react';
import '../css/Home.css'
import {Container} from 'react-bootstrap';

class ToS extends Component {
    render () {
        return(
            <div className="content">
                <div className="banner">
                <Container className="home-content">
                    <h1 className="title">Terms of Service</h1>
                    <h3 className="subtitle">Last Updated: January 1, 2022</h3>
                </Container>
                </div>
                <Container className="body">
                    <h2>Commissions</h2>
                    <hr/>
                    <ol>
                        <li>Pricing and Payment</li>
                            <ol>
                                <li>I require at least 50% of the price upfront
                                    prior to working on your commission and full
                                    payment must be received prior to sending 
                                    the final piece. 
                                </li>
                                <li>I accept payment via PayPal.</li>
                            </ol>
                        <li>Refunds and Cancellations</li>
                            <ol>
                                <li>In the event that you would like to cancel
                                    before I start on your commission, I will
                                    give a full refund.
                                </li>
                                <li>If you would like to cancel after I have 
                                    started your commission, I will give a 
                                    partial refund dependent on the progress
                                    made.
                                </li>
                            </ol>
                        <li>Usage of Commissioned Art</li>
                            <ol>
                                <li>None of my content may be used in any 
                                    blockchain-related technology, to include 
                                    NFTs, cryptocurrency, or future inventions 
                                    in the space.
                                </li>
                                <li>My art may not be used for commercial 
                                    purposes unless I have given explicit 
                                    permission or the art is being made for 
                                    commercial purposes
                                </li>
                                <li>My art may be used for personal use.</li>
                                <li>I reserve the right to use finished 
                                    commissions in my portfolio. 
                                </li>
                            </ol>
                        <li>Process</li>
                        <li>Will Draw</li>
                            <ol>
                                <li>People/OCs</li>
                                <li>Humanoid characters (ie. catpeople)</li>
                                <li>Fanart</li>
                            </ol>
                        <li>Won't Draw</li>
                            <ol>
                                <li>NSFW</li>
                                <li>Mecha</li>
                                <li>Gore</li>
                                <li>Furries</li>
                                <li>Offensive Content</li>
                                <li>Complex animations</li>
                            </ol>
                    </ol>
                    <h2>Fanart/General Art</h2>
                    <hr/>
                    <ol>
                        <li>Please do not repost my art on other platforms.</li>
                        <li>If you wish to use my art for your content/platforms, 
                            you must contact me directly, prior to usage, to 
                            discuss crediting and payment. I will not sort out 
                            details through a third party.
                        </li>
                    </ol>
                    <h2>Contest Submissions</h2>
                    <hr/>
                    <ol>
                        <li>My art may only be used within the specified terms of 
                            the contest (ie. if the contest is for a design for 
                            one item, it may not be used for another item). 
                            This is mainly because it probably won't look that 
                            great if I design for a specific dimension and it's
                            printed as a different dimension. Printing for 
                            personal use is fine. 
                        </li>
                    </ol>
                </Container>
            </div>
        );
    }
}

export default ToS