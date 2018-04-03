import React, { Component } from 'react';
import API from '../utils/API';
import Logo from '../images/logo.svg';
import { Link } from 'react-router-dom';
import { Route, Redirect } from 'react-router';

class SignUp extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    redirect: false
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmitNewAccount = event => {
    event.preventDefault();
    API.addAccount({
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    })
      .then(res => {
        console.log('login res', res);

        if (res.status === 200) {
          this.setState({ redirect: true });
        } else {
          alert('check your credentials');
        }
      })
      .catch(err => console.log(err));
  };

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to={'/dashboard'} />;
    }
    return (
      <div className="login-container">
        <div className="signin">
          <img className="logo" src={Logo} alt="Logo" />

          <form className="username-form ">
            <input
              className="input-label"
              value={this.state.name}
              onChange={this.handleInputChange}
              name="name"
              placeholder="Your name (required)"
            />
            <input
              className="input-label"
              value={this.state.email}
              onChange={this.handleInputChange}
              name="email"
              placeholder="Email address (required)"
            />
            <input
              type="password"
              className="input-label"
              value={this.state.password}
              onChange={this.handleInputChange}
              name="password"
              placeholder="Password (required)"
            />
            <div className="signin-buttons">
              <button className="signup-btn" onClick={this.handleFormSubmitNewAccount}>
                <Link to="/dashboard">Create Account</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
