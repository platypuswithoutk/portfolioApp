import React, {Component} from 'react';
import seoBackground from './img/seo.png';

const seoBckg = {
    backgroundImage: `url(${seoBackground})`,
    backgroundRepeat : 'no-repeat', 
    width: '800px',
    height: '60vh'
}

class Seo extends Component {
    render() {
        return(
            <section id="seo-section">
                <div class="seo-text">
                    <h3>SEO/SEM - Your company really need it!</h3>
                    <p>The main difference is that Search Engine Optimization (SEO) is focused on optimizing a website in order to get traffic from organic search results. On the other hand, the goal of Search Engine Marketing (SEM) is to get traffic and visibility from both organic and paid search.</p>
                </div>
                <div class="seo-img">
                    <div style={seoBckg}></div>
                    <blockquote cite="Tim Berners-Lee">The Semantic Web is not a separate Web but an extension of the current one, in which information is given well-defined meaning, better enabling computers and people to work in cooperation.</blockquote>
                </div>
            </section>
        )
    }
}

export default Seo;