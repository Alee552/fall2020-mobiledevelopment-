import React from 'react';

export default class Active extends React.Component {

  constructor(props) {
    super(props);
    
      this.state= {
        counter: 0
    
      };
    }
    
  
    render() {
      return(
        <div class = "widget">
       <p> SwimLaps : {this.state.counter}</p>
       <button onClick={( ) => {
         this.setState({counter: this.state.counter + 1})}}> Increase! </button>
         <button onClick={( ) => {
         this.setState({counter: 0})}}> Reset </button>

               
       </div>
    
        );
      }
    }
    
   