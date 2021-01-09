import React from 'react';

function ForEach() {
    //foreach
  const fruits = ["mango", "papaya", "pinapple", "apple"];
  fruits.forEach((fruit) => {
    console.log("fruit: ", fruit);
  });
  function printFruits(element: any) {
    console.log("I want to eat: ", element);
  }
  fruits.forEach(printFruits);
  fruits.forEach((fruit) => console.log(`Jag vill äta ${fruit}`));

  const numbers = [1, 2, 3, 4, 5];
   const bigNumbers = numbers.map(number =>{
       return number * 10
   })
   console.log('bignumbers : ' bigNumbers)

  return <div>ForEach</div>;
}

export default ForEach;