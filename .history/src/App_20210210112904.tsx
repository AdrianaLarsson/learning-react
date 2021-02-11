import React from 'react';
import './App.css';
import ForEach from './components/forEach'
import Functions from './components/functions'
import Objects from './components/objects'
import Ctrl from './components/ctrl'
import Filter from './components/filter'

function App() {

  const newNumbers = [1, 3, 5, 7 ]

const newSum = newNumbers.reduce((accu,currentVal)=>{
  console.log('The value acc: ', accu)
  console.log('The value of currentVal: ',currentVal)
  return currentVal
},10)


const newNumbers2 = [1, 3, 5, 7];

// const newSum2 = newNumbers2.reduce((accumulator, currentValue) => {
//   console.log('The value of accumulator: ', accumulator);
//   console.log('The value of currentValue: ', currentValue);

// return accumulator + currentValue
// }, 10);

const newSum2 = newNumbers2.reduce((acc,curr)=>{
 console.log('The value of accumulator: ', acc);
console.log('The value of currentValue: ', curr);
  return acc + curr
})


console.log(newSum);
console.log('newSum: ', newSum2);



  return (
    <div className="App">
      <header className="App-header">
        <ForEach/>
        <Functions/>
        <Objects/>
        <Ctrl/>
        

      </header>
    </div>
  );
}

export default App;
