import React from 'react';

function ForEach(){
    const fruits = ['mango','papaya','pinapple', 'apple']

    fruits.forEach(fruit =>{
      console.log('fruit: ',fruit)
    })

    function printFruits(element: any){
        console.log('element: ',element)
    }
  const printF = fruits.forEach(printFruits)
console.log('printF: ', printF)


    return (
        
        <div>ForEach</div>
    )

}

export default ForEach;