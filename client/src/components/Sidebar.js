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
            <div className="highlight-btn">
              <Link to="/dashboard" onClick={this.handleClick} style={{ color: this.state.color }}>
                <img src={DashboardIcon} alt="Dashboard icon" />
                <h2>Dashboard</h2>
              </Link>
            </div>
          </div>
        ) : (
          <div className="sidebar-icon">
            <div className="highlight-btn ">
              <Link to="/dashboard">
                <img src={DashboardIcon} alt="Dashboard icon" />
                <h2>Dashboard</h2>
              </Link>
            </div>
          </div>
        )}

        {this.props.path === '/job/new' ? (
          <div className="sidebar-icon" onClick={this.handleClick} style={{ backgroundColor: this.state.bgColor }}>
            <div className="highlight-btn">
              <Link to="/job/new" onClick={this.handleClick} style={{ color: this.state.color }}>
                <img src={AddJobIcon} alt="Add a job icon" />
                <h2>Add a Job</h2>
              </Link>
            </div>
          </div>
        ) : (
          <div className="sidebar-icon">
            <div className="highlight-btn ">
              <Link to="/job/new">
                <img src={AddJobIcon} alt="Add a job icon" />
                <h2> Add a Job</h2>
              </Link>
            </div>
          </div>
        )}

        {this.props.path === '/contacts' ? (
          <div className="sidebar-icon" onClick={this.handleClick} style={{ backgroundColor: this.state.bgColor }}>
            <div className="highlight-btn">
              <Link to="/contacts" onClick={this.handleClick} style={{ color: this.state.color }}>
                <img src={ContactsIcon} alt="Contacts icon" />
                <h2>Contacts</h2>
              </Link>
            </div>
          </div>
        ) : (
          <div className="sidebar-icon">
            <div className="highlight-btn ">
              <Link to="/contacts">
                <img src={ContactsIcon} alt="Contacts icon" />
                <h2>Contacts</h2>
              </Link>
            </div>
          </div>
        )}

        {this.props.path === '/calendar' ? (
          <div className="sidebar-icon" onClick={this.handleClick} style={{ backgroundColor: this.state.bgColor }}>
            <div className="highlight-btn">
              <Link to="/calendar" onClick={this.handleClick} style={{ color: this.state.color }}>
                <img src={CalendarIcon} alt="Calendar icon" />
                <h2>Calendar</h2>
              </Link>
            </div>
          </div>
        ) : (
          <div className="sidebar-icon">
            <div className="highlight-btn ">
              <Link to="/calendar">
                <img src={CalendarIcon} alt="Calendar icon" />
                <h2>Calendar</h2>
              </Link>
            </div>
          </div>
        )}

        {this.props.path === '/interview' ? (
          <div className="sidebar-icon" onClick={this.handleClick} style={{ backgroundColor: this.state.bgColor }}>
            <div className="highlight-btn">
              <Link to="/interview" onClick={this.handleClick} style={{ color: this.state.color }}>
                <img src={InterviewIcon} alt="Interview icon" />
                <h2>Interview Preparation</h2>
              </Link>
            </div>
          </div>
        ) : (
          <div className="sidebar-icon">
            <div className="highlight-btn ">
              <Link to="/interview">
                <img src={InterviewIcon} alt="Interview icon" />
                <h2>Interview Prep</h2>
              </Link>
            </div>
          </div>
        )}

        {this.props.path === '/settings' ? (
          <div className="sidebar-icon" onClick={this.handleClick} style={{ backgroundColor: this.state.bgColor }}>
            <div className="highlight-btn">
              <Link to="/interview" onClick={this.handleClick} style={{ color: this.state.color }}>
                <img src={SettingsIcon} alt="Settings icon" />
                <h2>Settings</h2>
              </Link>
            </div>
          </div>
        ) : (
          <div className="sidebar-icon">
            <div className="highlight-btn ">
              <Link to="/settings">
                <img src={SettingsIcon} alt="Settings icon" />
                <h2>Settings</h2>
              </Link>
            </div>
          </div>
        )}

        {this.props.path === '/logout' ? (
          <div className="sidebar-icon" onClick={this.handleClick} style={{ backgroundColor: this.state.bgColor }}>
            <div className="highlight-btn">
              <Link to="/interview" onClick={this.handleClick} style={{ color: this.state.color }}>
                <img src={LogoutIcon} alt="Logout icon" />
                <h2>Logout</h2>
              </Link>
            </div>
          </div>
        ) : (
          <div className="sidebar-icon ">
            <div className="highlight-btn ">
              <Link to="/logout">
                <img src={LogoutIcon} alt="Logout icon" />
                <h2>Logout</h2>
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Sidebar;
