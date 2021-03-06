import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import './mediaQueries.css';

// Components
import Dashboard from './components/Dashboard';
import AddJob from './components/AddJob';
import ViewJob from './components/ViewJob';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Contacts from './components/Contacts';
import Calendar from './components/Calendar';
import InterviewPrep from './components/InterviewPrep';
// import Myjobs from './components/Myjobs';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          {/*<Route exact path = "/signin" component={Signin} />*/}
          <Route exact path="/" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/job/new" component={AddJob} />
          <Route path="/job/view" component={ViewJob} />
          <Route exact path="/signup" component={SignUp} />
          <Route path="/contacts" component={Contacts} />
          <Route exact path="/calendar" component={Calendar} />
          <Route exact path="/interview" component={InterviewPrep} />
          <Route exact path="/settings" component={InterviewPrep} />
          <Route exact path="/logout" component={InterviewPrep} />
        </div>
      </div>
    );
  }
}

export default App;
