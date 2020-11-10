import React, {Component} from 'react';

class App extends Component {
  render() {
    const sections = ['Home', 'About', 'Contact', 'Services']
    const navLinks = sections.map(section => {
      return(
        <li><a href={'#'+section}>{section}</a></li>
      )
    });
    return (
      <div className="wrapper">
        <nav>
          <h2>{this.props.logoTitle}</h2>
          <ul>
            {navLinks}
          </ul>
        </nav>
      </div>
    );
  }
}

export default App;
