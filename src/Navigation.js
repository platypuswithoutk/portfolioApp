import React, {Component} from 'react';

class Navigation extends Component {
  render() {
    const sections = ['About', 'Content', 'SEO', 'Contact']
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

export default Navigation;