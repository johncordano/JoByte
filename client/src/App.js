import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

// Components
import Dashboard from './components/Dashboard';
import AddJob from './components/AddJob';
import ViewJob from './components/ViewJob';
import Login from './components/Login';
// import API from './utils/API';

class App extends Component {
  render() {
    return (
      <div>
        {/* <Route exact path = "/signin" component={Signin} /> */}

        <Route exact path="/login" component={Login} />

        <Route exact path="/" component={Dashboard} />
        <Route exact path="/job/new" component={AddJob} />
        <Route path="/job/view" component={ViewJob} />
      </div>
    );
  }
}

export default App;
