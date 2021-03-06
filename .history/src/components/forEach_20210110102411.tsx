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
  const bigNumbers = numbers.map((number) => {
    return number * 100;
  });
  console.log("bignumbers : ", bigNumbers);

  const animals = [
    "Hen",
    "elephant",
    "llama",
    "leopard",
    "ostrich",
    "Whale",
    "octopus",
    "rabbit",
    "lion",
    "dog",
  ];
  const secretMessage = animals.map((animal) => animal[0]);
  const secretMessageTwo = animals.map((animal) => animal[2]);
  const joinS = secretMessage.join("");
  console.log("Secret message: ", joinS);
  const j = animals.join(); //expected output: Hen,elephant,llama,leopard,ostrich,Whale,octopus,rabbit,lion,dog
  console.log("animals.join(): ", j);
  const jo = animals.join("");
  console.log("animals.join(''): ", jo);
  const smallNum  = bigNumbers.map(num => num/100);
  console.log('smallNumbers: ', smallNum);

  const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 

  const shortWords = words.filter(word =>{
    return word.length < 5;
  })
  console.log('shortWords: ', shortWords);

  const randomNumbers = [375, 200, 3.14, 7, 13, 852];
  const less = randomNumbers.filter(num => num > 250)
  console.log('Less: ', less)
  const moreNum = randomNumbers.filter(num => {
    return num.
  })

  return (
    <div>
      ForEach {joinS} secretMessage: {secretMessage} secretMessageTwo: {secretMessageTwo}
    </div>
  );
}

export default ForEach;