import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

// Components
import Dashboard from './components/Dashboard';
import AddJob from './components/AddJob';
import ViewJob from './components/ViewJob';
import API from './utils/API';
import Login from './components/Login';
import SignUp from './components/SignUp';
// import Myjobs from './components/Myjobs';

class App extends Component {
  
  render() {
    return (
      <div>
        {/*<Route exact path = "/signin" component={Signin} />*/}
        <Route exact path = "/" component={Dashboard} />
        <Route exact path="/job/new" component={AddJob} />
        <Route path="/job/view" component={ViewJob} />
        <Route exact path="/signup" comonent={SignUp} />
      </div>
    );
  }
}

export default App;
