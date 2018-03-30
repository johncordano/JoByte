import React, { Component } from 'react';
import Navbar from './Navbar';
import Modal from './Modal';
import API from '../utils/API';

class ViewJob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      res: this.props.location.state,
      add: false,
      date: '',
      description: '',
      status: ''
    };
  }

  toggleAdd = () => {
    this.setState({
      add: !this.state.add
    });
  };

  loadActions = () => {
    API.getAction()
      .then(res => this.setState({ actionsArray: res.data }))
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

    API.addAction({
      date: this.state.date,
      description: this.state.description,
      status: this.state.status
    })
      .then(this.loadActions())
      .catch(err => console.log(err));
  };

  render() {
    // console.log(this.state.res.jobInfo);
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
              <button id="add-todo">+</button>
              {/* <Modal show={this.state.add} toggle={this.toggleAdd} onClose={this.toggleAdd}> */}
              {/* </Modal> */}
              <form>
                <input
                  className="input-label"
                  value={this.state.date}
                  onChange={this.handleInputChange}
                  name="date"
                  placeholder="Date"
                />
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewJob;
