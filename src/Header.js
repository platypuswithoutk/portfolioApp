import React from 'react';
import Background from './img/backgroundImage.png';

const backgroundImageStyle = {
    backgroundImage : `url(${Background})`,
    height: '70vh',
    backgroundStyle: "cover",
    //backgroundRepeat : 'no-repeat', 
} 

class Header extends React.Component {
    
    render() {
        return(
            <header style={backgroundImageStyle}>
                <h1>{this.props.title}</h1>
                <p>SEO/SEM Agency</p>
                <a href="#btn">{this.props.button}</a>
            </header>
        );
    }
}

export default Header;