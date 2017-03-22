import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './greeting/greeting_container';

const App = ({ children }) => (
  <div>
    <header>
      <div id='top'>
        <Link to="/">
          <img src="https://s-media-cache-ak0.pinimg.com/originals/45/56/26/45562695c73bc210d01d31a083b9f81c.jpg"
            height='50' width='50' className="logo"/>
        </Link>
        <input id="pac-input" className="controls" type="text" placeholder="Anywhere" />
        <GreetingContainer />
      </div>
      <h1 className="Header">Gotta go? <span className="inner-header">
        Find a bathroom near you</span></h1>
      <h1 className="line-two">on AirPnMe.</h1>
    </header>
    {children}
  </div>
);

export default App;
