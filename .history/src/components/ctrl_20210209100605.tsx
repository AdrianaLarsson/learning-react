import React from 'react'


function Ctrl(){

const ctrlButton = (e: event: MouseEvent<HTMLButtonElement, MouseEvent>) ) => {

    console.log('click')
    e.ctrlKey
    
}

    
    return(
        <div>Ctrl

            <button onClick={ctrlButton}>Klicka här</button>
        </div>

    )
}

export default Ctrl;