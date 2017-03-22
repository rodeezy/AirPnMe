import React from 'react';
import { Link } from 'react-router';

import SessionFormContainer from '../session_form/session_form_container';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  sessionLinks() {
    return(
      <SessionFormContainer />
    );
  }

  personalGreeting(currentUser, logout) {
    return(
      <nav className="login-signup">
        <h2 className="header-name">{currentUser.fname}!</h2>
        <Link className="login-signup-btn" onClick={logout}>Log Out</Link>
      </nav>
    );
  }

  render() {
    return(
      <div>
        {this.props.currentUser ? this.personalGreeting(this.props.currentUser, this.props.logout) : this.sessionLinks()}
      </div>
    );
  }
}

export default Greeting;
