import React from 'react';
// import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Myjobs from './Myjobs';
import MyActions from './MyActions';
import ChartBlue from '../images/chart-blue.svg';
import ChartPurple from '../images/chart-purple.svg';

// import API from '../utils/API';

class Dashboard extends React.Component {
  state = {
    MyJobsTableVisible: false,
    MyActionsTableVisible: false,
    ResearchingTableVisible: false
  };

  hideAllTables = () => {
    this.setState({
    MyJobsTableVisible: false,
    MyActionsTableVisible: false,
    ResearchingTableVisible: false
    })
  }

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
              <p id="jobCount">{this.props.jobs.length}</p>
              <img src={ChartBlue} alt="Char blue graphic" />
            </div>

            <div className="scheduled-interview" onClick={this.handleMyActionsClick.bind(this)}>
              <h3>To do's</h3>
              <p>{this.props.actions.length}</p>
              <img src={ChartPurple} alt="Char blue graphic" />
            </div>

            <div className="total-researching" onClick={this.handleResearchingClick.bind(this)}>
              <h3>Researching</h3>
            </div>
     

          </div>
          {this.state.MyJobsTableVisible ? <Myjobs jobs={this.props.jobs} /> : null}
          {this.state.MyActionsTableVisible ? <MyActions actions={this.props.actions} /> : null}
          {/*this.state.ResearchingTableVisible ? <ResearchingTable actions={this.props.jobs} /> : null */}
        </div>
      </div>
    );
  }
}

export default Dashboard;
