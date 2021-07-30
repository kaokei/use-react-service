import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Counter from './Counter';

function App() {
  console.log('App render :>> ');
  return (
    <div className="App">
      <div>
        <Counter></Counter>
      </div>
    </div>
  );
}

export default App;
