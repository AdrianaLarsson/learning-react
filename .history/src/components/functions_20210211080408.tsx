import React from 'react'


function Functions(){

    function greet(){
      return 'Hello '
    }

    
    return(
        <div>functions
            {greet()}
        </div>

    )
}

export default Functions;