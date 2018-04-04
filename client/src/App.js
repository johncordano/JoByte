import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import './App.css';
import { Tabs, Tab } from 'react-bootstrap';

// Components
import Navbar from './components/Navbar';
import Signup from './components/Sign-up'
import LoginForm from './components/Login-form'
import Dashboard from './components/Dashboard';
import AddJob from './components/AddJob';
import ViewJob from './components/ViewJob';
// import API from './utils/API';
// import Myjobs from './components/Myjobs';

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      userId: null,
      email: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user').then(response => {
      console.log('Get user response: ')
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          userId: response.data.user._id,
          email: response.data.user.email
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          userId: null,
          email: null
        })
      }
    })
  }

  render() {
    console.log('from app...userID:', this.state.userId)
    console.log('log from app.js, loggedIn:', this.state.loggedIn, 'as', this.state.email)
    const isLoggedIn = this.state.loggedIn
    const availableRoutes = !isLoggedIn ? (
        <div>
          <Route 
            path='/'
            render={() => 
              <LoginForm
                updateUser={this.updateUser}
                />}
          />
          <Route
            exact path='/signup'
            render={() =>
              <Signup 
                signup={this.signup}
              />}
          />
        </div>
        ) : (
          <div>
            <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
            <Route exact path = "/dashboard" component={Dashboard} userId={this.state.userId} />
            <Route exact path="/job/new" component={AddJob} />
            <Route path="/job/view" component={ViewJob} />
          </div>
        )

      return (
        <div>

        {availableRoutes}
        </div>
        )
      }

}

export default App;
