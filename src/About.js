import React, {Component} from 'react';

class About extends Component {
    render() {
        return(
            <section className="about" id="About">
                <h3>About us</h3>
                <p>No business can survive today without a strong online presence. We deliver Search Engine Optimization (SEO) services to help our partners improve their position in search engine rankings in order to drive more traffic to their websites and boost brand awareness.</p>
                <p>Our Agency has developed experience and knowledge to deliver comprehensive SEO optimization campaigns. These work hand in hand with our expertise in Search Engine Marketing (SEM).</p>
                <div class="promises">
                    <div class="promises-icon">
                        <i class="fas fa-shield-alt"></i>
                        <p>security</p>
                    </div>
                    <div class="promises-icon">
                        <i class="fas fa-running"></i>
                        <p>promptness</p>
                    </div>
                    <div class="promises-icon">
                        <i class="far fa-thumbs-up"></i>
                        <p>reliability</p>
                    </div>
                    <div class="promises-icon">
                        <i class="far fa-calendar-check"></i>
                        <p>punctuality</p>
                    </div>
                </div>
            </section>
        )
    }
}

export default About;