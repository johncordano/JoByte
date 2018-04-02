import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import InitialImg from '../images/initial-img.jpg';
import Logo from '../images/logo.svg';

class Login extends Component {
  render() {
    return (
      <div className="login-container">
        <img className="login-img" src={InitialImg} alt="Initial img" />
        <div className="signin">
          <img src={Logo} alt="Logo" />
          <div className="description">
            <p>The platform to organize and connect your job search.</p>
          </div>

          <div className="buttons">
            <button className="login-btn enter-btn">Login</button>

            <div className="separate">
              <div className="line-left" />
              or
              <div className="line-right" />
            </div>

            <button className="signup-btn">Sign Up</button>
            <button id="google-btn">Sign In With Google</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
