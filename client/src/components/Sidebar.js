import React, { Component } from 'react';
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

class Sidebar extends Component {
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

        {this.props.path === '/contacts' ? (
          <div className="sidebar-icon" onClick={this.handleClick} style={{ backgroundColor: this.state.bgColor }}>
            <img src={ContactsIcon} alt="Contacts icon" />
            <Link to="/contacts" onClick={this.handleClick} style={{ color: this.state.color }}>
              Contacts
            </Link>
          </div>
        ) : (
          <div className="sidebar-icon">
            <img src={ContactsIcon} alt="Contacts icon" />
            <Link to="/contacts">Contacts</Link>
          </div>
        )}
  
        {this.props.path === '/calendar' ? (
          <div className="sidebar-icon" onClick={this.handleClick} style={{ backgroundColor: this.state.bgColor }}>
            <img src={ContactsIcon} alt="Calendar icon" />
            <Link to="/calendar" onClick={this.handleClick} style={{ color: this.state.color }}>
              Calendar
            </Link>
          </div>
        ) : (
          <div className="sidebar-icon">
            <img src={ContactsIcon} alt="Calendar icon" />
            <Link to="/calendar">Calendar</Link>
          </div>
        )}

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

export default Sidebar;
