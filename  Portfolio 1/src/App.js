import React from 'react';
import logo from './logo.svg';
import './App.css';

import StepCounter from './components/StepCounter';
import Active from './components/Active';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          
        </p>
      <StepCounter/>
      <Active/>

      </header>
    </div>
  );
}

export default App;
