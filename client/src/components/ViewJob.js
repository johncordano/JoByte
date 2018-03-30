import React, { Component } from 'react';
import Navbar from './Navbar';
import Modal from './Modal';

class ViewJob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      res: this.props.location.state,
      add: false
    };
  }

  toggleAdd = () => {
    this.setState({
      add: !this.state.add
    });
  };

  render() {
    console.log(this.state.res.jobInfo);
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
              <Modal show={this.state.edit} toggle={this.toggleEdit} onClose={this.toggleEdit}>
                <h2>test</h2>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewJob;
