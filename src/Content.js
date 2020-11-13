import React, {Component} from 'react';
import bgImage from './img/laptooop.png'

const bdImage = {
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat : 'no-repeat', 
    backgroundPosition: 'top',
    height: '68vh',
    width: '700px',
}

class Content extends Component {
    render() {
        const contents = ['Perform keyword research', 'Research your competitors’ SEO activity and performance',
                'Creating SEO-friendly content', 'Optimise existing content for better SEO', 
                'Improve your site’s structure', 'Assist with link building', 'Monitor and report SEO results', 'Our support every time']

    const contentList = contents.map(contents => {
        return(
            <li>{contents}</li>
        )
    });

        return(
            <section id="content-section">
                <h3>An SEO agency handles the many aspects of SEO for your business. This can range from creating content that’s SEO-friendly, to researching your competitor’s SEO.</h3>
                <p>We’ll now dive into the nitty gritty of what an SEO agency can do for you:</p>
                <div className="section-text">
                    <ol>
                       {contentList}
                    </ol>
                    <div style={bdImage} className="section-image"></div>
                </div>
            </section>
        )
    }
}

export default Content;