import React from 'react';
// import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Myjobs from './Myjobs';
import ChartBlue from '../images/chart-blue.svg';
import ChartPurple from '../images/chart-purple.svg';

import API from '../utils/API';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableVisible: false,
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
      .then(res => this.setState({ job: res.data, company: '', position: '', link: '', status: '' }))
      .catch(err => console.log(err));
  };

  handleClick = () => {
    let { tableVisible } = this.state;
    tableVisible = tableVisible ? false : true;
    this.setState({ tableVisible });
  };

  render() {
    // console.log(this.state.job);
    return (
      <div>
        <Navbar />
        <div className="centralized">
          <div className="container-dashboard">
            <div className="total-applied" onClick={this.handleClick.bind(this)}>
              <h3>My Jobs</h3>
              <p id="jobCount">20</p>
              <img src={ChartBlue} alt="Char blue graphic" />
            </div>

            <div className="scheduled-interview">
              <h3>To do's</h3>
              <p>12</p>
              <img src={ChartPurple} alt="Char blue graphic" />
            </div>
          </div>
          {this.state.tableVisible ? <Myjobs jobs={this.state.job} /> : null}
        </div>
      </div>
    );
  }
}

export default Dashboard;
