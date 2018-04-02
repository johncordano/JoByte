import React, { Component } from 'react';
import Navbar from './Navbar';
import API from '../utils/API';
import DatePicker from 'react-date-picker';
import ActionModal from './ActionModal';
import MyActions from './MyActions';
import { withRouter } from 'react-router-dom';

class ViewJob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curJob: {
        id: this.props.location.state.jobInfo._id,
        company: this.props.location.state.jobInfo.company,
        position: this.props.location.state.jobInfo.position,
        link: this.props.location.state.jobInfo.link,
        status: this.props.location.state.jobInfo.status
      },
      actionsArray: [],
      add: false,
      date: new Date(),
      description: '',
      status: '',
      isModalOpen: false
    };
  }

  componentDidMount() {
    this.loadActions();
  }

  toggleOpen = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  };

  loadActions = () => {
    const jobId = this.state.curJob.id;
    API.getAction(jobId)
      .then(res => this.setState({ actionsArray: res.data }))
      .catch(err => console.log(err));
  };

  handleJobInputChange = event => {
    const { name, value } = event.target;
    const { curJob } = this.state;
    const newCurJob = { ...curJob, [name]: value };
    this.setState({ curJob: newCurJob });
  };

  handleDropdownChange = event => {
    const { curJob } = this.state;
    const newCurJob = { ...curJob, status: event.target.value };
    this.setState({ curJob: newCurJob });
  };

  handleActionInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  onDateChange = date => this.setState({ date });

  handleJobUpdate = event => {
    event.preventDefault();
    API.updateJob({
      id: this.state.curJob.id,
      company: this.state.curJob.company,
      position: this.state.curJob.position,
      link: this.state.curJob.link,
      status: this.state.curJob.status
    })
      .then(console.log('Successfully updated job'))
      .catch(err => console.log(err));
  };

  handleJobDelete = event => {
    event.preventDefault();
    API.deleteJob({ id: this.state.curJob.id })
      .then(this.props.history.push('/'))
      .catch(err => console.log(err));
  };

  handleActionDelete = (event, id) => {
    event.preventDefault();
    console.log(id);
    API.deleteAction({ id: id })
      .then(this.loadActions())
      .catch(err => console.log(err));
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.addAction({
      date: this.state.date,
      description: this.state.description,
      status: this.state.status,
      jobId: this.state.curJob.id
    })
      .then(this.loadActions())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="page">
        <Navbar />
        <div className="main">
          <div className="job-container">
            <h3>Job Saved</h3>

            <form className="update-job-form">
              <input
                className="input-label"
                value={this.state.curJob.company}
                onChange={this.handleJobInputChange}
                name="company"
                placeholder="Company (required)"
              />
              <input
                className="input-label"
                value={this.state.curJob.position}
                onChange={this.handleJobInputChange}
                name="position"
                placeholder="Position (required)"
              />
              <input
                className="input-label"
                value={this.state.curJob.link}
                onChange={this.handleJobInputChange}
                name="link"
                placeholder="Link"
              />
              <select id="" onChange={this.handleDropdownChange} value={this.state.curJob.status}>
                <option value="Researching">Researching</option>
                <option value="Applied">Applied</option>
                <option value="Interviewing">Interviewing</option>
                <option value="Awaiting">Awaiting response</option>
                <option value="Resolved">Resolved</option>
              </select>
              <div className="btns">
                <button className="save-btn" onClick={this.handleJobUpdate}>
                  Save changes
                </button>
                <button className="delete-btn" onClick={this.handleJobDelete}>
                  Delete job
                </button>
              </div>
            </form>
          </div>

          <div className="todos-container">
            <div className="todo-flex">
              <h3>To do's</h3>
              <button onClick={this.toggleOpen} className="add-todo-btn-short">
                +
              </button>

              <ActionModal show={this.state.isModalOpen} onClose={this.toggleOpen}>
                <h2 className="add-todo-h2">Add a new To-do</h2>
                <form className="add-todo">
                  <div className="date-picker">
                    <h4>Choose a date</h4>
                    <DatePicker onChange={this.onDateChange} value={this.state.date} />
                  </div>

                  <input
                    className="input-label"
                    value={this.state.description}
                    onChange={this.handleActionInputChange}
                    name="description"
                    placeholder="Description"
                  />
                  <input
                    className="input-label"
                    value={this.state.status}
                    onChange={this.handleActionInputChange}
                    name="status"
                    placeholder="Status"
                  />
                  <button className="add-todo-btn" onClick={this.handleFormSubmit}>
                    Add
                  </button>
                </form>
              </ActionModal>

              <MyActions actions={this.state.actionsArray} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ViewJob);