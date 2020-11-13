import React from 'react';
import Background from './img/success.jpg';

const backgroundImageStyle = {
    backgroundImage : `url(${Background})`,
    height: '81vh',
    backgroundSize: "cover",
    backgroundPosition: 'center',
    //backgroundRepeat : 'no-repeat', 
} 

class Header extends React.Component {
    
    render() {
        return(
            <header style={backgroundImageStyle}>
                <div className="header-style">
                    <h1>{this.props.title}</h1>
                    <p>SEO/SEM Agency</p>
                    <a href="#btn">{this.props.button}</a>
                </div>
                
            </header>
        );
    }
}

export default Header;