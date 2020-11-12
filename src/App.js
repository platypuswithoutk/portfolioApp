import React, {Component} from 'react';
import Header from './Header';
import Navigation from './Navigation';
import About from './About';
import Content from './Content';
import Seo from './Seo';

class App extends Component {
  render() {
      return(
        <div clasName="portfolio-page">
          <Navigation logoTitle="SEO is our HERO"/>
          <Header title="Ninja World" button="Read more"/>
          <About/>
          <Content/>
          <Seo />
        </div>
    );
  }
}

export default App;
