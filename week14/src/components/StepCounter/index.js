import React from 'react';

export default class StepCounter extends React.Component {

  constructor(props) {
      super(props);
      this.props = props; 
      this.state = {
        count: 0
      };
    }

    render() {
        return(
          <div class = "tracker">
            <p> StepsLog: {this.props.state.count}</p>
            <button onClick={( ) => {
              this.props.dispatch({ type: "increment" });
            }}>increment!</button>
            <button onClick={( ) => {
              this.props.dispatch({ type: "decrement" });
            }}>Decrement!</button>
          </div>
        );
      }
    }
