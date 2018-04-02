import React from 'react';
import API from '../utils/API';
// import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Myjobs from './Myjobs';
import MyActions from './MyActions';
import { Tabs, Tab } from 'react-bootstrap';
import ChartContainer from './ChartContainer';

// import API from '../utils/API';

class Dashboard extends React.Component {
  state = {
    jobsArray: [],
    actionsArray: [],
    MyJobsTableVisible: false,
    MyActionsTableVisible: false,
    ResearchingTableVisible: false,
    researchCount: 0,
    appliedCount: 0,
    interviewingCount: 0,
    awaitingCount: 0,
    resolvedCount: 0
  };

  componentDidMount() {
    this.loadJob();
    this.loadActions();
  }

  loadJob = () => {
    API.getJob()
      .then(res => {
        this.setState({ jobsArray: res.data });
        this.updateStatusCounts(res.data);
      })
      .catch(err => console.log(err));
  };

  loadActions = () => {
    API.getAllAction()
      .then(res => this.setState({ actionsArray: res.data }))
      .catch(err => console.log(err));
  };

  hideAllTables = () => {
    this.setState({
      MyJobsTableVisible: false,
      MyActionsTableVisible: false,
      ResearchingTableVisible: false
    });
  };

  handleMyJobsClick = () => {
    this.hideAllTables();
    let { MyJobsTableVisible } = this.state.MyJobsTableVisible;
    MyJobsTableVisible = MyJobsTableVisible ? false : true;
    this.setState({ MyJobsTableVisible });
  };

  handleMyActionsClick = () => {
    this.hideAllTables();
    let { MyActionsTableVisible } = this.state.MyActionsTableVisible;
    MyActionsTableVisible = MyActionsTableVisible ? false : true;
    this.setState({ MyActionsTableVisible });
  };

  handleResearchingClick = () => {
    this.hideAllTables();
    let { ResearchingTableVisible } = this.state.ResearchingTableVisible;
    ResearchingTableVisible = ResearchingTableVisible ? false : true;
    this.setState({ ResearchingTableVisible });
  };

  // counts for graph....
  updateStatusCounts = jobsArray => {
    let researchCount = 0;
    let appliedCount = 0;
    let interviewingCount = 0;
    let awaitingCount = 0;
    let resolvedCount = 0;
    jobsArray.forEach(job => {
      if (job.status === 'Researching') {
        researchCount++;
      } else if (job.status === 'Applied') {
        appliedCount++;
      } else if (job.status === 'Interviewing') {
        interviewingCount++;
      } else if (job.status === 'Awaiting') {
        awaitingCount++;
      } else if (job.status === 'Resolved') {
        resolvedCount++;
      }
    });
    this.setState({
      researchCount,
      appliedCount,
      interviewingCount,
      awaitingCount,
      resolvedCount
    });
  };

  render() {
    return (
      <div className="page">
        <Navbar />
        <div className="main-single">
          <div className="container-dashboard">
            <div className="hello-container">
              <h3>Hello USER</h3>
            </div>
            <div className="chart-container" onClick={this.handleMyJobsClick.bind(this)}>
              <h3>My Jobs</h3>

              <ChartContainer
                researching={this.state.researchCount}
                applied={this.state.appliedCount}
                interviewing={this.state.interviewingCount}
                awaiting={this.state.awaitingCount}
                resolved={this.state.resolvedCount}
              />
            </div>

            <Tabs defaultActiveKey={1} className="tab-container" id="tabs">
              <Tab eventKey={1} title="My Jobs">
                <div className="table-job">
                  <Myjobs jobs={this.state.jobsArray} />
                </div>
              </Tab>
              <Tab eventKey={2} title="To do's">
                <div className="table-job">
                  <MyActions actions={this.state.actionsArray} />
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
