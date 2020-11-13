import React, {Component} from 'react';
import Header from './Header';
import Navigation from './Navigation';
import About from './About';
import Content from './Content';
import Seo from './Seo';
import Contact from './Contact';
import Footer from './Footer';
import Team from './Team';

class App extends Component {
  render() {
      return(
        <div clasName="portfolio-page">
          <Navigation logoTitle="SEO is our HERO"/>
          <Header title="Ninja World" button="Read more"/>
          <About />
          <Team name="Our team"/>
          <Content/>
          <Seo tittle="SEO/SEM - Your company really need it!"/>
          <Contact />
          <Footer />
        </div>
    );
  }
}

export default App;
