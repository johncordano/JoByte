import React from 'react';
import API from '../utils/API';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import YourJobs from './YourJobs';
import MyActions from './MyActions';
import { Tabs, Tab } from 'react-bootstrap';
import ChartContainer from './ChartContainer';

// import API from '../utils/API';

class Dashboard extends React.Component {
  state = {
    jobsArray: [],
    actionsArray: [],
    YourJobsTableVisible: false,
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
      YourJobsTableVisible: false,
      MyActionsTableVisible: false,
      ResearchingTableVisible: false
    });
  };

  handleYourJobsClick = () => {
    this.hideAllTables();
    let { YourJobsTableVisible } = this.state.YourJobsTableVisible;
    YourJobsTableVisible = YourJobsTableVisible ? false : true;
    this.setState({ YourJobsTableVisible });
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
      } else if (job.status === 'Interview Scheduled') {
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
        <Sidebar path={this.props.match.path} />
        <div className="main-single">
          <div className="container-dashboard">
            <div className="hello-container">
              <h3>Hello USER</h3>
            </div>
            <div className="chart-container" onClick={this.handleYourJobsClick.bind(this)}>
              <h3>Status of Your Jobs</h3>

              <ChartContainer
                researching={this.state.researchCount}
                applied={this.state.appliedCount}
                interviewing={this.state.interviewingCount}
                awaiting={this.state.awaitingCount}
                resolved={this.state.resolvedCount}
              />
            </div>

            <Tabs defaultActiveKey={1} className="tab-container" id="tabs">
              <Tab eventKey={1} title="Your Jobs">
                <div className="table-job">
                  {this.state.jobsArray.length === 0 ? (
                    <div className="nothing-inside">
                      <h4>You have no saved jobs.</h4>
                      <button className="add-job-btn">
                        <Link to="/job/new">Add Job</Link>
                      </button>
                    </div>
                  ) : (
                    <YourJobs jobs={this.state.jobsArray} />
                  )}
                </div>
              </Tab>
              <Tab eventKey={2} title="Your Actions">
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
