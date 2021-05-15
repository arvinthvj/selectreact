import React from 'react';
import logo from './logo.svg';
import './App.css';
import SelectClass from './components/SelectClass';
import SelectSample from './components/Sample';


function App() {
  return (
    <div className="App">
     <h1>Hello App</h1>
    {/*  <SelectClass /> */}
     <SelectSample />
    </div>
  );
}

export default App;
