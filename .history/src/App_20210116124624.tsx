import React from 'react';
import './App.css';
import ForEach from './components/forEach'
import Functions from './components/functions'

function App() {

  const newNumbers = [1, 3, 5, ,7 ]

const newSum = newNumbers.reduce((accu,currentVal)=>{
  console.log('The value acc: ', accu)
  console.log('The value of currentVal: ',currentVal)
  return currentVal
},10)


const newNumbers2 = [1, 3, 5, 7];

const newSum2 = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
}, 10);

console.log(newSum);
console.log('newSum: ', newSum)


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
