import React from 'react';
import './App.css';
import ForEach from './components/forEach'

function App() {

  const fruits = ['mango','papaya','pinapple', 'apple']

  fruits.forEach(fruit =>{
    console.log('fruit: ',fruit)
  })

  return (
    <div className="App">
      <header className="App-header">
        <ForEach/>
    

      </header>
    </div>
  );
}

export default App;
