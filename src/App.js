import React from 'react'
import './App.css';
import UseState from './Hooks/UseState/UseState';
import WindowSizeList from './Hooks/UseEffect/WindowSizeList';
import Context from './Hooks/Context';
import InnerWidthHeight from './Hooks/InnerWidthHeight';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UseState />
        <br />
        <WindowSizeList />
        <br />
       <Context />
       <br />
       <InnerWidthHeight />
      </header>
    </div>
  );
}

export default App;
