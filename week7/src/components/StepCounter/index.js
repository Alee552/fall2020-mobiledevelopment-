import React from 'react';

export default class StepCounter extends React.Component {

  constructor(props) {
    super(props);
    
      this.state= {
        counter: 0
    
      };
    }
    
    
    render() {
      return(
        <div class = "tracker">
       <p> Count: {this.state.counter}</p>
       <button onClick={( ) => {
         this.setState({counter: this.state.counter + 1})}}> Increase! </button>

               
       </div>
    
        );
      }
    }
    
   