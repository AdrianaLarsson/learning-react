import React from 'react';
import './App.css';

function App() {

  const fruits = ['mango','papaya','pinapple', 'apple']

  fruits.forEach(fruit =>{
    console.log('fruit: ',fruit)
  })
  return (
    <div className="App">
      <header className="App-header">


<h1>Hej </h1>
      </header>
    </div>
  );
}

export default App;
