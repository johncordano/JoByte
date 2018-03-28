import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AddJob from './AddJob';

class Navbar extends Component {
  render() {
    return (
      <div className="sidenav">
        <h2>joByte</h2>
        <div className="icon">
          {/* <img src="" alt="Dashboard icon" /> */}
          <AddJob />
        </div>
        <div className="icon">
          {/* <img src="" alt="" /> */}
          <Link to={'/job/new'}>Add a job</Link>
        </div>
        <div className="icon">
          {/* <img src="" alt="Calendar icon" /> */}
          <a href="calendar.html">Contacts</a>
        </div>
        <div className="icon">
          {/* <img src="" alt="Calendar icon" /> */}
          <a href="calendar.html">Interview prep</a>
        </div>
        <div className="icon">
          {/* <img src="" alt="Calendar icon" /> */}
          <a href="calendar.html">Settings</a>
        </div>
        <div className="icon">
          {/* <img src="" alt="Calendar icon" /> */}
          <a href="calendar.html">Sign out</a>
        </div>
      </div>
    );
  }
}

export default Navbar;
