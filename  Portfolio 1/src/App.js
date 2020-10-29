import React from 'react';
import logo from './logo.svg';
import './App.css';

import StepCounter from './components/StepCounter';
import Active from './components/Active';
import BackgroundColor from './components/BackgroundColor';
import ColorSwitchButton from './components/ ColorSwitchButton'; 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <BackgroundColor/>
        </p>
      <StepCounter/>
      <Active/>
      <ColorSwitchButton/>

      </header>
    </div>
  );
}

export default App;
