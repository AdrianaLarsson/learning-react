import { join } from 'path';
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
    return number * 10;
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

  return (
    <div>
      ForEach {joinS} secretMessage: {secretMessage} secretMessageTwo: {secretMessageTwo}
    </div>
  );
}

export default ForEach;