import React from 'react';

export default class Active extends React.Component {

  constructor(props) {
      super(props);
      this.props = props; 
      this.state = {
        count: 2
      };
    }

    render() {
        return(
          <div class = "widget">
            <p> SwimLaps: {this.props.state.count2}</p>
            <button onClick={( ) => {
              this.props.dispatch({ type: "increment2" });
            }}>increment!</button>
            <button onClick={( ) => {
              this.props.dispatch({ type: "decrement2" });
            }}>Decrement!</button>
          </div>
        );
      }
    }

