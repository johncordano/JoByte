import React, { Component } from 'react';
import API from '../utils/API';
import { Route, Redirect } from 'react-router';

class SignUp extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    redirect: false,
  };
  
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  
  handleFormSubmitNewAccount = event => {
    event.preventDefault();
    // TODO - this is not working on the frontend. Might need a callback instead?
    API.addAccount({
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    })
    .then(res => {
      //console.log("login res", res);

      if (res.status === 200) {
        console.log("hello");
        this.setState({redirect: true});
         }
        else {
          alert("check your credentials")
        }
      }
    )
      .catch(err => console.log(err));
  };

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to={"/dashboard"} />
    }
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
