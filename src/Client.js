import React, {Component} from 'react';
import client1 from './img/client1.png';
import client2 from './img/client2.png';
import client3 from './img/client3.png';
import client4 from './img/client4.png';
import client5 from './img/client5.png';
import client6 from './img/client6.png';
import client7 from './img/client7.png';

class Client extends Component{
    render() {
        return(
          <div className="clients">
              <img src={client1} alt="Forbes"></img>
              <img src={client2} alt="New York Time"></img>
              <img src={client3} alt="The quardian"></img>
              <img src={client4} alt="Wall Street Journal"></img>
              <img src={client5} alt="QuoVadis"></img>
              <img src={client6} alt="radware"></img>
              <img src={client7} alt="client"></img>
          </div>
        )
    }
}

export default Client;