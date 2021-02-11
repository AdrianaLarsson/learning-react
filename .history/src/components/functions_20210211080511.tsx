import React from 'react'


function Functions(){

    function greet(){
        console.log('hello world')
      return ' Hello world'
    }

    
    return(
        <div>functions
            <h1></h1>{greet()}
        </div>

    )
}

export default Functions;