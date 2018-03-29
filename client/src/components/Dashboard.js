import React from 'react';
// import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Myjobs from './Myjobs';
import ChartBlue from '../images/chart-blue.svg';
import ChartPurple from '../images/chart-purple.svg';

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="centralized">
          <div className="container-dashboard">
            <div className="total-applied">
              <h3>My Jobs</h3>
              <p id="jobCount">20</p>
              <img src={ChartBlue} alt="Char blue graphic" />
            </div>
            <div class="scheduled-interview">
              <h3>To do's</h3>
              <p>12</p>
              <img src={ChartPurple} alt="Char blue graphic" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
