import React from 'react';
import { Link } from 'react-router-dom';

// Images
import DashboardIcon from '../images/dashboard.svg';
import AddJobIcon from '../images/add-job.svg';
import ContactsIcon from '../images/contact.svg';
import InterviewIcon from '../images/interview.svg';
import SettingsIcon from '../images/settings.svg';
import LogoutIcon from '../images/logout.svg';

// Components
// import Dashboard from './Dashboard';

class Navbar extends React.Component {
  state = {
    bgColor: '',
    color: ''
  };

  componentDidMount() {
    this.handleClick();
  }

  handleClick = () => {
    this.setState({
      bgColor: '#d3d3d3',
      color: '#242323'
    });
  };

  render() {
    return (
      <div className="sidebar">
        <h2>JOByte</h2>

        {this.props.path === '/dashboard' ? (
          <div className="sidebar-icon" onClick={this.handleClick} style={{ backgroundColor: this.state.bgColor }}>
            <img src={DashboardIcon} alt="Dashboard icon" />
            <Link to="/dashboard" onClick={this.handleClick} style={{ color: this.state.color }}>
              Dashboard
            </Link>
          </div>
        ) : (
          <div className="sidebar-icon">
            <img src={DashboardIcon} alt="Dashboard icon" />
            <Link to="/dashboard">Dashboard</Link>
          </div>
        )}

        {this.props.path === '/job/new' ? (
          <div className="sidebar-icon" onClick={this.handleClick} style={{ backgroundColor: this.state.bgColor }}>
            <img src={AddJobIcon} alt="Add a job icon" />
            <Link to="/job/new" onClick={this.handleClick} style={{ color: this.state.color }}>
              Add a Job
            </Link>
          </div>
        ) : (
          <div className="sidebar-icon">
            <img src={AddJobIcon} alt="Add a job icon" />
            <Link to={'/job/new'}>Add a Job</Link>
          </div>
        )}

        <div className="sidebar-icon">
          <img src={ContactsIcon} alt="Contacts icon" />
          <a href="calendar.html">Contacts</a>
        </div>
        <div className="sidebar-icon">
          <img src={InterviewIcon} alt="Interview icon" />
          <a href="calendar.html">Interview Preparation</a>
        </div>
        <div className="sidebar-icon">
          <img src={SettingsIcon} alt="Settings icon" />
          <a href="calendar.html">Settings</a>
        </div>
        <div className="sidebar-icon">
          <img src={LogoutIcon} alt="Logout icon" />
          <a href="calendar.html">Logout</a>
        </div>
      </div>
    );
  }
}

export default Navbar;
