import React from 'react'


function Functions(){

    function greet(name: string){
        console.log('hello world')
      return ' Hello world'
    }

    
    return(
        <div>functions
            <h1>{greet('Adriana')}</h1>
        </div>

    )
}

export default Functions;