import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'
import axios from 'axios'

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
    constructor() {
        super()
        this.logout = this.logout.bind(this)
    }

    logout(event) {
        event.preventDefault()
        console.log('logging out')
        axios.post('/user/logout').then(response => {
          console.log(response.data)
          if (response.status === 200) {
            this.props.updateUser({
              loggedIn: false,
              name: null
            })
          }
        }).catch(error => {
            console.log('Logout error')
        })
      }

  render() {
    const loggedIn = this.props.loggedIn;
    console.log('navbar render, props: ')
    console.log(this.props);

    return (
      <div className="sidebar">
        <h2>joByte</h2>
        <div className="icon">
          <img src={DashboardIcon} alt="Dashboard icon" />
          <Link to="/">Dashboard</Link>
        </div>
        <div className="icon">
          <img src={AddJobIcon} alt="Add a job icon" />
          <Link to={'/job/new'}>Add a job</Link>
        </div>
        <div className="icon">
          <img src={ContactsIcon} alt="Contacts icon" />
          <a href="calendar.html">Contacts</a>
        </div>
        <div className="icon">
          <img src={InterviewIcon} alt="Interview icon" />
          <a href="calendar.html">Interview prep</a>
        </div>
        <div className="icon">
          <img src={SettingsIcon} alt="Settings icon" />
          <a href="calendar.html">Settings</a>
        </div>
        <div className="icon" onClick={this.logout}>
          <img src={LogoutIcon} alt="Logout icon" />

          <a href="#">Logout</a>
        </div>
      </div>
    );
  }
}

export default Navbar;
