import React from 'react'


function Ctrl(){

const ctrlButton = () => {

    console.log('click')
    
}

    
    return(
        <div>Ctrl

            <button onClick={ctrlButton}>Klicka här</button>
        </div>

    )
}

export default Ctrl;