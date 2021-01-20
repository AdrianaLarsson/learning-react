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

const newSum2 = newNumbers2.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  let a;
  if(accumulator || currentValue){
    a =  currentValue
    return a;
  }

}, 10);

console.log(newSum);
console.log('newSum: ', newSum);
console.log('newSum2: ', newSum2);


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
