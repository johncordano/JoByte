import React from 'react';
import API from '../utils/API';
// import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Myjobs from './Myjobs';
import MyActions from './MyActions';
import ChartBlue from '../images/chart-blue.svg';
import ChartPurple from '../images/chart-purple.svg';
import { AreaChart, BarChart } from 'react-easy-chart';

// import API from '../utils/API';

class Dashboard extends React.Component {
  state = {
    jobsArray: [],
    actionsArray: [],
    MyJobsTableVisible: false,
    MyActionsTableVisible: false,
    ResearchingTableVisible: false
  };
  

  componentDidMount() {
    this.loadJob();
    this.loadActions();
  };

  loadJob = () => {
    API.getJob()
      .then(res => this.setState({ jobsArray: res.data }))
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

  render() {
    return (
      <div>
        <Navbar />
        <div className="centralized">
          <div className="container-dashboard">
            <div className="total-applied" onClick={this.handleMyJobsClick.bind(this)}>
              <h3>My Jobs</h3>
              <p id="jobCount">{this.state.jobsArray.length}</p>
              <img src={ChartBlue} alt="Char blue graphic" />
            </div>

            <div className="scheduled-interview" onClick={this.handleMyActionsClick.bind(this)}>
              <h3>To do's</h3>
              <p>{this.state.actionsArray.length}</p>
              <img src={ChartPurple} alt="Char blue graphic" />
            </div>
          </div>
          <div className="chart">
            <div className="total-researching" onClick={this.handleResearchingClick.bind(this)}>
              <h3>Researching</h3>
              <BarChart
                height={250}
                width={650}
                data={[
                  { x: 'Researching', y: 20, color: '#C46882' },
                  { x: 'Applied', y: 30, color: '#975DA8' },
                  { x: 'Interview Schedules', y: 40, color: '#9186FB' },
                  { x: 'Waiting Response', y: 20, color: '#86DDE4' },
                  { x: 'Resolved', y: 40, color: '#99D285' }
                ]}
                margin={{ top: 50, right: 100, bottom: 50, left: 100 }}
                padding={{ top: 100, right: 100, bottom: 50, left: 100 }}
              />
            </div>
          </div>
          {this.state.MyJobsTableVisible ? <Myjobs jobs={this.state.jobsArray} /> : null}
          {this.state.MyActionsTableVisible ? <MyActions actions={this.state.actionsArray} /> : null}
          {/*this.state.ResearchingTableVisible ? <ResearchingTable actions={this.props.jobs} /> : null */}

          {/*this.props.jobs.map(data => {
            if (data.status === 'Researching') {
              return (
                <tr key={data._id}>
                  <td>{data.company}</td>
                  <td>{data.position}</td>
                  <td>{data.link}</td>
                  <td>{data.status}</td>
                  <td />
                </tr>
              );
            }
          })*/}
        </div>
      </div>
    );
  }
}

export default Dashboard;
