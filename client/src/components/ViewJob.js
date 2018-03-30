import React, { Component } from 'react';
import Navbar from './Navbar';
import Modal from './Modal';
import API from '../utils/API';
import DatePicker from 'react-date-picker';

class ViewJob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      res: this.props.location.state,
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
    const jobId = this.state.res.jobInfo._id;
    API.getAction(jobId)
      .then(res => this.setState({ actionsArray: res.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  onDateChange = date => this.setState({ date });

  handleFormSubmit = event => {
    event.preventDefault();

    API.addAction({
      date: this.state.date,
      description: this.state.description,
      status: this.state.status,
      jobId: this.state.res.jobInfo._id
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
              <input type="text" id="date-applied" value="" placeholder={this.state.res.jobInfo.company} />
              <hr />
              <input type="text" id="date-applied" value="" placeholder={this.state.res.jobInfo.position} />
              <hr />
              <input type="text" id="date-applied" value="" placeholder={this.state.res.jobInfo.link} />
              <hr />
              <input type="text" id="date-applied" value="" placeholder={this.state.res.jobInfo.status} />
              <hr />
            </div>
          </div>
          <div className="job-info">
            <div className="input">
              <h2>To do's</h2>
              <button onClick={() => this.setState({ isModalOpen: true })} id="add-todo">
                +
              </button>
              {/* <Modal show={this.state.isModalOpen} onClose={this.toggleOpen}> */}
              <form>
                <div className="date-picker">
                  <h4>Choose a date</h4>
                  <DatePicker onChange={this.onDateChange} value={this.state.date} />
                </div>

                <input
                  className="input-label"
                  value={this.state.description}
                  onChange={this.handleInputChange}
                  name="description"
                  placeholder="Description"
                />
                <input
                  className="input-label"
                  value={this.state.status}
                  onChange={this.handleInputChange}
                  name="status"
                  placeholder="Status"
                />
                <button className="add-btn" onClick={this.handleFormSubmit}>
                  Add
                </button>
              </form>
              {/* </Modal> */}
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
                          <button data-id={data._id} id="view-btn">
                            Update
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
