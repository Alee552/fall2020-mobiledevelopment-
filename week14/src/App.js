import React from 'react';
import { useReducer } from 'react'; 
import {defaultState, reducer} from './components/ApplicationState'; 
import logo from './logo.svg';
import './App.css';

import StepCounter from './components/StepCounter';
import Active from './components/Active';

function App() {
  const [state, dispatch] = useReducer(reducer,defaultState); 

  function increment(){ 
    dispatch({type:'increment'}); 
  }
function decrement(){
  dispatch({type: 'decrement'});
}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() =>{ dispatch({"type": "increment"})}}>Click increment here</button>
        <p>
          
        </p>
      <StepCounter/>
      <Active/>

      </header>
    </div>
  );
}

export default App; 
