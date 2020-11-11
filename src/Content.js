import React, {Component} from 'react';
import bgImage from './img/laptooop.png'

const bdImage = {
    backgroundImage: `url(${bgImage})`,
    //backgroundSize: "cover",
    //backgroundRepeat : 'no-repeat', 
    height: '65vh',
    width: '700px'
}

class Content extends Component {
    render() {
        return(
            <section>
                <h3>An SEO agency handles the many aspects of SEO for your business. This can range from creating content that’s SEO-friendly, to researching your competitor’s SEO.</h3>
                <div className="section-text">
                    <p>We’ll now dive into the nitty gritty of what an SEO agency can do for you.</p>
                    <ul>
                        <li>Perform keyword research </li>
                        <li>Research your competitors’ SEO activity and performance</li>
                        <li>Creating SEO-friendly content</li>
                        <li>Optimise existing content for better SEO</li>
                        <li>Improve your site’s structure</li>
                        <li>Assist with link building</li>
                        <li>Monitor and report SEO results</li>
                    </ul>
                    </div>
                    <div style={bdImage} className="section-image">

                    </div>
            </section>
        )
    }
}

export default Content;