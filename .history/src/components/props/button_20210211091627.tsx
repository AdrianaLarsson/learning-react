import React from 'react'


interface Button {
text: string;
}

function Button(props: Button) {


    return (
        <button style={{backgroundColor: 'gr'}} className='btn'> {props.text} </button>
        
    )
}

export default Button
