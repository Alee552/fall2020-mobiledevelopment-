import React from 'react';

export default class Example extends React.Component {
render() {
  return (<p> Hi, my name is { this.props.name }. </p>);
    }
}

//Attempt to change background color 
class Example extends React.Component {
  render() {
    return (
      <div>
      <p>Hello Everyone!</p>
      </div>
    );
  }
}
// ATTEMPT TO CHANGE FONT COLOR OF NAME 
class Example extends React.Component {
  render() {
    return (
      <div>
      <p style={{color:"lightblue"}}  />
      </div>
    );
  }
}
export default App;