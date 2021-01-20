import React from 'react';
import './App.css';
import ForEach from './components/forEach'
import Functions from './components/functions'

function App() {

  const newNumbers = [1, 3, 5, ,7 ]

const newSum = newNumbers.reduce((accu,currentVal)=>{
  console.log('The value acc: ', accu)
  console.log('The value of currentVal: ',currentVal)

},10)


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
