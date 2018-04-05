import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Media from 'react-media';

// Images
import DashboardIcon from '../images/dashboard.svg';
import AddJobIcon from '../images/add-job.svg';
import CalendarIcon from '../images/calendar.svg';
import ContactsIcon from '../images/contact.svg';
import InterviewIcon from '../images/interview.svg';
import SettingsIcon from '../images/settings.svg';
import LogoutIcon from '../images/logout.svg';
import LogoWhite from '../images/logoWhite.svg';
import MagnifyingGlass from '../images/magnifyingGlass.svg';

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
        <div className="logo-container">
          <Media query="(max-width: 999px)">
            {matches =>
              matches ? (
                <img className="logo" src={MagnifyingGlass} alt="Logo" />
              ) : (
                <img className="logo" src={LogoWhite} alt="Logo" />
              )
            }
          </Media>
        </div>

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
            <img src={CalendarIcon} alt="Calendar icon" />
            <Link to="/calendar" onClick={this.handleClick} style={{ color: this.state.color }}>
              Calendar
            </Link>
          </div>
        ) : (
          <div className="sidebar-icon">
            <img src={CalendarIcon} alt="Calendar icon" />
            <Link to="/calendar">Calendar</Link>
          </div>
        )}

        {this.props.path === '/interview' ? (
          <div className="sidebar-icon" onClick={this.handleClick} style={{ backgroundColor: this.state.bgColor }}>
            <img src={InterviewIcon} alt="Interview icon" />
            <Link to="/interview" onClick={this.handleClick} style={{ color: this.state.color }}>
              Interview Preparation
            </Link>
          </div>
        ) : (
          <div className="sidebar-icon">
            <img src={InterviewIcon} alt="Interview icon" />
            <Link to="/interview">Interview Preparation</Link>
          </div>
        )}

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
