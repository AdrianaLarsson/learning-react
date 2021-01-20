import React from 'react';
import './App.css';
import ForEach from './components/forEach'
import Functions from './components/functions'

function App() {

  const newNumbers = [1, 3, 5, ,7 ]

  console.log(newNumbers.reduce(3))


  return (
    <div className="App">
      <header className="App-header">
        <ForEach/>
        <Functions/>

      </header>
    </div>
  );
}

export default App;
