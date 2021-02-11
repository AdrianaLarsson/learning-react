import React from 'react'


function Functions(){

    function greet(name){
        console.log('hello world')
      return ' Hello world'
    }

    
    return(
        <div>functions
            <h1>{greet('A')}</h1>
        </div>

    )
}

export default Functions;