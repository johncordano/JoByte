import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Myjobs from './Myjobs';

class Dashboard extends Component {
  render() {
    return (
      <div className="centralized">
        <Navbar />
        <div className="header-btn total-applied">
          <div className="my-jobs">Myjobs</div>
          <div className="to-dos">To-do's</div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
