import React from 'react';
import Background from './img/backgroundImage.png';

const backgroundImageStyle = {
    backgroundImage : `url(${Background})`,
    height: '300px',
    backgroundStyle: "cover"
} 

class Header extends React.Component {
    
    render() {
        return(
            <header style={backgroundImageStyle}>
                
            </header>
        );
    }
}

export default Header;