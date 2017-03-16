import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './greeting/greeting_container';

const App = ({ children }) => (
  <div>
    <header>
      <Link to="/">
        <img src="https://s-media-cache-ak0.pinimg.com/originals/45/56/26/45562695c73bc210d01d31a083b9f81c.jpg"
          height='50' width='50' className="logo"/>
      </Link>
      {/*<navBar>
        <Link to="/" className="navBar">Become a Host</Link>
        <Link to="/" className="navBar">Help</Link>
        <Link to="//signup" className="navBar">Sign Up</Link>
        <Link to="//login" className="navBar">Log In</Link>
      </navBar>*/}
      <h1 className="Header">Gotta go? <span className="inner-header">
        Find a bathroom near you on AirPnMe.
      </span></h1>
      <GreetingContainer />
    </header>
    {children}
  </div>
);

export default App;
