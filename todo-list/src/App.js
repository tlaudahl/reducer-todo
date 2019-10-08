import React, { useReducer, useState } from 'react';
import { reducer, initialState } from './reducers/reducers';
import './App.css';
import Form from './components/Form';
import List from './components/List';




function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <Form dispatch={dispatch} />
      <List state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
