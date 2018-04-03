import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import API from '../utils/API';
import Navbar from './Navbar';
import { withRouter } from 'react-router-dom';

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
  }

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
      .then(this.props.history.push('/dashboard'))
      .catch(err => console.log(err));
  };

  render() {
    // console.log(this.props.history);
    return (
      <div className="page">
        <Navbar path={this.props.match.path} />
        <div className="main-addjob">
          <div className="new-job">
            <h3>Add a Job</h3>
            <form className="add-job-form">
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
              <select id="" name="status" onChange={this.handleInputChange} value={this.state.status}>
                <option value="" disabled>
                  -- Select a status --
                </option>
                <option value="Researching">Researching</option>
                <option value="Applied">Applied</option>
                <option value="Interviewing">Interviewing</option>
                <option value="Awaiting">Awaiting response</option>
                <option value="Resolved">Resolved</option>
              </select>

              <button className="add-job-btn">
                <Link to="/dashboard" onClick={this.handleFormSubmit}>
                  Add
                </Link>
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(AddJob);
