import React, { Component } from 'react';
import API from '../utils/API';

class Login extends Component {
  state = {
    name: "",
    email: "a@d.com",
    password: "mypw",
  };
  
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  
  handleFormSubmitExistingAccount = event => {
    event.preventDefault();
    console.log("login");
    API.getAccount({
      email: this.state.email,
      password: this.state.password,
    })
    .then(res => {
      console.log("login res", res);
      // return a Router component with Redirect to=...
    })
      .catch(err => console.log(err));
  };

  render() {
    return (
      
    <div className="centralized">

      <div className="existing-account">
        <h2>Sign in to existing account</h2>
        <form className="existing-form">
          <input
            className="input-label"
            value={this.state.email}
            onChange={this.handleInputChange}
            name="email"
            placeholder="Email address (required)"
          />
          <input
            className="input-label"
            value={this.state.password}
            onChange={this.handleInputChange}
            name="password"
            placeholder="Password (required)"
          />
        <button className="signin-btn" onClick={this.handleFormSubmitExistingAccount}>
            Sign in
          </button>
        </form>
      </div>    
    </div>
    )
  }
}

export default Login;
