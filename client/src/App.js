import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import './App.css';

// Components
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
      name: null
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
      console.log('here!',response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.name
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }

  render() {
    return (
      <div>

        <Route 
          exact path='/'
          render={() => 
            <LoginForm
              updateUser={this.updateUser}
              />}
        />
        <Route
          path='/signup'
          render={() =>
            <Signup 
              signup={this.signup}
            />}
        />

        <Route exact path = "/dashboard" component={Dashboard} />
        <Route exact path="/job/new" component={AddJob} />
        <Route path="/job/view" component={ViewJob} />
      </div>
    );
  }
}

export default App;
