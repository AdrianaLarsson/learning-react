import React from 'react'


function Functions(){

    function greet(){
      return ' Hello world'
    }

    
    return(
        <div>functions
            {greet()}
        </div>

    )
}

export default Functions;