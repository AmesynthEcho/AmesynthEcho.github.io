import React, {Component} from 'react';
import {Container} from 'react-bootstrap';

class Commissions extends Component {
    render () {
        return(
            <div className="content">
                <div className="banner">
                <Container className="home-content">
                    <h1 className="title">Commissions</h1>
                    <h3 className="subtitle">Last Updated: January 1, 2022</h3>
                </Container>
                </div>
                <Container className="body">
                    <h2>Commission Sheets</h2>
                    <hr/>
                    <p>asdfhdasifhaowiefw colors</p>
                    <h2>Pricing</h2>
                    <hr/>
                    <h3>Emotes</h3>
                    <ul>
                        <li>Static emotes: $40</li>
                    </ul>
                    <h3>Character Art - Portrait</h3>
                    <ul>
                        <li>Simple shading: $35</li>
                        <li>Full detail: $55</li>
                    </ul>
                    <h3>Character Art - Waist up</h3>
                    <ul>
                        <li>Simple shading: $50</li>
                        <li>Full detail: $70</li>
                    </ul>
                    <h3>Character Art - Full body</h3>
                    <ul>
                        <li>Simple shading: $70</li>
                        <li>Full detail: $90</li>
                    </ul>
                    <h3>Character Art - Additional pricing</h3>
                    <ul>
                        <li>Additional character: +50%</li>
                        <li>Simple background: +$10</li>
                    </ul>
                    <h2>Details</h2>
                    <hr/>
                    <h3>Process</h3>
                    <ol>
                        <li>Initial discussion - I require references and this 
                            can be anything ranging from stock pictures to 
                            stick figure sketches to get a better idea of what 
                            you're looking for.
                        </li>
                        <li>Initial payment - At least 50% paid upfront prior
                            to starting on the sketches.
                        </li>
                        <li>First update/approval (Sketches) - Adjustments may 
                            be made.
                        </li>
                        <li>Second update/approval (Flats) - Adjustments/color 
                            corrections may be made.
                        </li>
                        <li>Final payment - Remaining payment must be made 
                            prior to shading/detail work.
                        </li>
                    </ol>
                    <h3>Will Draw</h3>
                    <ul>
                        <li>People/OCs, humanoid characters (ie. catpeople), fanart</li>
                    </ul>
                    <h3>Won't Draw</h3>
                    <ul>
                        <li>NSFW, mecha, gore, furries, offensive content, complex animations</li>
                    </ul>
                    <h3>Pricing and Payment</h3>
                    <ol>
                        <li>I require at least 50% of the price upfront
                            prior to working on your commission and full
                            payment must be received prior to sending 
                            the final piece. 
                        </li>
                        <li>I accept payment via PayPal.</li>
                    </ol>
                    <h3>Refunds and Cancellation</h3>
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
                    <h3>Usage of Commissioned Art</h3>
                    <ol>
                        <li>None of my content may be used in any blockchain-
                            related technology, to include NFTs, cryptocurrency, 
                            or future inventions in the space.
                        </li>
                        <li>My art may not be used for commercial purposes unless 
                            I have given explicit permission or the art is being 
                            made for commercial purposes.
                        </li>
                        <li>My art may be used for personal use.</li>
                        <li>I reserve the right to use finished commissions in 
                            my portfolio. 
                        </li>
                    </ol>
                </Container>
            </div>
        );
    }
}

export default Commissions