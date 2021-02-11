import React from 'react'


interface Button {
text: string;
}

function Button(props: Button) {


    return (
        <div>
        <button style={{backgroundColor: 'green'}} className='btn'> {props.text} </button>

        </div>
        
    )
}

export default Button
