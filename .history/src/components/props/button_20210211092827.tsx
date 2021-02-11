import React from 'react'


interface Button {
text: string;
}

function Button(props: Button) {


    return (
        <d
        <button style={{backgroundColor: 'green'}} className='btn'> {props.text} </button>
        
    )
}

export default Button
