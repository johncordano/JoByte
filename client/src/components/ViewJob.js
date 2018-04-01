import React, { Component } from 'react';
import Navbar from './Navbar';
import Modal from './Modal';
import API from '../utils/API';
import DatePicker from 'react-date-picker';

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
    const newCurJob = { ...curJob, [name]: value}
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
    API.deleteJob({id: this.state.curJob.id})
      .then(console.log('Successfully deleted job'))
      .catch(err => console.log(err));
  };


  handleActionDelete = (event, id) => {
    event.preventDefault();
    console.log(id)
    API.deleteAction({id: id})
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
    // console.log(this.state);
    return (
      <div>
        <Navbar />
        <div className="centralized">
          <div className="job-info">
            <div className="input">
              <form className="add-form">
                <input
                  className="input-label"
                  value={this.state.curJob.company}
                  onChange={this.handleJobInputChange}
                  name="curJob[company]"
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
               </select>
                <button className="add-btn" onClick={this.handleJobUpdate}>
                  Save Changes
                </button>
                <button className="add-btn" onClick={this.handleJobDelete}>
                  Delete Job
                </button>
            </form>
            </div>
          </div>
          <div className="job-info">
            <div className="input">
              <h2>To do's</h2>
              <button onClick={() => this.setState({ isModalOpen: true })} id="add-todo">
                +
              </button>
              <Modal show={this.state.isModalOpen} onClose={this.toggleOpen}>
                <h2>Add a new To-do</h2>
                <form className="add-form">
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
                  <button className="add-btn" onClick={this.handleFormSubmit}>
                    Add
                  </button>
                </form>
              </Modal>
              <table className="rtable">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th />
                  </tr>
                </thead>
                <tbody className="tbody saved-jobs" id="saved-jobs">
                  {this.state.actionsArray.map(data => {
                    return (
                      <tr key={data._id}>
                        <td>{data.date}</td>
                        <td>{data.description}</td>
                        <td>{JSON.stringify(data.status)}</td>
                        <td>
                          <button id="view-btn" onClick={event => this.handleActionDelete(event, data._id)}>
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewJob;
