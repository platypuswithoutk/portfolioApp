import React, {Component} from 'react';
import Header from './Header';
import Navigation from './Navigation';

class App extends Component {
  render() {
      return(
        <div clasName="portfolio-page">
          <Navigation logoTitle="Front-End Developer"/>
          <Header/>
        </div>
    );
  }
}

export default App;
