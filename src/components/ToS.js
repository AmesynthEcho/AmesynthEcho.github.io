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
                    <h3 className="subtitle">Last Updated: January 18, 2022</h3>
                </Container>
                </div>
                <Container className="body">
                    <h2>Commissions</h2>
                    <hr/>
                    <ol>
                        <li>Process - <b><u>Please note that I reserve the 
                            right to decline any commission for any reason. </u></b></li>
                            <ol>
                                <li><u>Initial discussion</u> - I require references and this 
                                    can be anything ranging from stock pictures to 
                                    stick figure sketches to get a better idea of what 
                                    you're looking for.
                                </li>
                                <li><u>Initial payment</u> - At least 50% paid upfront prior
                                    to starting on the sketches.
                                </li>
                                <li><u>First update/approval (Sketches)</u> - Revisions may 
                                    be made (max 3).
                                </li>
                                <li><u>Second update/approval (Flats)</u> - Minor adjustments/
                                    color corrections may be made.
                                </li>
                                <li><u>Final payment</u> - Remaining payment must be made 
                                    prior to shading/detail work.
                                </li>
                            </ol>
                        <li>Will Draw</li>
                        <ul>
                            <li>People/OCs, humanoid characters (ie. catpeople), fanart, simple animations (emotes only), frog</li>
                        </ul>
                        <li>Won't Draw</li>
                        <ul>
                            <li>NSFW, mecha, gore, furries, offensive content, complex animations</li>
                        </ul>
                        <li>Payments, Refunds, and Cancellations</li>
                            <ol>
                                <li>I accept payment via PayPal. </li>
                                <li>In the event that you would like to cancel
                                    before I start on your commission, I will
                                    give a full refund.
                                </li>
                                <li>If you would like to cancel after I have 
                                    started your commission, I will give a 
                                    partial refund dependent on the progress
                                    made. No refunds will be made on finished pieces. 
                                </li>
                            </ol>
                        <li>Usage of Commissioned Art</li>
                            <ol>
                                <li>None of my content may be used in any 
                                    blockchain-related technology, to include 
                                    NFTs, cryptocurrency, or future inventions 
                                    in the space.
                                </li>
                                <li>My art may only be used for personal use
                                    unless we have discussed otherwise and I 
                                    have given explicit consent for commercial 
                                    use, including adjusted rates.
                                </li>
                                <li>I reserve the right to use finished 
                                    commissions in my portfolio. 
                                </li>
                            </ol>
                    </ol>
                    <h2>Fanart/General Art</h2>
                    <hr/>
                    <ol>
                        <li>Please do not repost my art on other platforms.</li>
                        <li>If you wish to use my existing art for your 
                            content/platforms, you must contact me directly, 
                            prior to usage, to discuss crediting and payment. 
                            I will not sort out details or file transfers 
                            through a third party. I reserve the right to 
                            decline any request for any reason. Violation will 
                            result in a request for either removal or proper
                            crediting and payment or copyright claims.
                        </li>
                    </ol>
                    <h2>Contest Submissions</h2>
                    <hr/>
                    <ol>
                        <li>My art may only be used within the specified terms of 
                            the contest (ie. if the contest is for a design for 
                            one item, it may only be used for that item). 
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