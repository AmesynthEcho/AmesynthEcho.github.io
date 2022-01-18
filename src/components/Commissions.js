import React, {Component} from 'react';
import {Container} from 'react-bootstrap';

import "../css/Portfolio.css"

import character from "../images/sheets/Character_Art.png"
import emotes from "../images/sheets/Emotes.png"
import tos from "../images/sheets/ToS.png"
import contact from "../images/sheets/Contact.png"

class Commissions extends Component {
    render () {
        return(
            <div className="content">
                <div className="banner">
                <Container className="home-content">
                    <h1 className="title">Commissions</h1>
                    <h3 className="subtitle">Last Updated: January 18, 2022</h3>
                </Container>
                </div>
                <Container className="body">
                    <h2>Commission Sheets</h2>
                    <hr/>
                    <img className='comm-sheet' src={character}/>
                    <img className='comm-sheet' src={emotes}/>
                    <img className='comm-sheet' src={tos}/>
                    <img className='comm-sheet' src={contact}/>
                    <h2>Pricing</h2>
                    <hr/>
                    <h3>Emotes</h3>
                    <ul>
                        <li>Emotes: $40 each</li>
                        <li>Goose variants: $30 each</li>
                        <li>Animated: $50 each</li>
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
                    <h3>Process - <u>Please note that I reserve the 
                        right to decline any commission for any reason. </u></h3>
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
                    <h3>Will Draw</h3>
                    <ul>
                        <li>People/OCs, humanoid characters (ie. catpeople), fanart, simple animations (emotes only), frog</li>
                    </ul>
                    <h3>Won't Draw</h3>
                    <ul>
                        <li>NSFW, mecha, gore, furries, offensive content, complex animations</li>
                    </ul>
                    <h3>Payments, Refunds, and Cancellations</h3>
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
                    <h3>Usage of Commissioned Art</h3>
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
                    <h3>Contact</h3>
                    <ul>
                        <li>Discord (if I already have you added)</li>
                        <li>Twitter: <a href="https://twitter.com/AmesynthEcho">@AmesynthEcho</a></li>
                    </ul>
                </Container>
            </div>
        );
    }
}

export default Commissions