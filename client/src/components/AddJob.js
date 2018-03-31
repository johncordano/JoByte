import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import API from '../utils/API';
import Navbar from './Navbar';


class AddJob extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      job: [],
      company: '',
      position: '',
      link: '',
      status: ''
    };
  }


  componentDidMount() {
    this.loadJob();
  };

  loadJob = () => {
    API.getJob()
      .then(res => this.setState({ jobsArray: res.data }))
      .catch(err => console.log(err));
  };


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    API.addJob({
      company: this.state.company,
      position: this.state.position,
      link: this.state.link,
      status: this.state.status
    })
      .then(this.loadJob())
      .catch(err => console.log(err));
  };

  render() {
    console.log(this.props.history)
    return (
      <div>
        <Navbar />
        <div className="centralized">
          <div className="new-job">
            <h2>Add a new job</h2>
            <form className="add-form">
              <input
                className="input-label"
                value={this.state.company}
                onChange={this.handleInputChange}
                name="company"
                placeholder="Company (required)"
              />

              <input
                className="input-label"
                value={this.state.position}
                onChange={this.handleInputChange}
                name="position"
                placeholder="Position (required)"
              />
              <input
                className="input-label"
                value={this.state.link}
                onChange={this.handleInputChange}
                name="link"
                placeholder="Link (required)"
              />
              <select id="" name = "status" onChange={this.handleInputChange} value={this.state.status}>
                  <option value="Researching">Researching</option>
                  <option value="Applied">Applied</option>
                  <option value="Interviewing">Interviewing</option>
               </select>
              <Link 
                  to='/'
                  className="add-btn" 
                  onClick={this.handleFormSubmit}>
                  Add
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddJob;
