import React, {Component} from 'react';
import portraitImage1 from './img/portrait1.jpg';
import portraitImage2 from './img/portrait2.jpg';
import portraitImage3 from './img/portrait3.jpg';
import portraitImage4 from './img/portrait4.jpg';
import portraitImage5 from './img/portrait5.jpg';


class Team extends Component {
    render() {
        return(
            <div className="team">
                <h3>{this.props.name}</h3>
                <div className="team-people">
                    <div className="team-img">
                        <img src={portraitImage4} alt="portrait1"></img> 
                        <h4>Lukas Kampfnau</h4>
                        <p>Ninja Word CEO</p>
                    </div>
                    <div className="team-img">
                        <img src={portraitImage2} alt="portrait2"></img>
                        <h4>Anna Viato</h4>
                        <p>Content and SEO Manager</p>
                    </div>
                    <div className="team-img">
                        <img src={portraitImage1} alt="portrait2"></img>
                        <h4>Christina Swift</h4>
                        <p>SEO Specialis</p>
                    </div>
                    <div className="team-img">
                        <img src={portraitImage3} alt="portrait2"></img>
                        <h4>Justin Deluro</h4>
                        <p>SEO/SEM Specialis</p>
                    </div>
                    <div className="team-img">
                        <img src={portraitImage5} alt="portrait2"></img>
                        <h4>Patric Vieira</h4>
                        <p>Content Manager</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Team;