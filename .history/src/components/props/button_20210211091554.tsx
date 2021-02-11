import React from 'react'


interface Button {
text: string;
}

function Button(props: Button) {


    return (
        <button styl className='btn'> {props.text} </button>
        
    )
}

export default Button
