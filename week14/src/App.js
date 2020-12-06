import React from 'react';
import { useReducer } from 'react'; 
import {defaultState, reducer} from './components/ApplicationState'; 
import logo from './logo.svg';
import './App.css';

import StepCounter from './components/StepCounter';
import Active from './components/Active';

function App() {
  const [state, dispatch] = useReducer(reducer, defaultState); 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          
        </p>
        <StepCounter dispatch={dispatch} state={state} />
        <Active dispatch={dispatch} state={state} />

      </header>
    </div>
  );
}

export default App; 
