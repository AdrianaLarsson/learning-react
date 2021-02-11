import React from 'react'


function Functions(){

    function greet(nam){
        console.log('hello world')
      return ' Hello world'
    }

    
    return(
        <div>functions
            <h1>{greet()}</h1>
        </div>

    )
}

export default Functions;