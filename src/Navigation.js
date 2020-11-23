import React, {Component} from 'react';

class Navigation extends Component {
  render() {
    const sections = ['About', 'Team', 'Content', 'SEO/SEM', 'Clients', 'Contact']
    const navLinks = sections.map(section => {
      return(
        <li><a href={'#'+section}>{section}</a></li>
      )
    });
    return (
      <div className="wrapper">
        <nav>
          <input type="checkbox" id="check"></input>
            <label for="check" class="checkbtn">
              <i class="fas fa-bars"></i>
          </label>
          <label class="logo">{this.props.logoTitle}</label>
          <ul>
            {navLinks}
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navigation;