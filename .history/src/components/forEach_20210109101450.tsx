import React from 'react';

function ForEach(){
    const fruits = ['mango','papaya','pinapple', 'apple']

    fruits.forEach(fruit =>{
      console.log('fruit: ',fruit)
    })
    function printFruits(element: any){
        console.log('I want to eat: ',element)
    }
    fruits.forEach(printFruits)



    return (
        
        <div>ForEach</div>
    )

}

export default ForEach;