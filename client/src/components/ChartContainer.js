import React, { Component } from 'react';
import Media from 'react-media';
import { Legend, BarChart, PieChart } from 'react-easy-chart';

class ChartContainer extends Component {
  state = {
    componentWidth: 600
  };

  mouseOverHandler = (d, e) => {
    this.setState({
      showToolTip: true,
      top: `${e.screenY - 10}px`,
      left: `${e.screenX + 10}px`,
      y: d.y,
      x: d.x
    });
  };

  mouseMoveHandler = e => {
    if (this.state.showToolTip) {
      this.setState({ top: `${e.y - 10}px`, left: `${e.x + 10}px` });
    }
  };

  mouseOutHandler = () => {
    this.setState({ showToolTip: false });
  };

  bigScreen = () => {
    this.setState({ componentWidth: 700 });
  };

  render() {
    const barData = [
      { x: 'Researching', y: this.props.researching, color: '#C46882' },
      { x: 'Applied', y: this.props.applied, color: '#975DA8' },
      { x: 'Interviews Scheduled', y: this.props.interviewing, color: '#9186FB' },
      { x: 'Awaiting Response', y: this.props.awaiting, color: '#86DDE4' },
      { x: 'Resolved', y: this.props.resolved, color: '#99D285' }
    ];

    const config = [
      { color: '#C46882' },
      { color: '#975DA8' },
      { color: '#9186FB' },
      { color: '#86DDE4' },
      { color: '#99D285' }
    ];

    const defaultStyles = {
      '.legend': {
        'list-style': 'none',
        marginLeft: 30,
        padding: 0
      }
    };

    return (
      <div className="App">
        <Media query="(max-width: 999px)">
          {matches =>
            matches ? (
              <div className="piechart">
                <PieChart
                  size={300}
                  labels
                  data={[
                    { key: 'Researching', value: this.props.researching, color: '#C46882' },
                    { key: 'Applied', value: this.props.applied, color: '#975DA8' },
                    { key: 'Interviews', value: this.props.interviewing, color: '#9186FB' },
                    { key: 'Awaiting', value: this.props.awaiting, color: '#86DDE4' },
                    { key: 'Resolved', value: this.props.resolved, color: '#99D285' }
                  ]}
                />
                <Legend
                  data={[
                    { key: 'Researching', value: this.props.researching },
                    { key: 'Applied', value: this.props.applied },
                    { key: 'Interviews', value: this.props.interviewing },
                    { key: 'Awaiting', value: this.props.awaiting },
                    { key: 'Resolved', value: this.props.resolved }
                  ]}
                  dataId={'key'}
                  config={config}
                  styles={defaultStyles}
                />
              </div>
            ) : (
              <BarChart
                axes={this.state.componentWidth > 400 ? true : false}
                colorBars
                grid
                width={this.state.componentWidth}
                height={this.state.componentWidth / 2}
                data={barData}
                mouseOverHandler={this.mouseOverHandler}
                mouseOutHandler={this.mouseOutHandler}
                mouseMoveHandler={this.mouseMoveHandler}
                yDomainRange={[0, 15]}
              />
            )
          }
        </Media>
      </div>
    );
  }
}

export default ChartContainer;
