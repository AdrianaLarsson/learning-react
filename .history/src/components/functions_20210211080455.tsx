import React from 'react'


function Functions(){

    function greet(){
        console.log('hello ')
      return ' Hello world'
    }

    
    return(
        <div>functions
            {greet()}
        </div>

    )
}

export default Functions;