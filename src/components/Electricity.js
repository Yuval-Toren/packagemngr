import React from 'react';
import {
    Chart,
    LineSeries,
    SplineSeries,
  } from '@devexpress/dx-react-chart-material-ui';
  import Paper from '@material-ui/core/Paper';
  
  
  const generateData = (start, end, step) => {
    const data = [];
    for (let i = start; i < end; i += step) {
      data.push({ splineValue: Math.sin(i) / i, lineValue: ((i / 15) ** 2.718) - 0.2, argument: i });
    }
  
    return data;
  };

  export default class Electricity extends React.PureComponent {
    constructor(props) {
      super(props);
  
      this.state = {
        data: generateData(2.5, 12, Math.random()),
      };
    }

    componentDidMount() {
        this.intervalID = setInterval(
          () => this.tick(),
          1000
        );
      }
      componentWillUnmount() {
        clearInterval(this.intervalID);
      }

    tick() {
        this.setState({
            data: generateData(2.5, 12, Math.random())
        });
      }
  
    render() {
      const { data: chartData } = this.state;
  
      return (
        <Paper>
          <Chart
            data={chartData}
          >
            <LineSeries
              valueField="lineValue"
              argumentField="argument"
            />
            <SplineSeries
              valueField="splineValue"
              argumentField="argument"
            />
          </Chart>
        </Paper>
      );
    }
  }





// function Electricity() {

//     return (
//     <React.Fragment>
//       <CssBaseline />
//       <Container maxWidth="sm">
//       <Paper>
//         <Chart
//           data={chartData}
//         >
//           <LineSeries
//             valueField="lineValue"
//             argumentField="argument"
//           />
//           <SplineSeries
//             valueField="splineValue"
//             argumentField="argument"
//           />
//         </Chart>
//       </Paper>
//       </Container>
//     </React.Fragment>
//     );
// }

// export default Electricity;