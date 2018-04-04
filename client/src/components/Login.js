import React, { Component } from 'react';
// import InitialImg from '../images/initial-img.jpeg';
import Logo from '../images/logo.svg';
import { Link } from 'react-router-dom';
import API from '../utils/API';
import { Redirect } from 'react-router';

class Login extends Component {
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

  handleFormSubmitExistingAccount = event => {
    event.preventDefault();
    console.log('login');
    API.getAccount({
      email: this.state.email,
      password: this.state.password
    })
      .then(res => {
        console.log('login res', res);

        if (res.status === 200) {
          this.setState({ redirect: true });
        } else {
          console.log('check your credentials');
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
          <h3>Welcome!</h3>

          <form className="username-form ">
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
              <button className="signin-btn" onClick={this.handleFormSubmitExistingAccount}>
                Sign In
              </button>
              <button className="signup-btn">
                <Link to="/signup">Create an Account</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
