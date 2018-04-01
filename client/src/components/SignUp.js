import React, { Component } from 'react';
import API from '../utils/API';

class SignUp extends Component {
  state = {
    name: "",
    email: "",
    password: "",
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
      password: this.state.password,
    })
      .catch(err => console.log(err));
  };

  render() {
    return (
      
    <div className="centralized">
      <div className="new-account">
        <h2>Create account</h2>
        <form className="add-form">
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
            className="input-label"
            value={this.state.password}
            onChange={this.handleInputChange}
            name="password"
            placeholder="Password (required)"
          />
        <button className="add-btn" onClick={this.handleFormSubmitNewAccount}>
            Create account
          </button>
        </form>
      </div>      
      
    </div>
    )
  }
}

export default SignUp;
