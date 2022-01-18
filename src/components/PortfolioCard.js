import React, {Component} from 'react';
import {Container, Button} from 'react-bootstrap';
import '../css/Portfolio.css';

import emotes from "../images/portfolio/emote_sheet.png"
import bad_kitty from "../images/portfolio/bad_kitty.png"
import crunchy_nightmare_2 from "../images/portfolio/crunchys_little_nightmare_redraw.png"
import piku_dance from "../images/portfolio/piku_dance.gif"
import hjonk_party from "../images/portfolio/hjonk_party.gif"
import demon_boys from "../images/portfolio/demon_boys_service_workers.png"
import rorokonaa from "../images/portfolio/rorokonaa_dtiys.png"
import crunchy_nightmare from "../images/portfolio/crunchys_little_nightmare.png"
import spotify_wrapped from "../images/portfolio/spotify wrapped 2021_thumbnail.png"
import crunchy_catboyevember from "../images/portfolio/crunchy_catboyevember.png"
import crunchy_match from "../images/portfolio/crunchy_perfect match.PNG"
import mc_catboyevember from "../images/portfolio/maine coon_catboyevember.png"
import fall_witch from "../images/portfolio/oc_fall witch.png"
import nova_pfp from "../images/portfolio/oc_nova pfp.png"
import vi_thumbnail from "../images/portfolio/vinyl infomercial_thumbnail.png"
import vi_cosy from "../images/portfolio/vinyl infomercial_The Cosy Collection.png"
import vi_demon from "../images/portfolio/vinyl infomercial_The Demon Boys.png"
import vi_hades from "../images/portfolio/vinyl infomercial_In the House of Hades.png"
import vi_poke from "../images/portfolio/vinyl infomercial_poke.gif"
import stargazing from "../images/portfolio/oc_stargazing.png"
import moral_yandere from "../images/portfolio/moral art contest_animated.GIF"
import isometric_cafe from "../images/portfolio/oc_Isometric_Cafe.png"
import nonoy from "../images/portfolio/nonoy_pfp.png"
import crunchy_catbox from "../images/portfolio/crunchy_catboy box anim test.gif"
import hjonk_dark from "../images/portfolio/hjonk_dark.png"
import hjonk_light from "../images/portfolio/hjonk_light.png"
import crunchy_claire from "../images/portfolio/crunchy_claire.png"
import rainy_days from "../images/portfolio/oc_rainy day final.png"
import nova from "../images/portfolio/oc_nova.png"
import mermay_2021 from "../images/portfolio/oc_mermay2021.png"
import court_case from "../images/portfolio/crumbs v demon boys.png"
import crunchy_lofi from "../images/portfolio/crunchy_lofi cosytrap.png"
import frog from "../images/portfolio/oc_frog_scream.png"

class PortfolioCard extends Component {

    render () {
        return( 
            <div className="port-cont">
                <div className="port card ">
                    <img className="port-piece" src={emotes} alt="emotes"/>
                    <h4 className="port-title">Emotes</h4>
                </div>

                <div className="port card ">
                    <img className="port-piece" src={bad_kitty} alt="bad kitty"/>
                    <h4 className="port-title">Bad Kitty</h4>
                </div>

                <div className="port card ">
                    <img className="port-piece" src={crunchy_nightmare_2}/>
                    <h4 className="port-title">Crunchy's Little Nightmare Redraw</h4>
                </div>

                <div className="port card ">
                    <img className="port-piece" src={piku_dance}/>
                    <h4 className="port-title">Piku Dance</h4>
                </div>

                <div className="port card ">
                    <img className="port-piece" src={hjonk_party}/>
                    <h4 className="port-title">Hjonk Celebrate</h4>
                </div>

                <div className="port card">
                    <img className="port-piece" src={demon_boys}/>
                    <h4 className="port-title">Demon Boys as Service Workers</h4>
                </div>

                <div className="port card">
                    <img className="port-piece" src={rorokonaa}/>
                    <h4 className="port-title">Rorokonaa DTIYS</h4>
                </div>

                <div className="port card">
                    <img className="port-piece" src={crunchy_nightmare}/>
                    <h4 className="port-title">Crunchy's Little Nightmare</h4>
                </div>

                <div className="port card">
                    <img className="port-piece" src={spotify_wrapped}/>
                    <h4 className="port-title">Spotify Wrapped 2021 Thumbnail</h4>
                </div>

                <div className="port card">
                    <img className="port-piece" src={crunchy_catboyevember}/>
                    <h4 className="port-title">Catboyevember - Crunchy</h4>
                </div>

                <div className="port card">
                    <img className="port-piece" src={crunchy_match}/>
                    <h4 className="port-title">Perfect Match</h4>
                </div>
                
                <div className="port card">
                    <img className="port-piece" src={mc_catboyevember}/>
                    <h4 className="port-title">Catboyevember - Maine Coon</h4>
                </div>

                <div className="port card">
                    <img className="port-piece" src={fall_witch}/>
                    <h4 className="port-title">Fall Witch</h4>
                </div>

                <div className="port card">
                    <img className="port-piece" src={nova_pfp}/>
                    <h4 className="port-title">Nova pfp</h4>
                </div>

                <div className="port card">
                    <img className="port-piece" src={vi_thumbnail}/>
                    <h4 className="port-title"><a href="https://www.youtube.com/watch?v=5UiZvwqr26I">Vinyl Infomercial - Animation</a></h4>
                </div>

                <div className="port card">
                    <img className="port-piece" src={vi_cosy}/>
                    <h4 className="port-title">Vinyl Infomercial - The Cosy Collection Cover</h4>
                </div>

                <div className="port card">
                    <img className="port-piece" src={vi_demon}/>
                    <h4 className="port-title">Vinyl Infomercial - The Demon Boys</h4>
                </div>

                <div className="port card">
                    <img className="port-piece" src={vi_hades}/>
                    <h4 className="port-title">Vinyl Infomercial - In the House of Hades</h4>
                </div>

                <div className="port card">
                    <img className="port-piece" src={vi_poke}/>
                    <h4 className="port-title">Vinyl Infomercial - Poke</h4>
                </div>

                <div className="port card">
                    <img className="port-piece" src={stargazing}/>
                    <h4 className="port-title">Stargazing</h4>
                </div>

                <div className="port card">
                    <img className="port-piece" src={moral_yandere}/>
                    <h4 className="port-title">And I love you. Every part of you. - Digital Yandere</h4>
                </div>

                <div className="port card">
                    <img className="port-piece" src={isometric_cafe}/>
                    <h4 className="port-title">Isometric Cafe</h4>
                </div>

                <div className="port card">
                    <img className="port-piece" src={nonoy}/>
                    <h4 className="port-title">Nonoy pfp</h4>
                </div>

                <div className="port card">
                    <img className="port-piece" src={crunchy_catbox}/>
                    <h4 className="port-title">Catboy in a Box - Animation Test</h4>
                </div>

                <div className="port card">
                    <img className="port-piece" src={hjonk_dark}/>
                    <h4 className="port-title">Hjonk - Dark</h4>
                </div>

                <div className="port card">
                    <img className="port-piece" src={hjonk_light}/>
                    <h4 className="port-title">Hjonk - Light</h4>
                </div>

                <div className="port card">
                    <img className="port-piece" src={crunchy_claire}/>
                    <h4 className="port-title">Crunchy - Claire (A Short Hike)</h4>
                </div>

                <div className="port card">
                    <img className="port-piece" src={rainy_days}/>
                    <h4 className="port-title">Rainy Days</h4>
                </div>

                <div className="port card">
                    <img className="port-piece" src={nova}/>
                    <h4 className="port-title">Nova</h4>
                </div>

                <div className="port card">
                    <img className="port-piece" src={mermay_2021}/>
                    <h4 className="port-title">Mermay 2021</h4>
                </div>

                <div className="port card">
                    <img className="port-piece" src={court_case}/>
                    <h4 className="port-title">Crumbs vs. The Demon Boys</h4>
                </div>

                <div className="port card">
                    <img className="port-piece" src={crunchy_lofi}/>
                    <h4 className="port-title">Lofi Cosytrap - Mug Madness 2021</h4>
                </div>

                <div className="port card">
                    <img className="port-piece" src={frog}/>
                    <h4 className="port-title">Existential Crisis Frog</h4>
                </div>
                
                {/* <div className="port card">
                    <img className="port-piece" src={}/>
                    <h4 className="port-title"></h4>
                </div> */}
            </div>

        );
    }
}

export default PortfolioCard